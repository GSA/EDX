import * as utils from "../src/utils";
import * as wmd from "../src/websitesMetadata";
import MockDate from "mockdate";
// Applies to all tests in this file
beforeEach(() => {
  //return initializeCityDatabase();
});

describe("createUrl", () => {
  test("url created with all options", async () => {
    const expectedReturn: wmd.WebsiteMetadata = {
      cookies: { name: "", value: "", domain: "", path: "" },
      customPrivacyPolicy: false,
      searchNotReq: true,
      wwwPrefix: "www.",
      queryString: "?abc=123",
      urlPath: "/a/b/c/d",
      notes: "",
    };
    const spy = jest.spyOn(wmd, "getWebsiteMetadata");
    spy.mockReturnValue(expectedReturn);

    expect(await utils.createUrl("abc.gov")).toMatch(
      "https://www.abc.gov/a/b/c/d?abc=123"
    );
  });
  test("url created when all properties are blank", async () => {
    const expectedReturn: wmd.WebsiteMetadata = {
      cookies: { name: "", value: "", domain: "", path: "" },
      customPrivacyPolicy: false,
      searchNotReq: true,
      wwwPrefix: "",
      queryString: "",
      urlPath: "",
      notes: "",
    };
    const spy = jest.spyOn(wmd, "getWebsiteMetadata");
    spy.mockReturnValue(expectedReturn);

    expect(await utils.createUrl("def.gov")).toMatch("https://def.gov");
  });
});

describe("get domain", () => {
  const testData = {
    "gsa.gov/blah/di/blah": "gsa.gov",
    "super.amazing.gsa.gov/something": "super.amazing.gsa.gov",
  };
  for (const item in testData) {
    test(item, async () => {
      expect(await utils.getDomain(item)).toMatch(testData[item]);
    });
  }
});

describe("getFormattedDate()", () => {
  // [date string, yyyymmdd, yyyymmdd_hhmm]
  const testDates = [
    ["January 1, 1995 03:24:00", "19950101", "19950101_0324"],
    ["October 1, 1995 13:09:00", "19951001", "19951001_1309"],
    ["December 12, 1995 23:00:00", "19951212", "19951212_2300"],
  ];
  const testFormats: utils.dateString[] = ["YYYYMMDD", null];
  describe.each(testFormats)(`%p`, (format: utils.dateString) => {
    test.each(testDates)(
      `If today is %p, date returned is formatted correctly`,
      (input, shortOutput, longOutput) => {
        MockDate.set(new Date(input));
        const formattedDate = utils.getFormattedDate(format);
        expect(formattedDate).toMatch(shortOutput);
        MockDate.reset();
      }
    );
  });
  test.each(testDates)(
    `If today is %p, date returned is formatted correctly`,
    (input, shortOutput, longOutput) => {
      MockDate.set(new Date(input));
      const formattedDate = utils.getFormattedDate("YYYYMMDD_HHMM");
      expect(formattedDate).toMatch(longOutput);
      MockDate.reset();
    }
  );

  describe("leadingZeros()", () => {
    type testNum = [number, string];
    test.each<testNum>([
      [0, "00"],
      [1, "01"],
      [2, "02"],
      [9, "09"],
      [10, "10"],
      [21, "21"],
    ])(
      `Input value of, %p expecting value of %p returned`,
      function (input, output) {
        const formattedNumber = utils.leadingZeros(input);
        expect(formattedNumber).toMatch(output);
      }
    );
  });

  test("Returned date format matches expected 'YYYYMMDD'", () => {
    expect(utils.getFormattedDate()).toMatch(/\d{8}/);
  });
  test("Returned date format matches expected 'YYYYMMDD_HHMM'", () => {
    expect(utils.getFormattedDate("YYYYMMDD_HHMM")).toMatch(/\d{8}_\d{4}/);
  });
});

describe("printHash()", () => {
  test('hash of "sausages" is correct', async () => {
    expect(await utils.printHash("sausages")).toMatch(
      "9bf0fdecf047d6d5ceac40ae1758bc5e"
    );
  });
});

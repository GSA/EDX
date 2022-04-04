import * as utils from "../src/utils";
import * as wmd from "../src/websitesMetadata";
import MockDate from "mockdate";
// Applies to all tests in this file
beforeEach(() => {
  //return initializeCityDatabase();
});

describe("createUrl", () => {
  test("url created with all options", async () => {
    const expectedReturn = {
      cookies: { name: "", value: "", domain: "", path: "" },
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
    const expectedReturn = {
      cookies: { name: "", value: "", domain: "", path: "" },
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
  const testDates = [
    ["January 1, 1995", "19950101"],
    ["October 1, 1995", "19951001"],
    ["December 12, 1995", "19951212"],
  ];
  test.each(testDates)(
    `If today is %p, date returned is formatted correctly`,
    (input, expectedOutput) => {
      MockDate.set(new Date(input));
      const formattedDate = utils.getFormattedDate();
      expect(formattedDate).toMatch(expectedOutput);
      MockDate.reset();
    }
  );
  test("Returned date format matches expected 'YYYYMMDD'", () => {
    expect(utils.getFormattedDate()).toMatch(/\d{8}/);
  });
});

describe("printHash()", () => {
  test('hash of "sausages" is correct', async () => {
    expect(await utils.printHash("sausages")).toMatch(
      "9bf0fdecf047d6d5ceac40ae1758bc5e"
    );
  });
});

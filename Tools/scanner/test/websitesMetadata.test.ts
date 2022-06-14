import * as wmd from "../src/websitesMetadata";
describe("websitesMetadata", () => {
  const metadata: Record<string, wmd.WebsiteMetadata> = {
    "abc.gsa.gov": {
      cookies: { name: "", value: "", domain: "", path: "" },
      customPrivacyPolicy: false,
      searchNotReq: true,
      wwwPrefix: "www.",
      queryString: "?abc=123",
      urlPath: "/a/b/c/d",
      notes: "",
    },
    "xyz.gsa.gov": {
      cookies: { name: "", value: "", domain: "", path: "" },
      customPrivacyPolicy: false,
      searchNotReq: false,
      wwwPrefix: "www2.",
      queryString: "?xyz=321",
      urlPath: "/d/e/f/g",
      notes: "",
    },
  };
  describe("getWebsiteMetadata", () => {
    test("returns", async () => {
      const expectedReturn = {
        wwwPrefix: "www.",
        queryString: "?abc=123",
        urlPath: "/a/b/c/d",
      };
      const { wwwPrefix, queryString, urlPath } = wmd.getWebsiteMetadata(
        metadata,
        "abc.gsa.gov"
      );
      expect({ wwwPrefix, queryString, urlPath }).toEqual(expectedReturn);
    });
    test("returns blank values", async () => {
      const expectedReturn = {
        wwwPrefix: "",
        queryString: "",
        urlPath: "",
      };
      const { wwwPrefix, queryString, urlPath } = wmd.getWebsiteMetadata(
        metadata,
        "def.gsa.gov"
      );
      expect({ wwwPrefix, queryString, urlPath }).toEqual(expectedReturn);
    });
  });
});

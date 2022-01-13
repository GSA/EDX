import { readFile } from "fs";
import { opendir, appendFile } from "fs/promises";

const dirName = "results/20220112";

try {
  const dir = await opendir(dirName);
  appendFile(
    dirName + "/results.csv",
    "Requested URL, Final URL, Accessibility Score, Content Width, Tap Targets, User Agent\n"
  );
  //console.log(dirent.name);
  for await (const dirent of dir)
    readFile(dir.path + "/" + dirent.name, "utf8", (err, jsonString) => {
      if (err) {
        console.log("Error reading file from disk:", err);
        return;
      }
      try {
        const data = JSON.parse(jsonString);
        const fields = [
          data.finalUrl,
          data.requestedUrl,
          data.categories.accessibility.score,
          data.audits["content-width"]["score"],
          data.audits["tap-targets"]["score"],
          data.configSettings.emulatedUserAgent,
        ];
        appendFile(dirName + "/results.csv", fields.join(",") + "\n");
        console.log(fields.join(","));
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
    });
} catch (err) {
  console.error(err);
}

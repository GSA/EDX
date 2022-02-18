const fs = require("fs").promises;
const path = require("path");

const date = new Date();
const formattedDate = `${date.getFullYear()}${date.getMonth() < 10 ? "0" : ""}${
  date.getMonth() + 1
}${date.getDate() < 10 ? "0" : ""}_${date.getHours()}${
  date.getMinutes() < 10 ? "0" : ""
}${date.getMinutes()}`;

const mover = async (folderName, destFolder) => {
  async function findFiles(folderName) {
    const files = await fs.readdir(folderName, { withFileTypes: true });
    for (const file of files) {
      if (file.isDirectory()) {
        await findFiles(`${folderName}/${file.name}`);
      } else {
        const regex = /(_desktop\.png|_mobile\.png|\.json)/;
        const domainName = file.name.replace(regex, "");
        await fs.mkdir(`${destFolder}/${domainName}`, { recursive: true });
        fs.copyFile(
          `${folderName}/${file.name}`,
          `${destFolder}/${domainName}/${file.name}`
        );
      }
    }
  }
  await findFiles(folderName);
};

(async function () {
  const dirName = path.join(__dirname, "data/20220201");
  const destination = path.join(__dirname, "data/mover");
  await mover(dirName, destination);
})();

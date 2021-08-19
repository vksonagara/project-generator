const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const cwd = process.cwd();

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  if (!fs.existsSync(`${cwd}/${newProjectPath}`)) {
    fs.mkdirSync(`${cwd}/${newProjectPath}`);
  }

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, "utf8");

      const writePath = `${cwd}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, "utf8");
      console.log(chalk.bgGreen(chalk.black("Created file:")), writePath);
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${cwd}/${newProjectPath}/${file}`);
      console.log(
        chalk.bgGreen(chalk.black("Created directory:")),
        `${cwd}/${newProjectPath}/${file}`
      );

      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
}

function generateTemplate(template, projectName) {
  createDirectoryContents(
    path.join(__dirname, "../templates", template),
    projectName
  );
}

module.exports = generateTemplate;

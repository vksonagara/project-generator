const questions = [
  {
    type: "input",
    name: "projectName",
    message: "Project directory",
    validate: (val) => {
      if (!val) {
        return false;
      }
      return true;
    }
  },
  {
    type: "list",
    name: "template",
    message: "Select a template to generate",
    default: "express-typescript",
    choices: ["express-typescript"],
  },
];

module.exports = questions;

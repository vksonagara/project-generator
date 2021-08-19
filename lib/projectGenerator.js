const inquirer = require("inquirer");
const questions = require("./questions");
const generateTemplate = require("./generateTemplate");

inquirer
  .prompt(questions)
  .then((answers) => {
    generateTemplate(answers.template, answers.projectName);
  })
  .catch((err) => {
    console.log(err);
  });

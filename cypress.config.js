const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

//const env = process.env.CYPRESS_ENV;

module.exports = defineConfig({
  // retries: 2,
  // video: true,
  // screenshotOnRunFailure: true,
  // reporter: "mochawesome",
  // reporterOptions: {
  //   reportDir: "cypress/reports",
  //   overwrite: false,
  //   html: true,
  //   json: true,
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
    },
  },
  //env: require(`./config/${env}.env.js`),
});

// Central config for baseUrl, retries, reporter, etc.

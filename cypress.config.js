const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      allureCypress (on, config, {
        resultsDir: "allure-results",
      })
    },
  },
});

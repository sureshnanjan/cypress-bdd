const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "qznsbg",
  watchForFileChanges: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber()),
        // This is needed later only
        on("task", {
          getTestDataRandomized(message) {
            console.log(message);
            //return `${message}-randomseeded`
            return "Welcome to the-internet";
          },
        });
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jx,ts,tsx}", "**/*.feature"],
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

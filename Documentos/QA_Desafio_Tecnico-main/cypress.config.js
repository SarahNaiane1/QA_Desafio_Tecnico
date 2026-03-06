const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    // Onde ficam os arquivos .feature
    specPattern: "features/*.feature",

    // Configuração do plugin Cucumber
    setupNodeEvents(on, config) {
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});

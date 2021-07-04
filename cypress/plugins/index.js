/// <reference types="cypress" />
/*
  Criar a constante e iniciar o plugin
*/

/**
 * @type {Cypress.PluginConfig}
 */

const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  initPlugin(on, config);
  return config;
}

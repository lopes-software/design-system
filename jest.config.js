module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  testMatch: [
    '**/?(*.)(spec).js?(x)',
    '**/?(*.)(test).js?(x)'
  ],
}

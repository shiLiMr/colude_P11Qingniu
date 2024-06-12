/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  requireConfigFile: false,
  root: true,
  env: {
    node: true
  },
  //
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-undef': ['off']
  }
}

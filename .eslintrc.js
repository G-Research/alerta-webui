module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/vue3-essential', 
    '@vue/typescript'
  ],
  rules: {
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'off', 
    'vue/no-deprecated-slot-attribute': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    quotes: ['error', 'single'],
    'vue/script-indent': 'error',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'no-undef': 0,
    'vue/html-indent': 2,
    'vue/require-default-prop': 1,
    'vue/attributes-order': 2,
    'vue/this-in-template': 1,
    'vue/html-end-tags': 2,
    'vue/max-attributes-per-line': 2,
    'vue/require-prop-types': 2,
    'vue/html-self-closing': 2,
    'vue/no-multi-spaces': 2,
    'vue/html-quotes': 2,
    'vue/html-closing-bracket-spacing': [
      2,
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    'vue/script-indent': 2
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

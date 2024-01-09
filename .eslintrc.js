module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  rules: {
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        ignore: ['update'],
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['#region', '#endregion', 'region', 'endregion'],
        },
      },
    ],
    'prefer-promise-reject-errors': 'off',
    'import/no-named-default': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
      },
    ],
  },
};

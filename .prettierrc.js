module.exports = {
  arrowParens: 'always',
  trailingComma: 'es5',
  semi: true,
  useTabs: false,
  bracketSpacing: true,
  singleQuote: true,
  printWidth: 140,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 8000,
      },
    },
  ],
};

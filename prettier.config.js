module.exports = {
  singleQuote: true,
  goTemplateBracketSpacing: true,
  bracketSameLine: false,
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
      },
    },
  ],
  plugins: [require.resolve('prettier-plugin-go-template')],
};

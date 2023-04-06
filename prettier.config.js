module.exports = {
	singleQuote: true,
	useTabs: true,
	semi: false,
	goTemplateBracketSpacing: true,
	overrides: [
		{
			files: ['*.html'],
			options: {
				parser: 'go-template',
			},
		},
	],
	plugins: [require.resolve('prettier-plugin-go-template')],
}

/** @type {import("prettier").Config} */
module.exports = {
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	printWidth: 100,
	tabWidth: 4,
	semi: true,
	useTabs: true,
	singleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	arrowParens: "avoid",
	proseWrap: "preserve",
};

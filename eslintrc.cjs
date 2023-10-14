module.exports = {
	env: {
		browser: true,
		node: true,
		amd: true,
		es2022: true
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],

	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"react/react-in-jsx-scope": "off"
	}
}

module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 13,
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"ignorePatterns": ["build/*.js", "build.js"],
	"rules": {
		"prefer-const": ["off"],
		"@typescript-eslint/no-explicit-any": ["off"],
		"indent": ["error", "tab", { "SwitchCase": 1, "flatTernaryExpressions": true }],
		"no-useless-escape": ["off"],
		"semi": ["error", "always"],
		"@typescript-eslint/no-empty-function": ["off"],
		"no-constant-condition": ["error", { "checkLoops": false }],
		"no-cond-assign": ["off"],
		"@typescript-eslint/no-unused-vars": ['warn', { argsIgnorePattern: '^_' }],
		"no-async-promise-executor": ["off"],
		"@typescript-eslint/no-this-alias": ["off"],
		"no-empty": ["error", { "allowEmptyCatch": true }],
		"no-trailing-spaces": ["warn"],
		"eqeqeq": ["error", "always"],
		"no-warning-comments": ["warn", { "terms": ["todo", "fixme", "temp"] }],
		"no-fallthrough": ["off"],
		"max-len": ["warn", { "code": 120, "tabWidth": 4 }],
		"no-undef": ["off"]
	}
};
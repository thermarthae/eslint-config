const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
	indent: 'tab',
	semi: true,
	jsx: false,
	braceStyle: '1tbs',
	quoteProps: 'as-needed',
});

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:@stylistic/disable-legacy',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
		'@stylistic',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	settings: {
		'import/external-module-folders': ['.yarn', 'node_modules', 'node_modules/@types'],
	},
	overrides: [
		{
			files: ['*.cjs'],
			env: {
				node: true,
			},
		},
		{
			files: ['*.cjs', '*.js'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 0,
				'@typescript-eslint/no-unsafe-assignment': 0,
				'@typescript-eslint/no-unsafe-call': 0,
				'@typescript-eslint/no-unsafe-member-access': 0,
				'@typescript-eslint/no-var-requires': 0,
			},
		},
	],
	rules: {
		...customized.rules,
		'@stylistic/arrow-parens': ['error', 'as-needed', {
			requireForBlockBody: true,
		}],
		'@stylistic/linebreak-style': ['error', 'windows'],
		'@stylistic/max-len': ['error', { code: 120 }],
		'@stylistic/no-multiple-empty-lines': ['error', {
			max: 3,
			maxBOF: 0,
			maxEOF: 1,
		}],
		'@stylistic/max-statements-per-line': 0,
		'@stylistic/indent-binary-ops': 0,
		//
		'@typescript-eslint/array-type': ['error', {
			default: 'array-simple',
		}],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow-as-parameter',
		}],
		'@typescript-eslint/consistent-type-definitions': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-misused-promises': ['error', {
			checksVoidReturn: false,
		}],
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		//
		'import/no-unresolved': 0,
		// TODO: https://github.com/import-js/eslint-plugin-import/pull/2813
		// 'import/extensions': ['error', 'always', { ignorePackages: true }],
		//
		'simple-import-sort/imports': ['warn', {
			groups: [
				// Side effect imports.
				['^\\u0000'],
				[
					'^node:',
					'react',
					// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
					'^@?\\w',
				],
				// Absolute imports and other imports such as Vue-style `@/foo`.
				['^'],
				[
					// ../whatever/
					'^\\.\\./(?=.*/)',
					// ../
					'^\\.\\./',
				],
				[
					// ./whatever/
					'^\\./(?=.*/)',
					// ./
					'^\\./',
				],
			],
		}],
		//
		'object-shorthand': ['error', 'always', { avoidQuotes: true }],
		'no-param-reassign': ['error', {
			ignorePropertyModificationsFor: [
				'request',
				'reply',
				'session',
				'state',
			],
			props: true,
		}],
		'no-void': ['error', { allowAsStatement: true }],
		yoda: ['error', 'never', { exceptRange: true }],
	},
};

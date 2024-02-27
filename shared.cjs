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
	],
	plugins: [
		'@typescript-eslint',
		'import',
		'simple-import-sort',
		'@stylistic',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		sourceType: 'module',
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
		'@typescript-eslint/promise-function-async': 'error',
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
		'no-param-reassign': ['error', {
			ignorePropertyModificationsFor: [
				'request',
				'reply',
				'session',
			],
			props: true,
		}],
		'no-void': ['error', { allowAsStatement: true }],
		yoda: ['error', 'never', { exceptRange: true }],
	},
};

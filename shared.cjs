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
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:@stylistic/disable-legacy',
	],
	plugins: [
		'@stylistic',
		'simple-import-sort',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		project: true,
		warnOnUnsupportedTypeScriptVersion: false,
	},
	overrides: [
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
		{
			files: '*.d.ts',
			rules: {
				'import/prefer-default-export': 0,
			},
		},
	],
	rules: {
		...customized.rules,
		'arrow-parens': 0,
		'linebreak-style': 0,
		'max-len': 0,
		'no-multiple-empty-lines': 0,
		'no-tabs': 0,

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


		'@typescript-eslint/array-type': ['error', {
			default: 'array-simple',
		}],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow-as-parameter',
		}],
		'@typescript-eslint/consistent-type-definitions': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-misused-promises': ['error', {
			checksVoidReturn: false,
		}],
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/promise-function-async': 'error',

		'import/no-cycle': 0,
		'import/no-named-as-default': 0, // its not very performant

		'no-plusplus': 0,
		'arrow-body-style': 0,
		'consistent-return': 0, // annoys inside react hooks
		'no-continue': 0,
		'no-console': 0,
		'no-param-reassign': ['error', {
			ignorePropertyModificationsFor: [
				'request',
				'reply',
				'session',
			],
			props: true,
		}],
		'no-restricted-exports': 0,
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain,'
					+ ' which is virtually never what you want. Use Object.{keys,values,entries},'
					+ ' and iterate over the resulting array.',
			},
		],
		'no-void': ['error', {
			allowAsStatement: true,
		}],
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
		yoda: ['error', 'never', {
			exceptRange: true,
		}],
	},
};

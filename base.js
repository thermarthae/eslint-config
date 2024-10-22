import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsEslint from 'typescript-eslint';

const stylisticCustomized = stylistic.configs.customize({
	flat: true,
	indent: 'tab',
	semi: true,
	jsx: false,
	braceStyle: '1tbs',
	quoteProps: 'as-needed',
});

/** @type {typeof import('typescript-eslint').configs.all} */
const base = [
	//
	// eslint
	//
	eslint.configs.recommended,
	{
		rules: {
			'object-shorthand': ['error', 'always', { avoidQuotes: true }],
			'no-duplicate-imports': 'error',
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
	},
	//
	// typescript-eslint
	//
	...tsEslint.configs.recommendedTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	{
		...tsEslint.configs.disableTypeChecked,
		files: ['*.cjs', '*.js'],
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				ecmaVersion: 'latest',
			},
		},
		rules: {
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
		},
	},
	//
	// stylistic
	//
	{
		// `disable-legacy` without rules that starts with 'react/'
		...stylistic.configs['disable-legacy'],
		rules: Object.fromEntries(Object.entries(stylistic.configs['disable-legacy'].rules ?? {})
			.filter(r => !r[0].startsWith('react/'))),
	},
	{
		...stylisticCustomized,
		rules: {
			...stylisticCustomized.rules,
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
		},
	},
	//
	// simple-import-sort
	//
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
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
		},
	},
];

export default base;

module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	plugins: ['simple-import-sort'],
	parserOptions: {
		ecmaVersion: 'latest',
		project: 'tsconfig.json',
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
		'@typescript-eslint/array-type': ['error', {
			default: 'array-simple',
		}],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow-as-parameter',
		}],
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
		}],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-misused-promises': ['error', {
			checksVoidReturn: false,
		}],
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unsafe-assignment': 0, // its not very performant
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'arrow-parens': ['error', 'as-needed', {
			requireForBlockBody: true,
		}],
		'import/no-cycle': 0,
		'import/no-named-as-default': 0, // its not very performant
		'linebreak-style': ['error', 'windows'],
		'max-len': ['error', { code: 120 }],
		'no-console': 0,
		'no-multiple-empty-lines': ['error', {
			max: 3,
			maxBOF: 0,
			maxEOF: 1,
		}],
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
		'no-tabs': 0,
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

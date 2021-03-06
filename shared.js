module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parserOptions: {
		ecmaVersion: 2021,
		project: 'tsconfig.json',
		warnOnUnsupportedTypeScriptVersion: false,
	},
	overrides: [
		{
			files: '*.js',
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
		'no-tabs': 0,
		'no-void': ['error', {
			allowAsStatement: true,
		}],
		yoda: ['error', 'never', {
			exceptRange: true,
		}],
	},
};

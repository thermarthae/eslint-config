const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
	indent: 'tab',
	semi: true,
	jsx: true,
	braceStyle: '1tbs',
	quoteProps: 'as-needed',
});

const jsxStylisticRules = Object.fromEntries(Object.entries(customized.rules ?? {})
	.filter(r => r[0].startsWith('@stylistic/jsx')));

module.exports = {
	extends: [
		'./shared.cjs',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@stylistic/disable-legacy',
	],
	plugins: ['jsx-a11y'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		...jsxStylisticRules,
		'@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
		'@stylistic/jsx-curly-brace-presence': ['error', {
			props: 'never',
			children: 'never',
			propElementValues: 'always',
		}],
		'@stylistic/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
		'@stylistic/jsx-self-closing-comp': 'error',
		'@stylistic/jsx-props-no-multi-spaces': 'error',
		//
		'react/no-unknown-property': 0,
		'react/no-children-prop': 0,
		'react/prop-types': 0,
		'react/jsx-boolean-value': ['error', 'never', { always: [] }],
		'react/void-dom-elements-no-children': 'error',
		'react/button-has-type': ['error', {
			button: true,
			submit: true,
			reset: false,
		}],
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-no-constructed-context-values': 'error',
		'react/no-unstable-nested-components': 'error',
	},
};

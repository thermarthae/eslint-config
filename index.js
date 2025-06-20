import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import base from './base.js';

const stylisticCustomizedWithJSX = stylistic.configs.customize({
	indent: 'tab',
	semi: true,
	jsx: true,
	braceStyle: '1tbs',
	quoteProps: 'as-needed',
});

// all `stylisticCustomizedWithJSX` rules that starts with '@stylistic/jsx'
const jsxStylisticRules = Object.fromEntries(Object.entries(stylisticCustomizedWithJSX.rules ?? {})
	.filter(r => r[0].startsWith('@stylistic/jsx')));

/** @type {typeof import('typescript-eslint').configs.all} */
const main = [
	...base,
	//
	// react
	//
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'react/react-in-jsx-scope': 0,
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
	},
	//
	// react-hooks
	//
	reactHooks.configs['recommended-latest'],
	//
	// jsx-a11y
	//
	jsxA11y.flatConfigs.recommended,
	//
	// stylistic
	//
	{
		// all `disable-legacy` rules that starts with 'react/'
		...stylistic.configs['disable-legacy'],
		rules: Object.fromEntries(Object.entries(stylistic.configs['disable-legacy'].rules ?? {})
			.filter(r => r[0].startsWith('react/'))),
	},
	{
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
		},
	},
];

export default main;

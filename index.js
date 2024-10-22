import react from 'eslint-plugin-react';
// @ts-expect-error no types :/
import reactHooks from 'eslint-plugin-react-hooks';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import shared from './shared.js';

const stylisticCustomizedWithJSX = stylistic.configs.customize({
	flat: true,
	indent: 'tab',
	semi: true,
	jsx: true,
	braceStyle: '1tbs',
	quoteProps: 'as-needed',
});

const jsxStylisticRules = Object.fromEntries(Object.entries(stylisticCustomizedWithJSX.rules ?? {})
	.filter(r => r[0].startsWith('@stylistic/jsx')));

/** @type {typeof import('typescript-eslint').configs.all} */
const main = [
	...shared,
	//
	// react
	//
	// react.configs.flat.recommended,
	// react.configs.flat['jsx-runtime'],
	// TODO: wait for a types fix
	/** @type {typeof import('typescript-eslint').configs.base} */ (react.configs.flat.recommended),
	/** @type {typeof import('typescript-eslint').configs.base} */ (react.configs.flat['jsx-runtime']),
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
	// TODO: wait for a native flat support
	{
		files: ['**/**/*.{js,ts,jsx,tsx}'],
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: reactHooks.configs.recommended.rules,
	},
	//
	// jsx-a11y
	//
	jsxA11y.flatConfigs.recommended,
	//
	// stylistic
	//
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

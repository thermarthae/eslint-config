import react from '@eslint-react/eslint-plugin';
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

/** @type {import('eslint').Linter.Config[]} */
const main = [
	...base,
	//
	// react
	//
	react.configs['strict-type-checked'],
	{
		rules: {
			'@eslint-react/prefer-destructuring-assignment': 0,
			'@eslint-react/jsx-no-children-prop': 0,
		},
	},
	{
		...react.configs['disable-jsx'],
		files: ['*.cjs', '*.js'],
	},
	{
		...react.configs['disable-type-checked'],
		files: ['*.cjs', '*.js'],
	},
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
		},
	},
];

export default main;

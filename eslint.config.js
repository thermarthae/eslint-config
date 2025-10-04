import base from './base.js';

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...base,
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];

export default config;

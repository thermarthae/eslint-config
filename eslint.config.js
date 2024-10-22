import base from './base.js';

/** @type {typeof import('typescript-eslint').configs.all} */
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

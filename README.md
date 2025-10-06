# @thermarthae/eslint-config

Just an ESLint config.

## ✨ Setup

### 1) Install

This step assumes that you have already installed ESLint and Typescript.

```bash
yarn add -D @thermarthae/eslint-config
```

### 2) Configure ESLint

An example `eslint.config.js`:

**Note**: You may have to set the `tsconfigRootDir` path!

```js
// If you don't need React support:
// import config from '@thermarthae/eslint-config/base';
import config from '@thermarthae/eslint-config';

export default [
	...config,
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
```

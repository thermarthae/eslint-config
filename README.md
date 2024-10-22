# @thermarthae/eslint-config

Just an Eslint config.

## ✨ Setup

### 1) Install

This step assumes that you have already installed Eslint and Typescript.

```bash
yarn add -D @thermarthae/eslint-config typescript-eslint eslint-plugin-simple-import-sort @stylistic/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

If you don't need React support:

```bash
yarn add -D @thermarthae/eslint-config typescript-eslint eslint-plugin-simple-import-sort @stylistic/eslint-plugin
```

### 2) Configure ESLint

Add `"extends": "@thermarthae/eslint-config"` to your ESLint config file.

An example `.eslintrc.cjs`:

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

# @thermarthae/eslint-config

Just a personalized [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) Eslint config.

## ✨ Setup

### 1) Install

This step assumes that you have already installed Eslint and Typescript.

```bash
yarn add -D @thermarthae/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

If you don't need React support:

```bash
yarn add -D @thermarthae/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

### 2) Configure ESLint

Add `"extends": "@thermarthae/eslint-config"` to your ESLint config file.

An example `.eslintrc.js`:

```js
module.exports = {
	// If you don't need React support:
	// extends: ['@thermarthae/eslint-config/base'],
	extends: ['@thermarthae/eslint-config'],
};
```

**Note**: If your `tsconfig.json` is not in the same directory as `package.json`, you will have to set the path yourself:

```diff
	module.exports = {
		extends: ['@thermarthae/eslint-config'],
+		parserOptions: {
+			project: './foo/bar/tsconfig.json',
+		},
	};
```

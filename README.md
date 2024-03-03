# @thermarthae/eslint-config

Just an Eslint config.

## ✨ Setup

### 1) Install

This step assumes that you have already installed Eslint and Typescript.

```bash
yarn add -D @thermarthae/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import@npm:eslint-plugin-i@latest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort @stylistic/eslint-plugin
```

If you don't need React support:

```bash
yarn add -D @thermarthae/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import@npm:eslint-plugin-i@latest eslint-plugin-simple-import-sort @stylistic/eslint-plugin
```

### 2) Configure ESLint

Add `"extends": "@thermarthae/eslint-config"` to your ESLint config file.

An example `.eslintrc.cjs`:

```js
module.exports = {
	// If you don't need React support:
	// extends: ['@thermarthae/eslint-config/base.cjs'],
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

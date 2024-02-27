module.exports = {
	extends: [
		'./shared.cjs',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],
	plugins: ['jsx-a11y'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/no-children-prop': 0,
		'react/prop-types': 0,
	},
};

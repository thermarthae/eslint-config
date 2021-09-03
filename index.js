module.exports = {
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'./shared.js',
	],
	overrides: [
		{
			files: '*.tsx',
			rules: {
				'@typescript-eslint/member-ordering': 0, // `react/sort-comp` is handling this out
				'consistent-return': 0, // annoys inside react hooks
			},
		},
	],
	rules: {
		'react/destructuring-assignment': 0,
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-props-no-spreading': 0,
		'react/no-children-prop': 0,
		'react/prop-types': 0,
		'react/require-default-props': 0,
		'react/state-in-constructor': ['error', 'never'],
		'react/static-property-placement': ['error', 'static public field'],
	},
};

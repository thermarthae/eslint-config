module.exports = {
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'./shared.js',
	],
	overrides: [
		{
			files: '*.tsx',
			rules: {
				'consistent-return': 0, // annoys inside react hooks
			},
		},
	],
	rules: {
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-props-no-spreading': 0,
		'react/no-children-prop': 0,
		'react/prop-types': 0,
		'react/require-default-props': 0,
		'react/static-property-placement': ['error', 'static public field'],
	},
};

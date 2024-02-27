module.exports = {
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/jsx-runtime',
		'./shared.cjs',
	],
	rules: {
		'react/no-unknown-property': 0,
		'react/destructuring-assignment': 0,
		'react/function-component-definition': 0,
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

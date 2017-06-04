
const {defaults, omit} = require('lodash/fp');

const babylon = require('babylon');

const defaultOptions = {
	sourceType: 'module',
	allowImportExportEverywhere: false,
	allowReturnOutsideFunction: false,
	plugins: [
		'estree',
		'asyncGenerators',
		'classConstructorCall',
		'classProperties',
		'decorators',
		'doExpressions',
		'exportExtensions',
		'flow',
		'functionSent',
		'functionBind',
		'jsx',
		'objectRestSpread',
		'dynamicImport'
	]
};

function parse(code, options) {
	const result = babylon.parse(code, defaults(options, defaultOptions));
	return omit(['tokens'], result);
}

module.exports = {parse};

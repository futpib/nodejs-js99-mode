
const {defaults} = require('lodash/fp');

const babylon = require('babylon');

const defaultOptions = {
	sourceType: 'module',
	allowImportExportEverywhere: false,
	allowReturnOutsideFunction: false,
	plugins: [
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
	return babylon.parse(code, defaults(options, defaultOptions));
}

module.exports = {parse};

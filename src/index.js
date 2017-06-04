
const {defaults} = require('lodash/fp');

const babylon = require('babylon');

const DEFAULT_PARSE_OPTIONS = {
	sourceType: 'module'
};

function parse(code, options) {
	return babylon.parse(code, defaults(options, DEFAULT_PARSE_OPTIONS));
}

module.exports = {parse};

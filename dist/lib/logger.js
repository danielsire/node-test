'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

var _bunyanFormat = require('bunyan-format');

var _bunyanFormat2 = _interopRequireDefault(_bunyanFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = _bunyan2.default.createLogger({
    name: 'Test API',
    stream: (0, _bunyanFormat2.default)({ outputMode: 'long' })
});
exports.default = logger;
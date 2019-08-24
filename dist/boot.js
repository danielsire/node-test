'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _logger = require('./lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

require('./lib/mongo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var httpPort = process.env.PORT || 3000;
var msg = 'Test API - Running on port ' + httpPort;

var server = _http2.default.Server(_index2.default);
_http2.default.globalAgent.maxSockets = Infinity;

server.listen(httpPort, function () {
    _logger2.default.info(msg);
});

module.exports = {
    server: server
};
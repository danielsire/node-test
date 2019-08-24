'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbUri = process.env.MONGODB_URI;

_mongoose2.default.connect(dbUri, { useNewUrlParser: true });

process.on('SIGINT', function () {
    _mongoose2.default.connection.close(function () {
        process.exit(0);
    });
});

_mongoose2.default.connection.on('error', function (err) {
    console.log('Mongoose! connection error: ' + err);
});
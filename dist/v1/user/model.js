'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;
var Schema = _mongoose2.default.Schema;

var User = Schema({
    fullName: String,
    jobTitle: String,
    email: String,
    login: String
});

User.statics.findByLogin = function (login) {
    var query = { login: login };
    return undefined.findOne(query);
};

User.statics.save = function (data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    console.log('DT-----', data.body);
    options.upsert = true;
    options.new = true;

    var query = { login: data.login };
    return undefined.findOneAndUpdate(query, data.body, options);
};

exports.default = _mongoose2.default.model('users', User);
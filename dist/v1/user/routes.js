'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _logger = require('app/lib/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var users;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _model2.default.find();

                    case 3:
                        users = _context.sent;

                        res.status(200).json(users);
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        res.status(500).json(_context.t0);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}()).get('/:login', function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var user;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _model2.default.findByLogin(req.params.login);

                    case 3:
                        user = _context2.sent;

                        res.status(200).json(user);
                        _context2.next = 10;
                        break;

                    case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2['catch'](0);

                        res.status(500).json(_context2.t0);

                    case 10:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 7]]);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}()).post('/', function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var user;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        user = req.body;

                        console.log('user----', user);

                        _context3.prev = 2;
                        _context3.next = 5;
                        return _model2.default.save(user);

                    case 5:
                        _logger2.default.info('saved user', user);
                        res.sendStatus(200);
                        _context3.next = 13;
                        break;

                    case 9:
                        _context3.prev = 9;
                        _context3.t0 = _context3['catch'](2);

                        _logger2.default.info('failed to save user', _context3.t0);
                        res.sendStatus(422);

                    case 13:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[2, 9]]);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}()).delete('/:login', function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var login;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        login = req.params.login;
                        _context4.next = 4;
                        return _model2.default.deleteOne({ login: login });

                    case 4:
                        _logger2.default.info('user removed', login);
                        res.sendStatus(200);
                        _context4.next = 12;
                        break;

                    case 8:
                        _context4.prev = 8;
                        _context4.t0 = _context4['catch'](0);

                        _logger2.default.info('failed to remove user', _context4.t0);
                        res.status(500).json(_context4.t0);

                    case 12:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 8]]);
    }));

    return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}());

exports.default = router;
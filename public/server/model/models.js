'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Liveinfos = exports.Live = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _db = require('../db/db');

var _utils = require('../utils/utils');

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//直播信息
var liveSchema = _db.mongoose.Schema({
    name: { type: String, unique: true },
    nums: Number,
    title: String,
    link: String,
    category: String,
    img: String,
    website: String
}, {
    timestamps: true
}); //直播信息实例
// category:"魔兽 DOTA1"
// img:"http://screenshot.dwstatic.com/yysnapshot/c86e624a58f03e087a3d4235967bed865b44e0cf?imageview/4/0/w/280/h/158/blur/1"
// link:"http://www.huya.com/guai"
// name:"乖"
// nums:"23655"
// title:"单排模式！"
// website:"虎牙"

var LiveModel = _db.mongoose.model('Live', liveSchema);

var Live = exports.Live = function (_LiveModel) {
    (0, _inherits3.default)(Live, _LiveModel);

    function Live(params) {
        (0, _classCallCheck3.default)(this, Live);
        return (0, _possibleConstructorReturn3.default)(this, (Live.__proto__ || (0, _getPrototypeOf2.default)(Live)).call(this, params));
    }

    (0, _createClass3.default)(Live, [{
        key: 'findAndUpdate',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return LiveModel.findOneAndUpdate({ name: this.name }, {
                                    nums: Number(this.nums),
                                    img: this.img,
                                    title: this.title,
                                    category: this.category
                                }).exec();

                            case 3:
                                res = _context.sent;

                                if (res) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 7;
                                return this.save();

                            case 7:
                                res = _context.sent;

                            case 8:
                                return _context.abrupt('return', res);

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](0);

                                console.log(this);
                                console.log(_context.t0);

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 11]]);
            }));

            function findAndUpdate() {
                return _ref.apply(this, arguments);
            }

            return findAndUpdate;
        }()
    }], [{
        key: 'isExistByName',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(name) {
                var res;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _get3.default)(Live.__proto__ || (0, _getPrototypeOf2.default)(Live), 'find', this).call(this, { name: name }).exec();

                            case 2:
                                res = _context2.sent;
                                return _context2.abrupt('return', res.length && res[0].name === name ? true : false);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function isExistByName(_x) {
                return _ref2.apply(this, arguments);
            }

            return isExistByName;
        }()
    }, {
        key: 'getAllLivesByCategory',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(category) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _get3.default)(Live.__proto__ || (0, _getPrototypeOf2.default)(Live), 'find', this).call(this, { category: category }).exec();

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getAllLivesByCategory(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getAllLivesByCategory;
        }()
    }, {
        key: 'getLivesByCategoryAndType',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
                var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
                var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
                var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
                var sort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                var lives, query;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                lives = [], query = {};

                                console.log('get lives from db');

                                if (!(_config.types.indexOf(type) === -1)) {
                                    _context4.next = 4;
                                    break;
                                }

                                throw new Error(type + ' is not search type');

                            case 4:
                                if (type === 'all') {
                                    query = { "category": category };
                                } else if (type === 'rank') {
                                    query = { "category": category };
                                    limit = _config.rankNum;
                                    sort = { "nums": -1 };
                                } else if ((0, _keys2.default)(_config.sitesMap).indexOf(type) !== -1) {
                                    query = { "category": category, "website": type };
                                }
                                _context4.prev = 5;
                                _context4.next = 8;
                                return (0, _get3.default)(Live.__proto__ || (0, _getPrototypeOf2.default)(Live), 'find', this).call(this, query).sort(sort).limit(limit).exec();

                            case 8:
                                lives = _context4.sent;
                                return _context4.abrupt('return', lives);

                            case 12:
                                _context4.prev = 12;
                                _context4.t0 = _context4['catch'](5);

                                console.log(_context4.t0.stack);

                            case 15:
                                return _context4.abrupt('return', lives);

                            case 16:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[5, 12]]);
            }));

            function getLivesByCategoryAndType(_x3, _x4, _x5, _x6) {
                return _ref4.apply(this, arguments);
            }

            return getLivesByCategoryAndType;
        }()
    }]);
    return Live;
}(LiveModel);

var Liveinfos = exports.Liveinfos = function Liveinfos(website, lives) {
    (0, _classCallCheck3.default)(this, Liveinfos);

    this.website = website;
    this.lives = lives;
};
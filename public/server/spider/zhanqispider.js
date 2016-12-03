'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _models = require('../model/models.js');

var _spider = require('./spider.js');

var _spider2 = _interopRequireDefault(_spider);

var _utils = require('../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require("cheerio");
var prelink = "http://www.zhanqi.tv/";

var Zhanqispider = function (_Spider) {
    (0, _inherits3.default)(Zhanqispider, _Spider);

    function Zhanqispider() {
        (0, _classCallCheck3.default)(this, Zhanqispider);
        return (0, _possibleConstructorReturn3.default)(this, (Zhanqispider.__proto__ || (0, _getPrototypeOf2.default)(Zhanqispider)).call(this));
    }

    //具体的爬取策略


    (0, _createClass3.default)(Zhanqispider, [{
        key: 'pickInfo',
        value: function pickInfo(html) {
            var _this2 = this;

            var lives = [],
                parse = $.load(html),
                list = parse("a.js-jump-link"),
                category = list.find("span.game-name").text(),
                website = "战旗";
            list.each(function (i, ele) {
                var name = $(ele).find("span.anchor").text(),
                    nums = _this2.transWan($(ele).find("div.meat span.views span.dv").text()),
                    title = $(ele).find("span.name").text(),
                    link = prelink + $(ele).attr("href"),
                    img = $(ele).find("div.imgBox img").attr("src"),
                    live = new _models.Live({ name: name, nums: nums, title: title, link: link, category: category, img: img, website: website });
                lives.push(live);
                // log(live);
            });
            return lives;
        }
    }]);
    return Zhanqispider;
}(_spider2.default);

//以下做测试
// let spider = new Zhanqispider();
// let url = 'www.zhanqi.tv/games/dota2';
// panda.parseUrl(url);


exports.default = Zhanqispider;
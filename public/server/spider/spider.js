'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spider = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var superagent = require('superagent');

var Spider = exports.Spider = function () {
    function Spider() {
        (0, _classCallCheck3.default)(this, Spider);

        this.htmls = {};
        this.liveinfos = {};
    }

    //子类需要复写该方法制定具体的爬取策略


    (0, _createClass3.default)(Spider, [{
        key: 'pickInfo',
        value: function pickInfo(html) {
            var liveinfos = {};
            /**
                将获取的结果存入infos中
            **/
            return liveinfos;
        }
    }, {
        key: 'parseUrl',
        value: function parseUrl(url) {
            var _this = this;

            var that = this;
            return new _promise2.default(function (resolve, reject) {
                superagent.get(url).end(function (err, res) {
                    if (err || !res.ok) {
                        console.log(err);
                        reject(err);
                    } else {
                        var html = res.text;
                        var liveinfos = that.pickInfo(html);
                        //使用url作为下标存储html和对应的liveinfo
                        that.htmls[url] = html;
                        that.liveinfos[url] = liveinfos;
                        (0, _utils.log)(_this.constructor.name + " finishs picking infos from " + url);
                        (0, _utils.log)("get " + liveinfos.length + "infos!!");
                        //后续处理这个url下获取到的info信息
                        resolve(liveinfos);
                    }
                });
            });
        }
    }]);
    return Spider;
}();

exports.Spider = Spider;
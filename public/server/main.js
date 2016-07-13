"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runJobs = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _huyaspider = require("./spider/huyaspider.js");

var _pandaspider = require("./spider/pandaspider.js");

var _quanminspider = require("./spider/quanminspider.js");

var _config = require("./config.js");

var _utils = require("./utils/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var huya = new _huyaspider.Huyaspider(),
    panda = new _pandaspider.Pandaspider(),
    quanmin = new _quanminspider.Quanminspider();

var spiders = [huya, panda, quanmin];

var runJobs = function runJobs(jobs, callback) {
    var promises = [];
    spiders.forEach(function (spider, index) {
        //使用类名作为job的属性名，直接获取要爬取的url
        var spidername = spider.constructor.name,
            url = jobs[spidername];
        promises.push(spider.parseUrl(url));
    });
    return _promise2.default.all(promises);
};

// 以下做测试
// runJobs(jobs, infos => {
//     log("done");
// })

exports.runJobs = runJobs;
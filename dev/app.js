//@flow
import {runJobs} from "./server/spider-manager.js";
import {jobs} from "./server/config.js";
import {log} from "./server/utils/utils.js";
import {getLives} from "./server/live-manager";

const  Koa = require('koa');
const  koaSend = require('koa-send');
const  serve = require('koa-static');
const  app = new Koa();

//静态文件
app.use(serve((__dirname + "/src")));

const root = {root: __dirname + '/src'};

var send = function (ctx, path) {
    return koaSend(ctx, path, root);
}
app.use(async (ctx, next) => {
  if (ctx.path === '/')  return send(ctx, "./html/index.html");
  await next();
});

app.use(async  (ctx, next) => {
    let res;
    if (ctx.path === "/search") {
        res= await getLives('dota', '斗鱼');
        ctx.body = JSON.stringify(res);
    }
    await next();
});


app.listen(8080);
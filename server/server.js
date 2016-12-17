//@flow
import {runJobs} from "./src/spider-manager.js";
import {jobs} from "./src/config.js";
import {log} from "./src/utils/utils.js";
import {getLives} from "./src/live-manager";
import path from 'path'

const  Koa = require('koa');
const  koaSend = require('koa-send');
const  serve = require('koa-static');
const  app = new Koa();
const assetsPath = path.resolve('./assets/dist/');
const pagesRoot = path.resolve('./pages/');
const port = 8080;

var sendPage = function (ctx, filePath) {
    return koaSend(ctx, path.resolve(filePath));
}
console.log(pagesRoot)
//静态文件
app.use(serve(pagesRoot));

app.use(async (ctx, next) => {
  if (ctx.path === '/')  return sendPage(ctx, "./index.html");
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


app.listen(port);
console.log(`start listen @ ${port}`)
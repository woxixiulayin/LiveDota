//@flow
import {runJobs} from "./server/spider-manager.js";
import {jobs} from "./server/config.js";
import {log} from "./server/utils/utils.js";
import {getLives} from "./server/live-manager";

const  Koa = require('koa');
const  send = require('koa-send');
const  serve = require('koa-static');
const  app = new Koa();

app.use(serve((__dirname + "/src")));

app.use(async (ctx, next) => {
  if (ctx.path === '/')  return send(ctx, "./src/html/index.html");
  await next();
});

app.use(async  (ctx, next) => {
    let res;
    res= await getLives('dota', '斗鱼');
    if (ctx.path === "/search") {
        ctx.body = JSON.stringify(res);
    }
    await next();
});


app.listen(8080);
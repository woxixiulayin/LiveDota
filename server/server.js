//@flow
import {runJobs} from "./src/spider-manager.js";
import {jobs} from "./src/config.js";
import {log} from "./src/utils/utils.js";
import {getLives} from "./src/live-manager";
import path from 'path'

const Koa = require('koa');
const fs = require('fs');
const koaSend = require('koa-send');
const serve = require('koa-static');
const app = new Koa();
const assetsPath = path.resolve('./assets/dist/');
const port = 8080;

var sendPage = function (ctx, filePath) {
    return koaSend(ctx, path.resolve(filePath));
}


//静态文件
app.use(serve(assetsPath));

app.use(async(ctx, next) => {
    if (ctx.path === '/') 
        return sendPage(ctx, "./index.html");
    await next();
});

app.use(async(ctx, next) => {
    let res;
    if (/^\/.+\/.+/.test(ctx.path)) {
        const query = ctx
            .path
            .split('/').reduce((list = [], item) => {
                if(item) {
                    list.push(decodeURIComponent(item))
                    return list
                }
            }, [])
        res = await getLives(query[0], query[1]);
        ctx.body = JSON.stringify(res);
    }
    await next()
});

app.listen(port);
console.log(`start listen @ ${port}`)
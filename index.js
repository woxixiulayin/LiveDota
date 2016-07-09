import {runJobs} from "./server/main.js";
import {jobs} from "./server/config.js";
import {log} from "./server/utils/utils.js";

const Koa = require('koa');
const app = new Koa(); 


app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

app.use(async ctx => {
    runJobs(jobs).then(infos => {
        
    })
});


app.listen(3000);
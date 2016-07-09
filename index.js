import {runJobs} from "./server/main.js";
import {jobs} from "./server/config.js";
import {log} from "./server/utils/utils.js";

const Koa = require('koa');
const app = new Koa(); 


app.use(async (ctx, next) => {
  try {
    await next();
    // ctx.body = "hello";
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

app.use(async  (ctx, next) => {
    if (ctx.path === "/") {        
        await runJobs(jobs)
                .then(infos => {
                    ctx.body = JSON.stringify(infos);
                });
    }
});


app.listen(3000);
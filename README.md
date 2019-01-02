#####项目说明
- 一个比较完整的前后端项目，后端采用**koa**，前端**jQuery**，统一用**ES6**编写，使用gulp、babel、webpack工具来开发
- 所有开发在dev文件夹下，gulp自动打包，复制到public下面
- 用了browsync插件，开发时实时刷新页面
- 后端先写了一个通用的spider类，各具体网站爬虫类用它作为原型，定制各自的具体爬虫策略
- 利用promise，等爬取到所有数据后发送给前端
- 后台爬取各大直播网站Dota相关信息，整理成json数据传给前端，前端用jQuery生成页面展示

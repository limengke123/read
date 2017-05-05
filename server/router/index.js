/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let koaRouter = require('koa-router');
let router = new koaRouter();

require('./common/index').register(router);
require('./bole/index').register(router);
require('./geek/index').register(router);
require('./sg/index').register(router);
require('./tc/index').register(router);
require('./toutiao/index').register(router);

module.exports.register = (app) => {
    app.use(router.middleware());
};
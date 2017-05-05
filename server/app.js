/**
 * Created by 75214 on 2017/4/23.
 */

let koa = require('koa');
let serve = require('koa-static');
let compress = require('koa-compress');
let koaJson = require('koa-json');
let bodyParser = require('koa-bodyparser');
let logger = require('koa-logger');
let router = require('koa-router')();
let path = require('path');
let routerRegister = require('./router/index');

let app = new koa();

app.use(bodyParser());
app.use(koaJson());
app.use(serve(path.resolve(__dirname, '../public')));


app.use(compress());
app.use(logger());

/*router.get('/',async function (ctx,next) {
   ctx.body = 'test';
});

app.use(router.routes());*/
routerRegister.register(app);

process.on('uncaughtException', (err) => {
    console.error('错误：' + err.stack);
});


app.listen('3000', () => {
    console.log('listening on port ' + 3000)
});



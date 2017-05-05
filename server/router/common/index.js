/**
 * Created by 75214 on 2017/4/23.
 */
'use strict';

async function common(ctx,next) {
    ctx.response.set('Content-type', 'application/json;charset=utf-8');

    if (!(/prev|article/.test(ctx.request.path))) {
        ctx.response.set('Cache-Control', 'max-age=1800');
    }
    await next();
}

module.exports.register = (router) => {
    router.get('*', common);
};
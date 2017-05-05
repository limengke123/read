/**
 * Created by 75214 on 2017/4/24.
 */
'use strict';

let render = require('../../render.js');

async function index(ctx,next) {
    this.response.body=await render('index');
}

module.exports.register = function (router) {
    router.get('/',index);
    router.get('/index',index)
};
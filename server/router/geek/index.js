/**
 * Created by 75214 on 2017/5/1.
 */
'use strict';

let lib = require('../../lib');
let $ = require('cheerio');
let geekLib = require('./geekLib');

const url = 'http://geek.csdn.net/';

async function geek(ctx,next) {
    let resBody = await lib.parseBody(url);
    let lists = $(resBody).find('.geek_list');
    let geekList = geekLib.parseList(lists);
    let geekArr = lib.listToArr(geekList);
    ctx.response.body={
        postLists:geekArr
    }
}

module.exports.register=(router)=>{
    router.get('/geek',geek)
};

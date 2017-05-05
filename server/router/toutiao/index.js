/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let $ = require('cheerio');
let toutiaoLib = require('./toutiaoLib');
let lib = require('../../lib');

const url = 'http://toutiao.io/';

async function toutiao(ctx,next) {
    let resBody = await lib.parseBody(url);

    let postList = $(resBody).find('.posts');
    let curDate = $(resBody).find('.daily:first-child').find('.date').children('small').text();
    let lists = postList.first().children('.post');
    let toutiaoLists = toutiaoLib.parseList(lists);
    let arr = lib.listToArr(toutiaoLists);

    ctx.response.body = {
        postLists: arr,
        curDate
    }
}

module.exports.register = (router) => {
    router.get('/toutiao', toutiao)
};

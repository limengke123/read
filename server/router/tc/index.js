/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let $ = require('cheerio');
let tcLib = require('./tcLib');
let lib = require('../../lib');

const url = 'http://www.tuicool.com/ah/20?lang=0';

async function tc(ctx, next) {
    let resBody = await lib.parseBody(url);

    let lists = $(resBody).find('#list_article').children();
    let tcLists = tcLib.parseList(lists);
    let arr = lib.listToArr(tcLists);
    ctx.response.body = {
        postLists: arr
    }
}

module.exports.register = (router) => {
    router.get('/tc', tc)
};

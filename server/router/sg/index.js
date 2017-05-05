/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let $ = require('cheerio');
let boleLib = require('./sgLib');
let lib = require('../../lib');

const url = 'https://segmentfault.com/blogs';

async function sg(ctx,next) {
    let resBody = await lib.parseBody(url);

    let lists = $(resBody).find('.stream-list__item');
    let boleLists = boleLib.parseList(lists);
    let arr = lib.listToArr(boleLists);

    ctx.response.body = {
        postLists: arr
    }
}

module.exports.register = (router) => {
    router.get('/sg', sg)
};

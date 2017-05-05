/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let $ = require('cheerio');
let boleLib = require('./boleLib');
let lib = require('../../lib');

const url = 'http://top.jobbole.com/'

async function bole(ctx,next) {
    let resBody = await lib.parseBody(url);

    let lists = $(resBody).find('.list-posts').children().not('.sponsored');
    let boleLists = boleLib.parseList(lists);
    let arr = lib.listToArr(boleLists);

    ctx.response.body = {
        postLists: arr
    }
}

module.exports.register = (router) => {
    router.get('/bole', bole)
};

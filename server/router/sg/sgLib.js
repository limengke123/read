/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let $ = require('cheerio');
const origin = 'https://segmentfault.com';

exports.parseList = function (lists) {

    let sgLists = lists.map((index, list) => {
        let titleObj = $(list).find('.title a');
        let title = titleObj.text();
        let originUrl = origin + titleObj.attr('href');
        let metaAuthor = $(list).find('.author a:first-child').text();
        let metaTime = $(list).find('.author .split')[0].nextSibling.nodeValue;
        let avatarUrl = $(list).find('.author img').attr('src');
        let a = $(list).find('.author a')[1];
        let subjectUrl = origin + a.attribs.href;
        let subjectText = a.children[0].data;

        return {
            title,
            originUrl,
            metaAuthor,
            metaTime,
            avatarUrl,
            subjectUrl,
            subjectText
        };
    });

    return sgLists;
};

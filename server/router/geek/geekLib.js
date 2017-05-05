/**
 * Created by 75214 on 2017/5/1.
 */
'use strict';
let $ = require('cheerio');

exports.parseList = function (lists) {
    let geekLists = lists.map((index, list) => {
        let titleObj = $(list).find('.tracking-ad .title');
        let title = titleObj.text();
        let originUrl = titleObj.attr('href');
        let meta = $(list).find('.list-inline a')[0].firstChild.nodeValue;
        let avatarUrl = $(list).find('img').attr('src');
        let subjectUrl = $(list).find('.list-inline a').length === 1 ? $(list).find('.list-inline a').attr('href') : $(list).find('.list-inline a').last().attr('href');
        let subjectText = $(list).find('.list-inline a').length === 1 ? $(list).find('.list-inline a').text() : $(list).find('.list-inline a').last().text();

        return {
            title,
            originUrl,
            meta,
            avatarUrl,
            subjectUrl,
            subjectText
        };
    });

    return geekLists;
}
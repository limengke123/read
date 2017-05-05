/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let $ = require('cheerio');

exports.parseList = (lists) => {
    let boleLists = lists.map((index, list) => {
        let titleObj = $(list).find('.p-tit a');
        let title = titleObj.text().trim();
        let originUrl = titleObj.attr('href');
        let meta = $(list).find('.p-meta span:first-child').text();
        let avatarUrl = '/hq1.jpg';
        let subjectUrl = $(list).find('.p-tags a').length === 1 ? $(list).find('.p-tags a').attr('href') : '#';
        let subjectText = $(list).find('.p-tags a').length === 1 ? $(list).find('.p-tags a').text() : '无';
        return {
            title,
            originUrl,
            meta,
            avatarUrl,
            subjectUrl,
            subjectText
        };
    });
    return boleLists;
};

/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';
let $ = require('cheerio');

exports.parseList = function (lists) {
    let toutiaoLists = lists.map((index, list) => {
        let titleObj = $(list).find('.title');
        let title = titleObj.text();
        let originUrl = titleObj.children('a').attr('href');
        let meta = $(list).find('.meta')[0].firstChild.nodeValue;
        let avatarUrl = $(list).find('img').attr('src');
        let subjectUrl = $(list).find('.subject-name a').attr('href');
        let subjectOriginUrl = `http://toutiao.io${subjectUrl}`;
        let subjectText = $(list).find('.subject-name a').text();

        return {
            title,
            originUrl: `https://toutiao.io${originUrl}`,
            meta,
            avatarUrl,
            subjectOriginUrl,
            subjectText
        };
    });

    return toutiaoLists;
};

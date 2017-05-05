/**
 * Created by 75214 on 2017/4/23.
 */

'use strict';

let $ = require('cheerio');
const origin = 'http://www.tuicool.com';

exports.parseList = function (lists) {

    let tcLists = lists.map((index, list) => {
        let titleObj = $(list).find('.title a');
        let title = titleObj.attr('title');
        let originUrl = origin + titleObj.attr('href');
        let metaTime = $(list).find('.tip>span').last().text();
        let avatarUrl = '/hq1.jpg';
        let subjectText = $(list).find('.tip>span').first().text();

        return {
            title,
            originUrl,
            metaTime,
            avatarUrl,
            subjectText
        };
    });

    return tcLists;
};

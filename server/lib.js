/**
 * Created by 75214 on 2017/4/23.
 */
'use strict';

let request = require('request');

exports.parseUrl = (url) => {
    return new Promise((resolve, reject) => {
        let req = request.get(url);
        let urlPath = '';
        req.on('error', (err) => {
            reject(err);
        });
        req.on('response', (res) => {
            if (res.statusCode === 200) {
                urlPath = res.client._httpMessage._headers.host + res.client._httpMessage.path;
                resolve(urlPath);
            }
        })
    })
};

exports.parseBody = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, res, body) => {
            if (!error && res.statusCode === 200) {
                resolve(body);
            } else {
                reject(error)
            }
        })
    })
};

exports.listToArr = (lists) => {
    let len = lists.length;
    let arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(lists[i]);
    }

    return arr;
};
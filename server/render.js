/**
 * Created by 75214 on 2017/4/24.
 */
'use strict';

let path =require('path');
let views = require('co-views');

module.exports = views(path.resolve(__dirname,'/public'),{
    map:{html:'swig'}
});
/**
 * Created by 75214 on 2017/4/24.
 */
'use strict';

import Head from '../general/head/index.js';
import React from 'react';
import ReactDom from 'react-dom';
import {$} from '../lib/base';
import Read from '../container/read';


$(()=>{
    ReactDom.render(
        <Read/>,
        document.getElementById('read-content')
    );
});
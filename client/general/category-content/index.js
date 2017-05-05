/**
 * Created by 75214 on 2017/4/25.
 */
'use strict';

import React from 'react';
import './index.less';

import BoleContent from '../../contents/bole';
import GeekContent from '../../contents/geek';
import SgContent from '../../contents/sg';
import TcContent from '../../contents/tc';
import TtContent from '../../contents/toutiao';

export default class CategoryContent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="content">
                <TtContent/>
            </div>
        )
    }
}
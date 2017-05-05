/**
 * Created by 75214 on 2017/4/24.
 */
'use strict';

import React from 'react';
import './index.less';

export default class head extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <header>
                <div className="read-header">
                    Read
                </div>
            </header>
        )
    }
}
/**
 * Created by 75214 on 2017/4/25.
 */
'use strict';

import React from 'react';

export default class Loading extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="loading">
                <img src="./loading.gif" alt="loading"/>
                <p>加载中...</p>
            </div>
        )
    }
}
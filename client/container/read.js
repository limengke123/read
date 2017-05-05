/**
 * Created by 75214 on 2017/4/25.
 */
'use strict';

import React from 'react';
import Head from '../general/head/index';
import ContentContainer from './content-container';
import '../../public/reset.less';

export default class Read extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="read">
                <Head/>
                <ContentContainer/>
            </div>
        )
    }
}
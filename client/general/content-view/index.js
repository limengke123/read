/**
 * Created by 75214 on 2017/4/25.
 */
'use strict';

import React from 'react';
import Bole from '../../contents/bole/index';
import CategoryList from '../category-list';
import CategoryContent from '../category-content';
import './index.less';

export default class ContentView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrap">
                <CategoryContent/>
            </div>
        )
    }
}
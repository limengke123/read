/**
 * Created by 75214 on 2017/4/25.
 */
'use strict';

import React from 'react';
import './index.less';

export default class CategoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [
                'bole',
                'geek',
                'sg',
                'tc',
                'toutiao'
            ]
        }
    }

    selectCategory(e) {
        e.preventDefault();
        e.stopPropagation();
    }


    render() {
        return (
            <div className="category-list">
                <div className="lists">
                    <ul>
                        {
                            this.state.lists.map((listName, index) => {
                                return (
                                    <li className="list-item">{listName}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
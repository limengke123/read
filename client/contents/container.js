/**
 * Created by 75214 on 2017/5/1.
 */
'use strict';

import React from 'react';

export default class Container extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        console.log(this.props.obj)
    }

    render() {
        let obj = this.props.obj;
        return (
            <div className="post">
                <div className="content">
                    <h3 className="title">
                        <a href={obj.originUrl} target="_blank">{obj.title}</a>
                    </h3>
                    <div className="meta">{obj.meta}</div>
                </div>
                <div className="user-info">
                    <div className="user-avatar">
                        <img src={obj.avatarUrl} alt="图像" className="img-circle" width="30"/>
                    </div>
                </div>
                <div className="subject-name">来自
                    <a href={obj.subjectUrl} target="_blank">{obj.subjectText}</a>
                </div>
            </div>
        )
    }
}
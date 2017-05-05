/**
 * Created by 75214 on 2017/4/25.
 */
'use strict';

import React from 'react';
import Loading from '../../general/loading/loading';
import {_} from '../../lib/base';
import Container from '../container';

export default class TcContent extends React.Component {
    constructor() {
        super();
        this.state = {
            url: 'http://top.jobbole.com/',
            fetching: true,
            postLists: [],
            loading: false,
        }
    }

    fetchBole() {
        fetch('/tc')
            .then((response) => {
                return response.json();
            }, (err) => {
                console.log(err)
            })
            .then((json) => {
                this.setState({
                    postLists: json.postLists,
                    fetching: false
                });
                console.log(this.state.postLists)
            });
    }

    componentWillMount() {
        this.fetchBole();
    }

    renderPostList() {
        let posts = [];
        let postId = -1;
        _.forEach(this.state.postLists, (list) => {
            let title = list.listTitle;
            let originUrl = list.listOriginUrl;
            let meta = list.listMeta;
            let avatarUrl = list.listAvatarUrl;
            let subjectUrl = list.listSubjectUrl;
            let subjectText = list.listSubjectText;

            posts.push(
                <div className="post">
                    <div className="content">
                        <h3 className="title">
                            <a href={originUrl} target="_blank">{title}</a>
                        </h3>
                        <div className="meta">{meta}</div>
                    </div>
                    <div className="user-info">
                        <div className="user-avatar">
                            <img src={avatarUrl} alt="图像" className="img-circle" width="30"/>
                        </div>
                    </div>
                    <div className="subject-name">来自
                        <a href={subjectUrl} target="_blank">{subjectText}</a>
                    </div>
                </div>
            );
        });
        return posts;
    }

    render() {
        if (this.state.fetching) {
            return (
                <div className="bole-content">
                    <Loading/>
                </div>
            )
        }
        return (
            <div>
                {
                    this.state.postLists.map((list, index) => {
                        return (
                            <Container obj={list}/>
                        )
                    })
                }
            </div>
        )
    }
}
/**
 * Created by 75214 on 2017/4/25.
 */
'use strict';

import React from 'react';
import Loading from '../../general/loading/loading';
import {_} from '../../lib/base';
import Container from '../container';

export default class BoleContent extends React.Component {
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
        fetch('/bole')
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
            });
    }

    componentWillMount() {
        this.fetchBole();
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
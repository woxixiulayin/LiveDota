import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import {CategoryWrap} from '.'
import {navConfig} from 'config'
import {connect} from 'react-redux'

export default class LiveList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        categoryIndex: PropTypes.number.isRequired,
        siteIndex: PropTypes.number.isRequired,
    }

    static defaultProps = {
        items: [],
        categoryIndex: 0,
        siteIndex: 0,
    }

    constructor() {
        super()
    }

    render() {
        let {items} = this.props

        return (
            <div
                className='container flex full live-list'
            >
            {
                items.map((item, index) => {
                    console.log(item)
                })
            }
            </div> 
        )
    }
}
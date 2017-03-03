import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import {CategoryWrap, LiveItem} from '.'
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
        // let {items} = this.props
        let items = new Array(20).fill(1)

        return (
            <div
                className='full live-list'
            >
            {
                items.map((item, index) => <LiveItem />)
            }
            </div> 
        )
    }
}
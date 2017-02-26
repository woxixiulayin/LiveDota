import React, { Component, PropTypes } from 'react'
import { TabSwitcher } from 'app/commonComponents'
import classnames from 'classnames'
import {CategoryWrap} from '.'
import {navConfig} from 'config'
import {connect} from 'react-redux'

let MainContent = ({currentIndex}) => (
    <div className='container flex full main-content'>
        <TabSwitcher currentIndex={currentIndex}>
            {
                Object.keys(navConfig).map((item, index) => <CategoryWrap key={index} categoryIndex={index} />)
            }
        </TabSwitcher>
    </div>
)

const mapStateToProp = (state, ownProps) => {
    return {
        currentIndex: state.currentCategoryIndex,
    }
}

MainContent = connect(
    mapStateToProp
)(MainContent)

export default MainContent
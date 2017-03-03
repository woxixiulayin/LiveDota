import React, { Component, PropTypes } from 'react'
import { TabSwitcher } from 'app/commonComponents'
import classnames from 'classnames'
import {LiveList} from '.'
import {navConfig} from 'config'
import {connect} from 'react-redux'

let LiveListWrap = ({categoryIndex, currentSiteIndex}) => (
    <div className="container flex full">
        <TabSwitcher currentIndex={currentSiteIndex}>
            {navConfig[Object.keys(navConfig)[categoryIndex]].map((item, index) => (
                <div className='container full flex' key={index}>
                <LiveList categoryIndex={categoryIndex} siteIndex={index}/>
                </div>
            ))}
        </TabSwitcher>
    </div>
)

const mapStateToProps = (state, ownprops) => ({
    currentSiteIndex: state.siteNavInfo[ownprops.categoryIndex]
})

LiveListWrap = connect(
    mapStateToProps
)(LiveListWrap)

export default LiveListWrap
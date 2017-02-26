import React,{Component, PropTypes} from 'react'
import classnames from 'classnames'
import {SiteNav} from '.'

const CategoryWrap = ({categoryIndex}) => (
    <div className={classnames('category-live-container container flex')}
    >
        <SiteNav categoryIndex={categoryIndex} />
    </div>
)

export default CategoryWrap
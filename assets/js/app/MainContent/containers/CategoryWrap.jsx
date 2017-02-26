import React,{Component, PropTypes} from 'react'
import classnames from 'classnames'
import {SiteNav} from '.'

const CategoryWrap = ({categoryIndex}) => (
    <div className={classnames('category-live-container container full flex')}
    >   
        <div className="live-wrap">
            <SiteNav categoryIndex={categoryIndex} />
        </div>
    </div>
)

export default CategoryWrap
import React,{Component, PropTypes} from 'react'
import { TabSwitcher } from 'app/commonComponents'
import classnames from 'classnames'
import {SiteNav, LiveListWrap} from '.'

const CategoryWrap = ({categoryIndex}) => (
    <div className={classnames('category-live-container container full flex')}
    >   
        <div className="category-live-wrap flex full">
            <SiteNav categoryIndex={categoryIndex} />
            <div className='live-list-wrap flex full'>
                <LiveListWrap categoryIndex={categoryIndex} />
            </div>
        </div>
    </div>
)

export default CategoryWrap
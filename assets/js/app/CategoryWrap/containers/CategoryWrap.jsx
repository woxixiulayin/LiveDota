import React,{Component, PropTypes} from 'react'
import {TabSwitcher} from 'app/commonComponents'
import classnames from 'classnames'

const CategoryWrap = props => (
    <div classname={classnames('category-live-container container flex')}
    >
        <TabSwitcher index={1}>
            {React.Children}   
        </TabSwitcher>
    </div>
)

export default CategoryWrap
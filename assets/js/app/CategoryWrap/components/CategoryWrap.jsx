import React,{Component, PropTypes} from 'react'
import classnames from 'classnames'

const CategoryWrap = props => (
    <div classname={classnames('category-live-container container flex')}
    >
    {props.children}
    </div>
)

export default CategoryWrap
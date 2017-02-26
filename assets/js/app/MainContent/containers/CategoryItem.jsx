import React,{Component, PropTypes} from 'react'
import classnames from 'classnames'
import {SiteNav} from './'

const CategoryItem = ({index=0}) => (
    <div className='container flex full'>
        <SiteNav categoryIndex={index}/>
    </div> 
)

export default CategoryItem
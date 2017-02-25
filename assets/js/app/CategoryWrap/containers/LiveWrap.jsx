import React,{Component} from 'react'
import {LiveList} from '../components'
import {SiteNav} from '../containers'
import navConfig from 'config/navConfig'

const LiveWrap = () => (
    <div className="container flex" 
        style={{
            width: "70%",
        }}>
        {
                new Array(Object.keys(navConfig).length).fill({}).map((item, index) => <SiteNav categoryIndex={index} />)
            }
    </div> 
)

export default LiveWrap
import React,{Component} from 'react'
import LiveList from './LiveList'
import {SiteNav} from '../containers'

const LiveWrap = () => (
    <div className="container flex" 
        style={{
            width: "70%",
        }}>
        <SiteNav />
    </div> 
)

export default LiveWrap
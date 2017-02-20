import React,{Component} from 'react'
import LiveList from './LiveList'

const LiveWrap = () => (
    <div className="container flex" 
        style={{
            width: "70%",
        }}>
        <LiveList />
    </div> 
)

export default LiveWrap
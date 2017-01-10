import React from 'react'

const Category = ({categorys, switchCat}) => (
    categorys.map(category => {
        <span className="header-category"
        onClick={() => switchCat(category)}
        >{item}</span> 
    })
)

export default Category
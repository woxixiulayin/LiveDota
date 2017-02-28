import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import {setNodeStyle} from 'lib/domUtils'

const tabStrategies = {
    horizontalMove: {
        tabLayout: tabContent => {
            let {oneTabColumns, cuurentIndex} = tabContent.props,
                width = 100 / oneTabColumns

            tabContent.tabItems && tabContent.tabItems.map((item, index) => {
                let oldCssText = item.style.cssText
                item.style.cssText = oldCssText + `width: ${width}; heigh: 100%; position: absolute; left: ${width * index}%; top: 0;`
            })

            // tabContent.tabContainer.style = {
            //     width: `${width * tabContent.tabItems.length}%`
            // }
            setNodeStyle(tabContent.tabContainer, {width: `${width * tabContent.tabItems.length}%`})
        },

        switchAnimation: tabContent => {
            let {oneTabColumns, currentIndex} = tabContent.props,
                container = tabContent.tabContainer,
                width = 100 / oneTabColumns
                container.style.left = `${-(currentIndex * width)}%`
        }
    }
}

export default class TabSwitcher extends Component {
    static propTypes = {
        oneTabColumns: PropTypes.number.isRequired,
        switchAnimationType: PropTypes.string.isRequired,
        currentIndex: PropTypes.number.isRequired,
    }

    static defaultProps = {
        items: [],
        oneTabColumns: 1,
        switchAnimationType: 'horizontalMove',
        currentIndex: 0,
    }

    constructor() {
        super()
        this.tabItems = []
    }

    getTabStrategy() {
        let {switchAnimationType='horizontalMove'} = this.props
        return tabStrategies[switchAnimationType] ? tabStrategies[switchAnimationType] : tabStrategies.horizontalMove
    }

    switchAnimation() {
        this.tabStrategy.switchAnimation(this)
    }

    componentDidMount() {
        this.tabStrategy = this.getTabStrategy()
        this.tabStrategy.tabLayout(this)
        this.switchAnimation()
    }

    componentDidUpdate(nextProps, nextState) {
        if(nextProps.currentIndex != this.props.currentIndex) {
            this.switchAnimation()
        }
    }

    render() {
        let {children} = this.props

        return (
            <div className={classNames('container flex full tab-content')}>
                <div ref={node => this.tabContainer = node } className="absolute full trans-dura-4">
                    {
                    children && children.map((child, index) => (
                            <div
                                ref={node => { this.tabItems[index]= node }}
                                key = {index}
                                className='full tab-item .trans-dura-4'>
                                {child}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
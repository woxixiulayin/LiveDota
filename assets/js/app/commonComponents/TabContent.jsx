import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'


const tabStrategies = {
    horzontalMove: {
        tabLayout: tabContent => {
            let {items, oneTabColumns, cuurentIndex} = tabContent.props,
                width = 100 / oneTabColumns

            tabContent.tabItems && tabContent.tabItems.map((items, index) => (
                item.style = {
                    width,
                    height: '100%',
                    position: absolute,
                    left: width * index,
                    top: 0,
                }
            ))
        },

        switchAnimation: tabContent => {
            let {oneTabColumns, cuurentIndex} = tabContent.props,
                container = tabContent.container,
                width = 100 / oneTabColumns

                container.style = {
                    left: `${-(currentIndex * width)}%`
                }
        }
    }
}

class TabContent extends Component {
    static propTypes = {
        items = PropTypes.array.isRequired,
        oneTabColumns= PropTypes.number.isRequired,
        switchAnimationType = PropTypes.string.isRequired,
        currentIndex = PropTypes.number.isRequired,
    }

        constructor() {
        super()
    }

    getDefaultProps() {
        return {
            items: [],
            oneTabColumns: 1,
            switchAnimation: 'horizontalMove',
            currentIndex: 0,
        }
    }

    getTabStrategy() {
        let {switchAnimationType='horizontalMove'} = this.props
        return tabStrategies[switchAnimationType] ? tabStrategies[switchAnimationType] : tabStrategies['horizontalMove']
    }

    switchAnimation() {
        this.getTabStrategy.switchAnimation(this)
    }

    componentDidMount() {
        this.getTabStrategy.tabLayout(this)
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.currentIndex != this.props.currentIndex) {
            this.switchAnimation()
        }
    }
    
    render() {
        let {index} = this.props,
        this.tabItems = []

        return (
            <div classNames={classNames('container flex tab-content')}>
                <div ref={node => this.tabContainer = node } className="absolute full .trans-dura-4">
                    {
                        React.Children.map((child, index) => {
                            <div ref={node => { this.tabItems.push(node) }} classNames='tab-item .trans-dura-4'>
                                {child}
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
import React, { PureComponent, PropTypes } from 'react'
import classNames from 'classnames'
import { setNodeStyle } from 'lib/domUtils'

const tabStrategies = {
    horizontalMove(tabContent) {
        let {oneTabColumns} = tabContent.props,
            container = tabContent.tabContainer,
            itemCount = tabContent.tabItems.length,
            itemWidth = 100 / itemCount

        return {
            tabLayout() {
                tabContent.tabItems && tabContent.tabItems.map((item, index) => {
                    let oldCssText = item.style.cssText
                    setNodeStyle(item, {
                        width: `${itemWidth}%`,
                        height: '100%',
                        position: 'absolute',
                        left: `${itemWidth * index}%`,
                        top: 0,
                    })
                })
                container.style.width = `${100 * itemCount}%`
            },

            switchAnimation() {
                let {currentIndex} = tabContent.props
                container.style.left = `${-(currentIndex * 100)}%`
            }
        }
    }
}

export default class TabSwitcher extends PureComponent {
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
        let {switchAnimationType = 'horizontalMove'} = this.props
        return tabStrategies[switchAnimationType] ? tabStrategies[switchAnimationType](this) : tabStrategies.horizontalMove(this)
    }

    switchAnimation() {
        this.tabStrategy.switchAnimation()
    }

    componentDidMount() {
        this.tabStrategy = this.getTabStrategy()
        this.tabStrategy.tabLayout()
        this.switchAnimation()
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps.currentIndex != this.props.currentIndex) {
            this.switchAnimation()
        }
    }

    render() {
        let {children} = this.props

        return (
            <div className={classNames('container flex full tab-content')}>
                <div ref={node => this.tabContainer = node} className="absolute full trans-dura-4">
                    {
                        children && children.map((child, index) => (
                            <div
                                ref={node => { this.tabItems[index] = node }}
                                key={index}
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
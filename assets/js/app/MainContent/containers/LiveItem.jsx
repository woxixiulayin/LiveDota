import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

//  "name": "灰灰๑",     "nums": "629",     "title": "\r\n        小奶：单排冲8000！
//                   ", "link": "http://www.douyu.com/xiaonai",     "category":
// "",     "img":
// "https://rpic.douyucdn.cn/a1610/24/20/224460_161024205221.jpg", "website":
// "斗鱼"

export default class LiveItem extends Component {
    static propTypes = {
        live: PropTypes.object.isRequired
    }

    static defaultProps = {
        live: {
                name: '灰灰',
                nums: '629',
                title: '\r\n                                                        小奶：单排冲8000！         ' +
                        '               ',
                link: 'http://www.douyu.com/xiaonai',
                img: 'https://rpic.douyucdn.cn/a1610/24/20/224460_161024205221.jpg'
            }
    }
    
    constructor() {
        super()
    }

    render() {
        let {name, nums, title, link, img} = this.props.live

        return (
            <div className="live-item">
                <div className="video-cover">
                    <img src={img} alt="" className="video-img"/>
                    <div className="play-mask"></div>
                </div>
                <div className="video-title">{title}</div>
                <div className="video-info">
                    <span className="video-nickname">{name}</span>
                    <span className="video-nums">{nums}</span>
                </div>
            </div>
        )
    }
}

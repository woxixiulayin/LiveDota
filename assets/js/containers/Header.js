import {Component} from 'react'
import Category from '../components/head/Category'
import container from '../lib/container'
import {switchCategory} from '../actions'

const mapStateToProps = state => ({
    categorys: Object.keys(state.categorys)
})

const mapDispatchToProps = ({
    switchCat: switchCategory
})

const Header = container(
    mapStateToProps,
    mapDispatchToProps
)(Category)

// function s() {
//     return 1
// }

// class Header extends Component {

//     constructor() {
//         super()
//         this.state = {text: '123'}
//     }

//     componentDidMount() {
//         let state = {a: s()},
//             _state = {},
//             shouldSetState = false

//         Object.keys(state).map(item => {
//             if(typeof state[item] !== 'undefined') {
//                 shouldSetState = true
//                 console.log(item)
//                 _state[item] = state[item]
//             }
//         })
//         shouldSetState && this.setState(_state)
//     }

//     render() {
//         console.log('render')
//         return <div>
//         {this.state.text}
//         </div> 
//     }
// }

export default Header 
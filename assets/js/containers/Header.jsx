import Category from '../components/head/Category'
import {connect} from 'react-redux'
import {switchCategory} from '../actions'

const mapStateToProps = state => ({
    categorys: Object.keys(state.lives)
})

const mapDispatchToProps = ({
    switchCat: switchCategory
})

const Header = connect({
    mapStateToProps,
    mapDispatchToProps
})(Category)

export default Header
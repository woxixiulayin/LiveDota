import {connect} from 'react-redux'
import {NavBar} from 'app/commonComponents'
import * as actions from '../actions'

const mapStateToProps = (state, ownprops) => {
    let {liveBase, siteNavInfo, currentCategoryIndex} = state
    return {
        items: liveBase[Object.keys(liveBase)[currentCategoryIndex]],
        currentIndex: siteNavInfo[ownprops.categoryIndex],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeIndex: (index) => {
        console.log(ownProps)
        dispatch(actions.switch_liveSite(ownProps.categoryIndex, index))
    }
})

const SiteNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)

export default SiteNav
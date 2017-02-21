import {connect} from 'react-redux'
import {NavBar} from 'app/commonComponents'
import * as actions from '../actions'

const mapStateToProps = (state, ownprops) => {
    let {liveBase, siteNavInfo, currentCategoryIndex} = state
    return {
        items: liveBase[Object.keys(liveBase)[currentCategoryIndex]],
        currentIndex: siteNavInfo[currentCategoryIndex],
    }
}

const mapDispatchToProp = (dispatch, ownProps) => ({
    changeIndex: (index) => {
        dispatch(actions.switch_liveSite())
    }
})

const SiteNav = connect(
    mapStateToProps
)(NavBar)

export default SiteNav
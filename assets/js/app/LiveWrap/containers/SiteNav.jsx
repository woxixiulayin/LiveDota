import {connector} from 'react-redux'
import {NavBar} from 'app/commonComponents'

const mapStateToProps = (state, ownprops) => ({
    // items: state.siteNavInfo.sites,
    // currentIndex: state.navInfo.currentIndex,
})

const SiteNav = connector(

)(NavBar)

export default SiteNav
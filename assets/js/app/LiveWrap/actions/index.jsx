import * as types from '../const'

export const switch_liveSite = (categoryID, siteID) => ({
    type: types.SWITCH_SITE,
    categoryID,
    siteID
})
import state from './'

export function setCategorySiteVideos (category, site, videoList) {
  state[category][site] = videoList
}

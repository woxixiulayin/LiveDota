<template>
  <div class="live-list" ref="liveSection">
    <video-item v-show="!noData" v-for="video in currentLives" :video="video" :itemWidth="itemWidth" :key="video._id">
    </video-item>
    <div v-show="noData">暂无数据，请刷新</div>
  </div>
</template>

<script>
  import videoItem from './video'
  import {gameCategory} from 'js/config'

  const videoMaxWidth = 380
  const videoMinWidth = 220
  const itemMargin = 10
  const listPadding = 5

  function getItemWidth (width) {
    let itemWidth = videoMinWidth
    for (var i = 0; i < 7; i++) {
      let tempWidth = (width - i * itemMargin - listPadding * 2) / i
      if (tempWidth < videoMaxWidth && tempWidth > videoMinWidth) {
        itemWidth = tempWidth
        break
      }
    }
    return itemWidth - 1
  }
  export default {
    name: 'live-list',
    data: function () {
      return {
        itemWidth: 300,
        currentCategory: 'DOTA',
        currentSite: gameCategory['DOTA'][0],
        noData: false
      }
    },
    computed: {
      currentLives: function () {
        let lives = this.$store.state.categorySiteLives[this.currentCategory][this.currentSite]
        if (!Array.isArray(lives) || lives.length === 0) {
          this.noData = true
        } else {
          this.noData = false
        }
        return lives
      }
    },
    beforeRouteEnter (to, from, next) {
      let {currentCategory, currentSite} = to.params
      if (Object.keys(gameCategory).indexOf(currentCategory) === -1) {
        next('/')
      } else if (gameCategory[currentCategory].indexOf(currentSite) === -1) {
        next(`/${currentCategory}/${gameCategory[currentCategory][0]}`)
      } else {
        next(vm => {
          vm.setCurrentCategorySite(currentCategory, currentSite)
        })
      }
    },
    watch: {
      '$route' (to, from) {
        let {currentCategory, currentSite} = to.params
        this.setCurrentCategorySite(currentCategory, currentSite)
      }
    },
    components: {
      videoItem
    },
    methods: {
      setCurrentCategorySite (currentCategory, currentSite) {
        this.currentCategory = currentCategory
        this.currentSite = currentSite
        this.$store.dispatch('updateLivesIfNeed', {
          category: currentCategory,
          site: currentSite
        })
      }
    },
    mounted () {
      const liveSection = this.$refs.liveSection
      // const that = this
      const reSizeIfWidthChange = (() => {
        let lastWidth = Math.floor(liveSection.clientWidth)
        return () => {
          let width = Math.floor(liveSection.clientWidth)
          if (width !== lastWidth) {
            lastWidth = width
            this.itemWidth = getItemWidth(width)
          }
        }
      })()
      setInterval(reSizeIfWidthChange, 400)
    }
  }

</script>

<style lang='scss' scoped>
@import "~@/css/variable.scss";

  .live-list{
    flex-grow: 1;
    flex-shrink: 1;
    margin-top: 35px;
  }

  .categoryList-enter-active {
    transition: all .4s;
    transform: scale(1);
  }

  .categoryList-leave-active {
    transition: all .4s;
    opacity: 0;
  }

  .categoryList-leave {
    transform: scale(1);
  }

  .categoryList-enter {
    transform: scale(0);
  }

  .video-list {
    flex-wrap: wrap;
    padding: 5px;
    text-align: left;
  }
</style>

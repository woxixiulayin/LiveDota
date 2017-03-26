<template>
  <div class="live-list" ref="liveSection">
    {{currentSite}}
  </div>
</template>

<script>
  // import store from '/js/store'
  import videoItem from './video'
  import {gameCategory} from '/js/config'
  import router from '/js/router'

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
    data: function () {
      return {
        categoryCurrentSiteMap: {}
      }
    },
    // 计算属性会缓存数据
    computed: {
      currentCategory: function () {
        return this.$route.params.currentCategory
      },
      currentSite: function () {
        return this.$route.params.currentSite
      }
    },
    watch: {
      '$route' (to, from) {
        let {currentCategory, currentSite, categoryCurrentSiteMap} = this
        if (gameCategory[currentCategory].indexOf(currentSite) === -1) {
          router.push(`/${currentCategory}/${gameCategory[currentCategory][0]}`)
        } else {
          categoryCurrentSiteMap[currentCategory] = currentSite
        }
      }
    },
    components: {
      videoItem
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
  .live-list-wrap{
    flex-grow: 1;
    flex-shrink: 1;
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

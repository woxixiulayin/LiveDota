<template>
  <div class="live-section" ref='liveSection'>
    <transition-group name="categoryList" tag="div">
    <el-tabs v-for='categoryItem in categoryList' v-show='currentCategory===categoryItem' @tab-click="handleClick" :value='currentSiteName'
      :key='categoryItem'>
      <el-tab-pane v-for='(site,index) in categorySites[currentCategory]' :label="site" :name="site" :key='site'>
        <div class="video-list">
          <video-item v-for='video in videoStore[currentCategory][site]' :key='video' :itemWidth='itemWidth' :video='video'/>
        </div>
      </el-tab-pane>
    </el-tabs>
    </transition-group>
  </div>
</template>

<script>
  import store from 'js/store'
  import videoItem from './video'

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
    props: ['currentCategory'],
    data: () => {
      const globalState = store.state

      return {
        categoryList: globalState.categoryList,
        categorySites: globalState.categorySites,
        videoStore: globalState.videoStore,
        currentSiteIndexMap: new Map(globalState.categoryList.map(category => [category, 0])),
        itemWidth: getItemWidth(window.innerWidth - 350)
      }
    },
    computed: {
      currentSiteName: function () {
        const currentCategory = this.currentCategory
        return this.categorySites[currentCategory][this.currentSiteIndexMap.get(currentCategory)]
      }
    },
    components: {
      videoItem
    },
    mounted () {
      const liveSection = this.$refs.liveSection
      console.log(liveSection)
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
    },
    methods: {
      handleClick: () => {}
    }
  }

</script>

<style lang='scss' scoped>
  .live-section {
    flex-grow: 1;
    flex-shrink: 1;
  }
  
  .categoryList-enter-active{
    transition: all .4s;
    transform: scale(1);
  }
  .categoryList-leave-active {
    transition: all .4s;
    opacity: 0;
  }
  .categoryList-leave{
    transform: scale(1);
  }
  .categoryList-enter{
    transform: scale(0);
  }

  .video-list {
    flex-wrap: wrap;
    padding: 5px;
    text-align: left;
  }
  
  .video-item-wrap {
    display: flex;
  }


</style>

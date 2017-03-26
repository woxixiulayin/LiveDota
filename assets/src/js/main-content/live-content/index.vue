<template>
<div class="main-content">
  <div class="live-list-wrap">
  <ul class="live-list-header">
    <router-link @click.native="handleClick(site)" tag="li" v-for="site in siteList" class="live-list-site trans-dura-4" active-class="current" :to="`/${currentCategory}/${site}`" :key="site">
      {{site}}
    </router-link>
  </ul>
      <router-view></router-view>
      </div>
    <rank-section :currentCategory='$route.params.currentCategory'/>
</div>
</template>

<script>
import rankSection from './rank-section'
import {gameCategory} from '/js/config'

export default {
  computed: {
    siteList: function () {
      return gameCategory[this.$route.params.currentCategory]
    },
    currentCategory: function () {
      return this.$route.params.currentCategory
    }
  },
  components: {
    rankSection
  },
  methods: {
    handleClick: function (site) {
      this.$store.commit('setCategoryCurrentSite', {category: this.currentCategory, site: site})
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~@/css/variable.scss";

.main-content {
  // margin-top: $headerHeight+1;
  // margin-right: $rightSideWidth;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
  text-align: center;
}
 .video-item-wrap {
    display: flex;
  }

.live-list-wrap {
  flex-grow: 1;
}
.live-list-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 8px;
  border-bottom: 1px solid $activeColor;
}

.current.current {
  border-bottom: 3px solid $activeColor;
  color: $activeColor;
}

.live-list-site {
  display: inline;
  padding: 0 .5em;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  width: 100px;
  &:hover {
    color: $activeColor;
  }
}
</style>


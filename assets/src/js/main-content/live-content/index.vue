<template>
<div class="main-content">
    <router-view></router-view>
    <rank-section :currentCategory='$route.params.currentCategory'/>
</div>
</template>

<script>
import rankSection from './rank-section'
import liveList from './live-list'

export default {
  components: {
    rankSection,
    liveList
  }
}

</script>

<style lang="scss">
@import "~@/css/variable.scss";

.main-content {
  // margin-top: $headerHeight+1;
  // margin-right: $rightSideWidth;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
}
</style>

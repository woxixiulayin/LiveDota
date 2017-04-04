<template>
  <section class="rank-section">
    全网{{currentCategory}}直播排行
    <ul class="rank-list">
      <rank-video v-for="video in lives" :video="video" :key="video._id">
      </rank-video>
    </ul>
  </section>
</template>
<script>
  import rankVideo from './rankVideo'
  export default {
    props: ['currentCategory'],
    components: {
      rankVideo
    },
    computed: {
      lives: function () {
        return this.$store.state.rankLives[this.currentCategory]
      }
    }

  }

</script>

<style lang="scss">
  @import "~@/css/variable.scss";
  .rank-section {
    position: fixed;
    background-color: white;
    z-index: 1;
    height: 100%;
    top: 50px;
    right: 0;
    width: 350px;
    // width: $rightSideWidth;
    border-left: 1px solid $activeColor;
    flex-basis: $rightSideWidth;
    flex-grow: 0;
    flex-shrink: 0;
    overflow: scroll;
  }

</style>

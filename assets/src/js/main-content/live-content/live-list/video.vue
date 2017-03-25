<template>
  <li class="live-item" :style="{width: itemWidth +'px'}">
    <div class="video-cover">
      <img :src='video.img' alt="" class="video-img" />
      <div class="play-mask"></div>
    </div>
    <div class="video-title">{{video.title}}</div>
    <div class="video-info">
      <span class="video-nickname">{{video.name}}</span>
      <span class="video-nums">{{video.nums}}</span>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['video', 'itemWidth']
  }

</script>

<style lang='scss' scoped>
  .live-item {
    //max 320px
    //min 250px
    height: 215px;
    // flex-basis: 250px;
    border: 1px solid black;
    background: white;
    margin: 5px 5px;
    display: inline-flex;
    flex-flow: row wrap;
    overflow: hidden;
    .video-cover {
      position: relative;
      width: 100%;
      height: 158px;
      img {
        width: 100%;
        height: 100%;
      }
      .play-mask {
        position: absolute;
        left: 0;
        height: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: #fff;
      }
    }
    .video-title {
      margin-left: 5px;
      width: 100%;
      line-height: 30px;
      white-space: nowrap;
      font-size: 15px;
    }
    .video-info {
      margin-left: 5px;
      font-size: 14px;
      width: 100%;
      .video-nickname {
        margin-left: 3px;
        float: left;
      }
      .video-nums {
        float: right;
        margin-right: 5px;
      }
    }
  }

</style>

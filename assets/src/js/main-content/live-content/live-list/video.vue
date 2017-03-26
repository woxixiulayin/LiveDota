<template>
  <li class="live-item" :style="{width: itemWidth +'px'}">
    <a :href="video.link" target="_blank">
    <div class="video-cover">
      <img :src='video.img' alt="" class="video-img" />
      <div class="play-mask"></div>
    </div>
    <div class="video-title">{{video.title}}</div>
    <div class="video-info cleaerfix">
      <span class="video-nickname">{{video.name}}</span>
      <span class="video-nums">{{video.nums}}</span>
    </div>
    </a>
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
    a {
      color: #333;
      display: block;
      text-align: left;
      width: 100%;
      display: inline-block;
    }
    .video-cover {
      position: relative;
      width: 100%;
      height: 158px;
    &:hover {
      .play-mask {
        left: 0;
      }
     }
      img {
        width: 100%;
        height: 100%;
      }
      .play-mask {
        position: absolute;
        left: -9999px;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #fff;
      }
    }
    .video-title {
      padding-left: 2px;
      width: 100%;
      line-height: 30px;
      white-space: nowrap;
      font-size: 15px;
    }
    .video-info {
      padding: 0 8px;
      font-size: 14px;
      color: #666;
      .video-nickname {
        float: left;
      }
      .video-nums {
        float: right;
      }
    }
  }

</style>

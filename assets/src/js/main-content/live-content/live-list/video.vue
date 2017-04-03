<template>
  <li class="live-item" :style="{width: itemWidth +'px'}">
    <a :href="video.link" target="_blank">
    <div class="video-cover">
      <img :src='video.img' alt="" class="video-img" />
      <div class="play-mask"><i class="iconfont">&#xe6fe;</i></div>
    </div>
    <div class="video-title">{{video.title}}</div>
    <div class="video-info cleaerfix">
      <span class="video-nickname">{{video.name}}</span>
      <span class="video-nums">{{video.nums > 10000 ? (video.nums / 10000).toFixed(1) + '万' : video.nums}}</span>
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
    border: 1px solid #ddd;
    background: white;
    margin: 10px 10px;
    display: inline-flex;
    flex-flow: row wrap;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0,0,0,.05);
    transition: all .16s linear;
    overflow: hidden;
    &:hover {
      border: 1px solid rgba(0,0,0,.1);
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
      & img {
        transform: scale(1.1);
      }
      & .play-mask.play-mask {
        top: 0;
        transition: all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      & .video-title {
        color: #20a0ff;
      }
    }
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
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transition: all .3s ease-out;
      }
      .play-mask {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: all .5s ease-out;
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          color: white;
          display: inline-block;
          font-size: 60px;
          font-weight: bold;
          transform: translate(-50%, -50%);
          // trans
        }
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

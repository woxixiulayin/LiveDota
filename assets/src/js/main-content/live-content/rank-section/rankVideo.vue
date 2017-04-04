<template>
  <li class="live-item">
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

<style lang='scss'>
  .live-item {
   
  }

</style>

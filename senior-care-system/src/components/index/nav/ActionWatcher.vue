<template>
  <div>
    <div class="videoWatch">
      <h1>视频监控</h1>
      <div class="timeDisplay">
        <span style="font:24px/30px 'Microsoft YaHei';color: gray">时间 2020/7/1</span>
      </div>
      <div class="inner">
<!--        <watch-stream/>-->
        <video-play />
        <!--        <Camera />-->
        <!--        <span @click="goPage('http://121.89.222.245/app_live_stream/')">视频监控</span>-->
      </div>
    </div>
  </div>
</template>
<script>
import Camera from './Camera';
import VideoPlay from './VideoPlay';
import WatchStream from './WatchStream';
export default {
  name: 'ActionWatcher',
  components: {
    Camera,
    VideoPlay,
    WatchStream
  },
  methods: {

    goPage (url) {
      window.location.href = url
    }

  }
}
</script>

<style scoped>
  .videoWatch {
    width: 1600px;
    height: 800px;
    background-color: rgba(179, 216, 255, .2);
    /*margin-left: 400px;*/
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 10px;
  }

  .inner {
    width: 100%;
    height: 100%;
    margin: 20px 20px;
  }

  .timeDisplay {

  }

</style>

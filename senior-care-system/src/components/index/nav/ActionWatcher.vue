<template>
  <div>
    <div class="videoWatch">
      <h1>视频监控</h1>
      <div style="text-align: left;padding-left: 20px">
        <span>老人行为监控</span>
      </div>
      <div style="text-align: left;padding-left: 20px">
        <span style="font:24px/30px 'Microsoft YaHei';color: gray">时间 2020/7/1</span>
      </div>
      <div class="inner">
        <Camera />
      </div>
    </div>
  </div>
</template>
<script>
import VideoStream from './VideoStream'
import Camera from './Camera';

export default {
  name: 'ActionWatcher',
  components: {
    VideoStream,
    Camera
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
</style>

<template>
  <div>
    <div class="camera">
      <canvas style="display:none;" id="canvasCamera" width="720px" height="300px"></canvas>
      <div v-if="imgSrc" style="height: 100px;width: 100px">
        <p>效果预览</p>
        <img :src="imgSrc" alt style="height: 100px;width: 100px" />
      </div>
    </div>
    <div class="photo">
      <video id="videoCamera" width="720px" height="100%" autoplay></video>
      <el-button @click="setImage()">拍照</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Camera',
  data () {
    return {
      thisVideo: null,
      thisCanvas: null,
      thisContext: null,
      imgSrc: '',
      videoWidth: '720px',
      videoHeight: '300px'
    }
  },
  methods: {
    //  绘制图片（拍照功能）
    setImage () {
      var _this = this;
      _this.thisCanvas = document.getElementById('canvasCamera');
      _this.thisContext = this.thisCanvas.getContext('2d');
      // canvas画图
      _this.thisContext.drawImage(
        _this.thisVideo,
        0,
        0,
        _this.videoWidth,
        _this.videoHeight
      );
      // 获取图片base64链接
      console.log(this.thisCanvas.toDataURL('image/png'))
      var image = this.thisCanvas.toDataURL('image/png');
      console.log('url:' + image)
      _this.imgSrc = image;//赋值并预览图片
    }
  }
  ,
  mounted () {
    this.thisVideo = document.getElementById('videoCamera')
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(success => {
        console.log('视频对象')
        console.log(success)
        // this.playerOptions.sources[0].src = success
        this.thisVideo.srcObject = success
      })
      console.log('dynamic change options', this.player)
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
    }, 3000)
  }
}
</script>

<style scoped>
  .camera {
    display: inline-block;
  }

  .photo {
    display: inline-block;
  }
</style>

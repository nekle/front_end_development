<template>
  <div style="width: 1925px;height: 800px">
    <el-container>
      <div class="align left">
        <left />
      </div>
      <div class="align mid">
        <mid />
      </div>
      <div class="align right">
        <right />
      </div>
    </el-container>
  </div>
</template>

<script>
import left from './left'
import mid from './mid'
import right from './right'

export default {
  name: 'overview',
  components: {left, mid, right}
}
</script>

<style scoped>
  .align {
    display: inline-block;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .left {
    width: 20%;
    height: 600px;
    background-color: #ffffff;
    margin: 10px 0px 200px 0px;
  }

  .mid {
    width: 50%;
    height: 800px;
    background-color: #ffffff;
    margin: 10px 10px 0px 10px;
  }

  .right {
    width: 20%;
    height: 600px;
    background-color: #ffffff;
    margin: 10px 0px 200px 0px;
  }
</style>

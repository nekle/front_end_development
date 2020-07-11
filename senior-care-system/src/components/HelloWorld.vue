<template>
  <div class="hello">
    <div class="bcg">
      <login></login>
      <span>基于情感分析的老人看护系统</span>
    </div>
  </div>
</template>

<script>
import Login from './login'

export default {
  name: 'HelloWorld',
  components: {Login},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bcg {
    background: url('../static/imgs/bcgD.jpg') center center no-repeat;
    background-size: cover;
    height: 1072px;
    position: fixed;
    width: 1904px;
  }

  .hello {
    width: 18px;
    height: 942px;
  }

  span {
    color: white;
    font: 24px/24px 'Microsoft Himalaya';
  }

</style>

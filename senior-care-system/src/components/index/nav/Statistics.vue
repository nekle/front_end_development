<template>
  <div>
    <div id="main" style="width: 1800px;height: 850px;">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Statistics',
  data () {
    return {}
  },
  methods: {
    drawPie (id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption({
        backgroundColor: '#409eff',
        title: {
          text: '情绪雷达图',
          fontSize: '30'
        },
        tooltip: {},
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              fontSize: '25',
              color: '#fff',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            {name: '开心', max: 100},
            {name: '悲伤', max: 100},
            {name: '愤怒', max: 100},
            {name: '痛苦', max: 100},
            {name: '一般', max: 100}
          ]
        },
        series: [{
          name: '情绪值',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [60, 5, 5, 15, 15],
              name: '情绪分析雷达图',
              fontSize: '40'
            }
          ]
        }]

      })
    }
  },
  mounted () {
    this.drawPie('main')
  }
}
</script>

<style scoped>

</style>

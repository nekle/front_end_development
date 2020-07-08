<template>
  <div>
    <el-button @click="drawLine('overviewMain')">获取数据</el-button>
    <div id="overviewMain" style="width: 850px;height: 730px;"></div>
  </div>
</template>

<script>

export default {
  name: 'EventInfo',
  data () {
    return {
      activeName: '7',
      dateData: [],
      dataTotal: [],
      dataUnsolved: [],
      dataSolved: [],
      dataName: '',
      dataNameUnsolved: '',
      dataNameSolved: ''
    }
  },
  methods: {
    drawLine (id) {

      let params = new URLSearchParams()
      params.append('date_type', 0)
      params.append('event_type', 1)

      this.$axios.post('http://' + this.$ip + ':' + this.$port + '/home/home', params).then(res => {

        console.log('事件统计');
        console.log(res.data.data);
        console.log(res.data.data.event_by_date[0]);

        this.dataName = res.data.data.event_by_date[0].name;
        this.dataNameSolved = res.data.data.event_by_date[1].name;
        this.dataNameUnsolved = res.data.data.event_by_date[2].name;
        this.dateData = res.data.data.event_by_date[0].date;
        this.dataTotal = res.data.data.event_by_date[0].data;
        this.dataSolved = res.data.data.event_by_date[1].data;
        this.dataUnsolved = res.data.data.event_by_date[2].data;

        console.log(this.dateData);

      })

      let myChart = this.$echarts.init(document.getElementById(id))

      myChart.setOption({
        title: {
          text: '事件统计图'
        },
        tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [this.dataName, this.dataNameSolved, this.dataNameUnsolved]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.dateData  // 日期
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: this.dataName,
              type: 'line',
              data: this.dataTotal,
            },
            {
              name: this.dataNameSolved,
              type: 'line',
              data: this.dataSolved,
            },
            {
              name: this.dataNameUnsolved,
              type: 'line',
              data: this.dataUnsolved,
            }
          ]
        }
      )
    }
  },

  mounted () {
    this.drawLine('overviewMain')
  }

}
</script>

<style scoped>

</style>

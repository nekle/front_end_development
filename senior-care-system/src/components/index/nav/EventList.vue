<template>
  <div style="width: 1750px; height: 850px">
    <div>
      <el-tabs tab-position="top"
               style="font: 30px/1.7 'Helvetica Neue'" type="card"
               v-model="activeName">
        <el-tab-pane label="待处理或处理中" name="solving">
          <div>
            <el-row>
              <el-col :span="6" v-for="event in eventList" :key="event" :offset="1">
                <el-card :body-style="{ margin:'10px' }" shadow="hover">

                  <img :src="event.imgs"
                       class="image">

                  <div style="padding: 14px; text-align: left">
                    <div>
                      <span style="width: 150px;display: inline-block">人员信息：</span>
                      <span>{{event.elder_info.username}}</span>
                    </div>
                    <div>
                      <span style="width: 150px;display: inline-block">事件类型：</span>
                      <span>{{event.type_info}}</span>
                    </div>
                    <div>
                      <span style="width: 150px;display: inline-block">事件位置： </span>
                      <span>{{event.location}}</span>
                    </div>
                    <div>
                      <span style="width: 150px;display: inline-block">严重程度： </span>
                      <span>{{event.type_level}}</span>
                    </div>
                    <div>
                      <el-button type="primary" class="button">处理完成</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已经处理" name="solved">
          <div>
            <el-row>
              <el-col :span="6" v-for="event in finishedList" :key="event" :offset="1">
                <el-card :body-style="{ margin:'10px' }" shadow="hover">

                  <img :src=event.imgs
                       class="image">

                  <div style="padding: 14px; text-align: left">
                    <div>
                      <span style="width: 150px;display: inline-block">人员信息：</span>
                      <span>{{event.elder_info.username}}</span>
                    </div>
                    <div>
                      <span style="width: 150px;display: inline-block">事件类型：</span>
                      <span>{{event.type_info}}</span>
                    </div>
                    <div>
                      <span style="width: 150px;display: inline-block">事件位置： </span>
                      <span>{{event.location}}</span>
                    </div>
                    <div>
                      <span style="width: 150px;display: inline-block">严重程度： </span>
                      <span>{{event.type_level}}</span>
                    </div>
                    <div>
                      <el-button type="info" class="button" disabled>处理完成</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventList',

  data () {
    return {

      activeName: 'solving',

      currentDate: new Date(),

      eventList: [],

      finishedList: []
    }
  },

  methods: {

    getEventList () {
      let _this = this;
      let params = new URLSearchParams();

      // params.append('orderby', '[\'id\' => SORT_DESC]');
      params.append('page', 1);
      params.append('size', 3);

      _this.$axios.post('http://' + this.$ip + ':' + this.$port + '/event/list-no-finish', params).then(response => {

        console.log(response);

        if (response.data.code === 0) {

          _this.eventList = response.data.data.event_list;
          // console.log('如下')
          // console.log(_this.eventList);

        } else {
          console.log('获取未完成事件详情失败')
        }

      })

      _this.$axios.post('http://' + this.$ip + ':' + this.$port + '/event/list-finish', params).then(response => {

        if (response.data.code === 0) {
          console.log(response);
          _this.finishedList = response.data.data.event_list;
          console.log('如下')
          console.log(_this.finishedList);
        } else {
          console.log('获取完成事件失败')
        }

      })

    }

  },

  mounted () {
    // console.log('获取事件')
    this.getEventList();
  }
}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    /*padding: 0;*/
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

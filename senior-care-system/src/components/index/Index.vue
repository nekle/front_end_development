<template>
  <div>
    <el-container direction="vertical">
      <el-header class="infoBar" height="120">
        <div class="topLogo">
          <el-image src="../static/imgs/logo.jpg">
          </el-image>
        </div>
        <div class="topInfo">
          <el-button type="warning" icon="el-icon-warning" @click="goBack" round size="mini">退出登录</el-button>
          <span>管理员</span>
          <el-button @click="drawer = true" type="primary"
                     style="margin-left: 16px;background-color: transparent;border: 0">
            <el-avatar :size="60"
                       src="../static/imgs/bcg.jpg">
            </el-avatar>
          </el-button>
          <el-drawer
            title="管理员您好！"
            :visible.sync="drawer"
            :direction="direction"
          >
            <manager-person-info />
          </el-drawer>
        </div>
      </el-header>
      <el-container direction="horizontal" style="height: 840px;backgroundColor: rgba(217, 236, 255, .3)">
        <el-tabs tab-position="left"
                 style="font: 30px/1.7 'Helvetica Neue'" type="card"
                 v-model="activeName">
          <el-tab-pane label="概览" name="overview">
            <overview />
          </el-tab-pane>
          <el-tab-pane label="老人行为监控" name="actionWatch">
            <actionWatcher />
          </el-tab-pane>
          <el-tab-pane label="监控数据可视化" name="dataVisualize">
            <el-container v-loading="loading">
              <statistics />
            </el-container>
          </el-tab-pane>
          <el-tab-pane label="事件列表" name="eventList">
            <EventList />
          </el-tab-pane>
          <el-tab-pane label="老人信息" name="oldInfo">
            <SeniorTable />
          </el-tab-pane>
          <el-tab-pane label="员工信息" name="staffInfo">
            <StaffTable />
          </el-tab-pane>
          <el-tab-pane label="义工信息" name="volunteerInfo">
            <VolunteerTable />
          </el-tab-pane>
          <el-tab-pane label="管理员信息" name="managerInfo">
            <ManagerTable />
          </el-tab-pane>
        </el-tabs>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ActionWatcher from './nav/ActionWatcher'
import Statistics from './nav/Statistics'
import SeniorInfo from './nav/SeniorInfo'
import SeniorTable from './nav/SeniorTable'
import StaffTable from './nav/StaffTable'
import VolunteerTable from './nav/VolunteerTable'
import ManagerTable from './nav/ManagerTable'
import ManagerPersonInfo from './nav/ManagerPersonInfo'
import Overview from './nav/overview/Overview';
import EventList from './nav/EventList';

export default {
  name: 'Index',
  data () {
    return {

      activeName: 'overview',

      loading: true,

      props: {
        active: {
          type: String,
          required: true
        }
      },

      drawer: false,
      direction: 'rtl'
    }

  },

  components: {
    EventList,
    Overview,
    ManagerPersonInfo,
    SeniorInfo,
    ActionWatcher,
    Statistics,
    SeniorTable,
    StaffTable,
    VolunteerTable,
    ManagerTable
  },

  methods: {

    handleSelect (key, keyPath) {
      this.$emit('update:active', key)
    },

    refresh () {
      this.loading = false
    },

    goBack () {
      this.$router.push('/')
    },

    open () { // 新事件提醒
      this.$notify({
        title: '新事件发生',
        message: '您有新事件待处理',
        showClose: false,
        // duration:0,
        type: 'warning'
      })
    }

  },
  mounted () {
    this.$nextTick(() => {
      setInterval(this.refresh, 2500)
      setInterval(this.open, 60000)
    })
  }
}
</script>
<style scoped>
  .infoBar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    color: #2c3e50;
    width: 100%;
    display: inline;
    text-align: left;
  }

  .topLogo {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-left: 20px;
  }

  .topInfo {
    display: inline-block;
    margin-left: 700px;
  }

  .block {
    display: inline-block;
    margin-left: 200px;
  }
</style>

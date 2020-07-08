<template>
  <div>
    员工和志愿者
    <div>
      <div class="name">
        <span>护工人数 {{employee}} 人</span>
      </div>
      <div class="avatar">
        <el-image src="/static/imgs/employerWoman.png">
        </el-image>
      </div>
      <span>{{employee_woman}} 人</span>
    </div>
    <div>
      <div class="avatar">
        <el-image src="/static/imgs/employerMan.png">
        </el-image>
      </div>
      <span>{{employee_man}} 人</span>
    </div>
    <div>
      <div class="name">
        <span>义工人数 {{volunteer}} 人</span>
      </div>
      <div class="avatar">
        <el-image src="/static/imgs/volunteerWoman.png">
        </el-image>
      </div>
      <span>{{volunteer_woman}} 人</span>
    </div>
    <div>
      <div class="avatar">
        <el-image src="/static/imgs/volunteerMan.png">
        </el-image>
      </div>
      <span>{{volunteer_man}} 人</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
      employee: 0,
      employee_man: 0,
      employee_woman: 0,
      volunteer: 0,
      volunteer_man: 0,
      volunteer_woman: 0
    }
  },
  methods: {

    getData () {

      this.employee = sessionStorage.getItem('employee')
      this.employee_man = sessionStorage.getItem('employee_man')
      this.employee_woman = sessionStorage.getItem('employee_woman')
      this.volunteer = sessionStorage.getItem('volunteer')
      this.volunteer_man = sessionStorage.getItem('volunteer_man')
      this.volunteer_woman = sessionStorage.getItem('volunteer_woman')

    }

  },
  mounted () {

    this.getData();
    this.$nextTick(() => {
      setInterval(this.getData, 10000)
    })

  }
}
</script>

<style scoped>
  .avatar {
    width: 100px;
    height: 100px;
    margin-left: 20px;
    display: inline-block;
  }

  .name {
    font: 20px/24px 'Microsoft YaHei';
    font-weight: 800;
    margin-bottom: 20px;
    text-align: left;
  }
</style>

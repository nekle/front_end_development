<template>
  <div>
    老人和监护人
    <div>
      <div class="name">
        <span>入住老人人数 {{this.oldMan}} 人</span>
      </div>
      <div class="avatar">
        <el-image src="/static/imgs/oldWoman.png">
        </el-image>
      </div>
      <span>{{this.oldMan_man}} 人</span>
    </div>

    <div>
      <div class="avatar">
        <el-image src="/static/imgs/oldMan.png">
        </el-image>
      </div>
      <span>{{this.oldMan_woman}} 人</span>
    </div>
    <div>
      <div class="name">
        <span>监护人人数 {{this.guardian}} 人</span>
      </div>
      <div class="avatar">
        <el-image src="/static/imgs/guardianWoman.png">
        </el-image>
      </div>
      <div class="avatar">
        <el-image src="/static/imgs/guardianMan.png">
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      oldMan: 0,
      oldMan_man: 0,
      oldMan_woman: 0,
      guardian: 0,
      employee: 0,
      employee_man: 0,
      employee_woman: 0,
      volunteer: 0,
      volunteer_man: 0,
      volunteer_woman: 0
    }
  },
  methods: {
    getPeople () {

      var params = new URLSearchParams()
      params.append('date_type', 0)
      params.append('event_type', 1)

      this.$axios.post('http://' + this.$ip + ':' + this.$port + '/home/home', params).then(res => {

        console.log(res)

        this.oldMan = res.data.data.pepple_sum.oldMan
        this.oldMan_man = res.data.data.pepple_sum.oldMan_man
        this.oldMan_woman = res.data.data.pepple_sum.oldMan_woman
        this.guardian = res.data.data.pepple_sum.guardian
        this.employee = res.data.data.pepple_sum.employee
        this.employee_man = res.data.data.pepple_sum.employee_man
        this.employee_woman = res.data.data.pepple_sum.employee_woman
        this.volunteer = res.data.data.pepple_sum.volunteer
        this.volunteer_man = res.data.data.pepple_sum.volunteer_man
        this.volunteer_woman = res.data.data.pepple_sum.volunteer_woman

        //将数据存储到session
        sessionStorage.setItem('oldMan', res.data.data.pepple_sum.oldMan)
        sessionStorage.setItem('oldMan_man', res.data.data.pepple_sum.oldMan_man)
        sessionStorage.setItem('oldMan_woman', res.data.data.pepple_sum.oldMan_woman)
        sessionStorage.setItem('guardian', res.data.data.pepple_sum.guardian)
        sessionStorage.setItem('employee', res.data.data.pepple_sum.employee)
        sessionStorage.setItem('employee_man', res.data.data.pepple_sum.employee_man)
        sessionStorage.setItem('employee_woman', res.data.data.pepple_sum.employee_woman)
        sessionStorage.setItem('volunteer', res.data.data.pepple_sum.volunteer)
        sessionStorage.setItem('volunteer_man', res.data.data.pepple_sum.volunteer_man)
        sessionStorage.setItem('volunteer_woman', res.data.data.pepple_sum.volunteer_woman)
        // console.log('employee: '+sessionStorage.getItem('employee'))

      })
    }
  },
  mounted () {

    this.getPeople();
    this.$nextTick(() => {
      setInterval(this.getPeople, 100000)
    })

  }
}
</script>

<style scoped>
  .avatar {
    width: 100px;
    height: 100px;
    display: inline-block;
  }

  .name {
    font: 20px/24px 'Microsoft YaHei';
    font-weight: 800;
    margin-bottom: 20px;
    text-align: left;
  }
</style>

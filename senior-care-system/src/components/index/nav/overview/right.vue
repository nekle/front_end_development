<template>
  <div>
    员工和志愿者
    <div>
      <div class="avatar">
        <el-image src="/static/imgs/people/employer.jpg">
        </el-image>
      </div>
    </div>
    <div>
      <div class="avatar">
        <el-image src="/static/imgs/people/volunteer.jpg">
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'right'
}
</script>

<style scoped>
  .avatar {
    width: 150px;
    height: 150px;
    margin-left: 20px;
  }
</style>

<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="近七天事件" name="7">
      近七天事件
    </el-tab-pane>
    <el-tab-pane label="七到14天事件" name="714">七到14天事件</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: "EventInfo",
    data() {
      return {
        activeName: '7'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>

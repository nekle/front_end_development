<template>
  <div>
    <el-container direction="vertical">
      <el-header class="infoBar" height="120">
        <div class="topLogo">
          <el-image src="/static/imgs/logo.jpg">
          </el-image>
        </div>
        <div class="topInfo">
          <el-button type="warning" icon="el-icon-warning" @click="goBack" round size="mini">退出登录</el-button>
          <span>管理员</span>
          <el-button @click="drawer = true" type="primary"
                     style="margin-left: 16px;background-color: transparent;border: 0">
            <el-avatar :size="60"
                       src="/static/imgs/bcg.jpg">
            </el-avatar>
          </el-button>
          <el-drawer
            title="管理员您好！"
            :visible.sync="drawer"
            :direction="direction"
          >
            <manager-person-info/>
          </el-drawer>
        </div>
      </el-header>
      <el-container direction="horizontal"
                    style="height: 840px;background-color: rgba(217, 236, 255,.2)">
        <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left"
                 style="font: 30px/1.7 'Helvetica Neue'">
          <el-tab-pane label="老人图片上传" name="first">
            <div>
              <el-steps :active="active" finish-status="success" :space=500 class="fontStyle">
                <el-step description="上传正脸照片"></el-step>
                <el-step description="向左看照片"></el-step>
                <el-step description="向右看照片"></el-step>
                <el-step description="向下看照片"></el-step>
                <el-step description="闭眼照片"></el-step>
                <el-step description="仰头照片"></el-step>
              </el-steps>
              <pic-upload/>
              <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="老人视频上传" name="videoUpload">
            <video-upload/>
          </el-tab-pane>
        </el-tabs>
      </el-container>
    </el-container>
  </div>
</template>


<script>
  import ActionWatcher from "./nav/ActionWatcher";
  import Statistics from "./nav/Statistics";
  import SeniorInfo from "./nav/SeniorInfo";
  import VideoUpload from "./userNav/videoUpload";
  import PicUpload from "./userNav/picUpload";
  import ManagerPersonInfo from "./nav/ManagerPersonInfo";
  export default {
    name: "UserIndex",
    data() {
      return {
        active: 0,
        props: {
          active: {
            type: String,
            required: true
          }
        },
        drawer: false,
        direction: 'rtl',
        avatar_size: 'large'
      };
    },
    components: {
      PicUpload,
      VideoUpload,
      SeniorInfo,
      ActionWatcher,
      Statistics,
      ManagerPersonInfo
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$emit('update:active', key)
      },
      next() {
        if (this.active++ > 5) this.active = 0;
      },
      goBack() {
        this.$router.push('/')
      }
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
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
  }

  .topInfo {
    display: inline-block;
    margin-left: 700px;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
  }
</style>

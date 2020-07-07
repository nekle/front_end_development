<template>
  <div>
    <div class="topDiv">
      <div class="avatarDiv">
        <el-avatar :size='100'
                   :src="profile_photo">
          <!--          src="/static/imgs/bcg.jpg"-->
        </el-avatar>
      </div>
      <div class="managerIcon"><i class="el-icon-user-solid">管理员</i></div>
      <span class="managerName">{{real_name}}</span>
    </div>
    <el-divider></el-divider>
    <div class="detail">
      <i class="el-icon-user-solid">性别:{{gender}}</i>
    </div>
    <div class="detail">
      <i class="el-icon-phone">电话:{{phone}}</i>
    </div>
    <div class="detail">
      <i class="el-icon-message">邮箱：{{email}}</i>
    </div>
    <div class="editPerson">
      <el-popover
        placement="right"
        width="600"
        trigger="click">
        <edit-info />
        <el-button type="primary" slot="reference">
          <i class="el-icon-edit"></i>
          修改个人信息
        </el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
import EditInfo from './editInfo';

export default {
  name: 'managerPersonInfo',

  components: {EditInfo},

  data () {
    return {
      id: 1,
      username: 'admin',
      real_name: '管理员',
      gender: '男',
      phone: '18811011699',
      email: '2411178926@qq.com',
      identity_card_id: '',
      birthday: '',
      profile_photo: '/static/imgs/bcg.jpg',
      description: ''
    }
  }
}
</script>

<style scoped>
  .topDiv {
  }

  .topDiv > .managerIcon {
    display: inline-block;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .4);
    margin-right: 20px;
  }

  .avatarDiv {
    display: inline-block;
    margin: 0 20px;
  }

  .managerName {
    font: 24px/36px 'Microsoft YaHei';
  }

  .detail {
    text-align: left;
    margin: 20px 150px;
  }

  .editPerson {
    margin: 80px 214px;
  }

  i {
    font-size: 18px;
  }
</style>

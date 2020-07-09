<template>
  <div>
    <div class="topDiv">
      <div class="avatarDiv">
        <el-avatar :size='100'
                   :src="avatarSrc">
          <!--          src="/static/imgs/bcg.jpg"-->
        </el-avatar>
      </div>
      <div class="managerIcon"><i class="el-icon-user-solid">管理员</i></div>
      <span class="managerName">{{managerData.real_name}}</span>
    </div>
    <el-divider></el-divider>
    <div class="detail">
      <i class="el-icon-user-solid">性别:{{managerData.gender}}</i>
    </div>
    <div class="detail">
      <i class="el-icon-phone">电话:{{managerData.phone}}</i>
    </div>
    <div class="detail">
      <i class="el-icon-message">出生日期：{{managerData.birthday}}</i>
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
      avatarSrc: '../static/imgs/bcgD.jpg',
      managerData: {
        real_name: '',
        phone: '',
        identity_card_id: '',
        birthday: '',
        profile_photo: '',
        description: '',
        gender: ''
      }
    }
  },

  methods: {

    /*
    * 获取管理员个人信息
    * */
    getManagerData () {
      let _this = this;

      _this.$axios.post('http://' + this.$ip + ':' + this.$port + '/user/sys-user-info/get-info').then(res => {

        if (res.data.code == 0) {

          _this.managerData = res.data.data;

          if (_this.managerData.gender == 1) {
            _this.managerData.gender = '男';
          } else {
            _this.managerData.gender = '女';
          }

        }

      })
    }

  },

  mounted () {
    this.getManagerData();
    this.$nextTick(() => {
      setInterval(this.getManagerData, 600000);
    })

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

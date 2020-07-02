<template>
  <div>
    <div>
      <el-container class="loginBox">
        <div>
          <el-header class="title">{{header}}</el-header>
          <el-container style="width: 500px; margin: 0 auto">
            <h1 class="usernameHeader" for='user'>用户名</h1>
            <el-input id='user' class="input-box" v-model="loginForm.username" placeholder="请输入内容"></el-input>
          </el-container>
          <el-container style="width: 500px; margin: 0 auto">
            <h1 class="usernameHeader">密码</h1>
            <el-input class="input-box" v-model="loginForm.password" placeholder="请输入内容" show-password></el-input>
          </el-container>
          <el-container style="margin-left: 147.5px">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="forget">忘记密码</el-button>
            <el-button type="primary" @click="register">注册新用户</el-button>
          </el-container>
          <div style="font: 20px/24px 'Microsoft YaHei';color: White;margin-top: 15px ;">
            请选择登录身份
            <el-radio-group v-model="radio" fill="#67C23A">
              <el-radio-button label="user" style="color: white;font-weight: bolder"
                               @change="loginHeader1">用户
              </el-radio-button>
              <el-radio-button label="manager" style="color: white; font-weight: bolder"
                               @change="loginHeader2">管理员
              </el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </el-container>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      header: '用户登录',
      radio: 'user',
      loginOrChange: '登录',
      my_cls: 'btn',
      loginForm: {
        account: '',
        password: ''
      },
      info: {},
      name: ''
    }
  },
  methods: {
    loginHeader1 () {
      this.header = '用户登录'
    },
    loginHeader2 () {
      this.header = '管理员登录'
    },
    ...mapMutations(['changeLogin']),
    register () {
      this.$router.push('/register')
    },
    forget () {
      this.$router.push('forget')
    },
    login1 () {
      if (this.radio === 'manager') {
        this.$router.push('/index')
      } else {
        this.$router.push('/userIndex')
      }
    },
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this
      var params = new URLSearchParams()
      params.append('username', this.loginForm.username)
      params.append('password', this.loginForm.password)
      this.$cookies.set('account', this.loginForm.email)
      this.$cookies.set('password', this.loginForm.password)
      axios.post('http://' + this.$ip + ':' + this.$port + '/user/account/login', params).then(res => {
        if (res.data.code === 300100) {
          alert('用户不存在')
        } else if (res.data.code === 300101) {
          alert('密码不正确')
        } else { // 成功
          console.log('登录返回')
          console.log(res)
          console.log('token')
          console.log(res.data.data.token)
          _this.userToken = res.data.data.token
          console.log(_this.userToken)
          // 将用户token保存到vuex中
          _this.changeLogin({token: _this.userToken})
          alert('登陆成功')
          this.$router.push('/Index')
        }
      }).catch(error => {
        alert('账号或密码错误或超时')
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
  .loginBox {
    margin: 300px auto;
    background-color: rgba(64, 158, 255, .3);
    width: 500px;
    height: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 30px
  }

  .title {
    font-weight: 700;
    font: 24px/48px 'Mircrosoft Yahei';
    color: white;
  }

  .usernameHeader {
    text-indent: 1em;
    width: 120px;
    font-weight: bold;
  }

  .input-box {
    width: 300px;
    margin-left: 2em;
    height: 60px;
    display: inline-block;
  }
</style>

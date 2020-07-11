<template style="text-align: center">
  <el-container style="text-align: center">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="真实姓名" prop="real_name">
        <el-col :span="15">
          <el-input v-model="ruleForm.username"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio v-model="ruleForm.gender" label="男">男</el-radio>
        <el-radio v-model="ruleForm.gender" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-col :span="15">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday"
                          format="yyyy 年 MM 月 dd 日"
                          value-format="yyyy-MM-dd"
                          style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="健康状况" prop="description">
        <el-col :span="100">
          <el-input type="textarea" v-model="ruleForm.health_state" :rows="5" maxlength="50" show-word-limit></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>

export default {
  name: 'AddOldMan',

  data () {

    var validate_real_name = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入真实姓名'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    var validate_phone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入电话'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    var validate_birthday = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入生日'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    var validate_gender = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入性别'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    var validate_des = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入身体状况'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    return {

      ruleForm: {
        username: '',
        phone: '',
        birthday: '',
        health_state: '',
        gender: '男'
      },

      rules: {
        username: [
          {validator: validate_real_name, trigger: 'blur'}
        ],
        phone: [
          {validator: validate_phone, trigger: 'blur'}
        ],
        birthday: [
          {validator: validate_birthday, trigger: 'blur'}
        ],
        health_state: [
          {validator: validate_des, trigger: 'blur'}
        ],
        gender: [
          {validator: validate_gender, trigger: 'blur'}
        ]
      }

    }
  },
  methods: {

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 这里写AXIOS 请求， 传修改后的信息
          let _this = this
          let params = new URLSearchParams()
          let gender = 1;
          params.append('username', _this.ruleForm.username)
          params.append('phone', _this.ruleForm.phone)
          params.append('birthday', _this.ruleForm.birthday)
          params.append('health_state', _this.ruleForm.health_state)

          if (_this.ruleForm.gender == '男') {
            gender = 1
          } else {
            gender = 0
          }

          params.append('gender', gender)

          _this.$axios.post('http://' + _this.$ip + ':' + _this.$port + '/user/elder-info/add-info', params).then(res => {
            console.log(res.data)
            if (res.data.code === 0) {

              alert('添加信息成功!刷新页面起效')

            } else {

              alert('添加信息失败！')

            }
          }).catch(error => {

            console.log(error)

          })

        } else {
          alert('填入信息有误')
        }

      })
    },

    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<template style="text-align: center">
  <el-container style="text-align: center">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="真实姓名" prop="real_name">
        <el-col :span="15">
          <el-input v-model="ruleForm.real_name"></el-input>
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
      <el-form-item label="简介" prop="description">
        <el-col :span="200">
          <el-input type="textarea" v-model="ruleForm.description" :rows="9" maxlength="150" show-word-limit></el-input>
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
  name: 'AddVolunteer',

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
        callback(new Error('请输入简介'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    return {

      ruleForm: {
        real_name: '',
        phone: '',
        birthday: '',
        description: '',
        gender: '男'
      },

      rules: {
        real_name: [
          {validator: validate_real_name, trigger: 'blur'}
        ],
        phone: [
          {validator: validate_phone, trigger: 'blur'}
        ],
        birthday: [
          {validator: validate_birthday, trigger: 'blur'}
        ],
        description: [
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
          params.append('real_name', _this.ruleForm.real_name)
          params.append('phone', _this.ruleForm.phone)
          params.append('birthday', _this.ruleForm.birthday)
          params.append('description', _this.ruleForm.birthday)

          if (_this.ruleForm.gender == '男') {
            gender = 1
          } else {
            gender = 0
          }

          params.append('gender', gender)

          _this.$axios.post('http://' + _this.$ip + ':' + _this.$port + '/user/sys-user-info/update-info', params).then(res => {
            console.log(res.data)
            if (res.data.code === 0) {

              alert('个人信息修改成功!刷新页面起效')

            } else {

              alert('个人信息修改失败！')

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
  },

  mounted () { // 个人信息
    axios.post('http://' + this.$ip + ':' + this.$port + '/user/sys-user-info/get-info').then(res => {

      let jsonObj = JSON.parse(JSON.stringify(res.data));

      this.ruleForm.real_name = jsonObj.data.real_name;
      this.ruleForm.phone = jsonObj.data.phone;

    }).catch(error => {
      console.log(error)
    })
  }

}
</script>

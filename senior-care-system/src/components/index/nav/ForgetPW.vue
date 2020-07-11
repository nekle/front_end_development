<template>
  <el-container>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">找回密码</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {

  name: 'ForgetPW',

  data () {
    return {

      dynamicValidateForm: {

        email: ''

      }

    };
  },

  methods: {

    submitForm (formName) {

      this.$refs[formName].validate((valid) => {

        if (valid) {

          let params = new URLSearchParams()
          params.append('email', this.dynamicValidateForm.email)

          this.$axios.post('http://' + this.$ip + ':' + this.$port + '/user/account/findpw', params).then(response => {

            if (response.data.code === 0) {

              alert('密码已经发送到您的邮箱!');

            } else {
              console.log(response)
              console.log('error submit!!');

            }

          })

        } else {

          console.log('error submit!!');
          return false;

        }

      });

    },

    resetForm (formName) {
      this.$refs[formName].resetFields();
    }

  }
}
</script>

<template>
  <el-table
    :border="true"
    :data="tableData"
    :stripe="true"
    style="width: 1750px;height: 850px">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form class="demo-table-expand" inline label-position="left">
          <el-form-item label="管理员姓名">
            <span>{{ props.row.REAL_NAME }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{ props.row.SEX }}</span>
          </el-form-item>
          <el-form-item label="邮箱">
            <span>{{ props.row.EMAIL }}</span>
          </el-form-item>
          <el-form-item label="电话">
            <span>{{ props.row.PHONE }}</span>
          </el-form-item>
          <el-form-item label="移动电话">
            <span>{{ props.row.MOBILE }}</span>
          </el-form-item>
          <el-form-item label="描述">
            <span>{{ props.row.DESCRIPTION }}</span>
          </el-form-item>
          <el-form-item label="是否在职">
            <span>{{ props.row.ISACTIVE }}</span>
          </el-form-item>
          <el-form-item label="创建时间">
            <span>{{ props.row.CREATED }}</span>
          </el-form-item>
          <el-form-item label="创建人">
            <span>{{ props.row.CREATEBY }}</span>
          </el-form-item>
          <el-form-item label="更新时间">
            <span>{{ props.row.UPDATED }}</span>
          </el-form-item>
          <el-form-item label="更新人">
            <span>{{ props.row.UPDATEBY }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      :resizable="false"
      label="ID"
      prop="ID">
    </el-table-column>
    <el-table-column
      label="管理员姓名"
      prop="REAL_NAME">
    </el-table-column>
    <el-table-column
      label="性别"
      prop="SEX">
    </el-table-column>
    <!--    操作按钮-->
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
    >
      <template slot-scope="scope">
        <el-popover
          placement="left"
          width="600"
        >
          <!--          老人信息编辑-->
          <div>
            <el-form :model="editForm" status-icon :rules="editRules" ref="editForm" label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="真实姓名" prop="username">
                <el-col :span="5">
                  <el-input v-model="editForm.username"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
                <el-radio v-model="editForm.gender" label="男"></el-radio>
                <el-radio v-model="editForm.gender" label="女"></el-radio>
              </el-form-item>
              <el-form-item label="电话" prop="phone">
                <el-col :span="15">
                  <el-input v-model="editForm.phone"></el-input>
                </el-col>
              </el-form-item>
            </el-form>
            <div class="editButtons">
              <el-button type="primary" @click="submit(scope.row.ID,'editForm')">保存修改</el-button>
              <el-button type="primary" @click="cancel('editForm')">重置</el-button>
            </div>
          </div>
          <el-button type="primary" slot="reference">
            <i class="el-icon-edit"></i>
          </el-button>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'StaffTable',

  data () {
    return {

      // 编辑框变量
      editForm: {
        username: '',
        gender: '男',
        phone: ''
      },

      // 校验规则
      editRules: {
        username: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请输入性别', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入电话', trigger: 'blur'}
        ]
      },

      tableData: [{
        ID: '1',
        ORG_ID: '',
        CLIENT_ID: '',
        UserName: '',
        Password: '',
        REAL_NAME: '张三',
        SEX: '男',
        EMAIL: '123@qq.com',
        PHONE: '123',
        MOBILE: '123',
        DESCRIPTION: '高级管理员',
        ISACTIVE: '在职',
        CREATED: '2020-01-01',
        CREATEBY: '超级管理员',
        UPDATED: '2020-01-01',
        UPDATEBY: '超级管理员',
        REMOVE: '',
        DATAFILTER: '',
        theme: '',
        defaultpage: '',
        logoimage: '',
        qqopenid: '',
        appversion: '',
        jsonauth: '',
      }, {
        ID: '2',
        ORG_ID: '',
        CLIENT_ID: '',
        UserName: '',
        Password: '',
        REAL_NAME: '李四',
        SEX: '男',
        EMAIL: '123@qq.com',
        PHONE: '123',
        MOBILE: '123',
        DESCRIPTION: '高级管理员',
        ISACTIVE: '在职',
        CREATED: '2020-01-01',
        CREATEBY: '超级管理员',
        UPDATED: '2020-01-01',
        UPDATEBY: '超级管理员',
        REMOVE: '',
        DATAFILTER: '',
        theme: '',
        defaultpage: '',
        logoimage: '',
        qqopenid: '',
        appversion: '',
        jsonauth: '',
      }, {
        ID: '3',
        ORG_ID: '',
        CLIENT_ID: '',
        UserName: '',
        Password: '',
        REAL_NAME: '王五',
        SEX: '男',
        EMAIL: '123@qq.com',
        PHONE: '123',
        MOBILE: '123',
        DESCRIPTION: '高级管理员',
        ISACTIVE: '在职',
        CREATED: '2020-01-01',
        CREATEBY: '超级管理员',
        UPDATED: '2020-01-01',
        UPDATEBY: '超级管理员',
        REMOVE: '',
        DATAFILTER: '',
        theme: '',
        defaultpage: '',
        logoimage: '',
        qqopenid: '',
        appversion: '',
        jsonauth: ''
      }]
    }
  },
  methods: {
    cancel (formName) {
      // this.visible = false
      // console.log(this.visible)
      this.$refs[formName].resetFields();
    },

    submit (ID, formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          let params = new URLSearchParams();
          params.append('id', Number(ID));
          params.append('username', _this.editForm.username);
          params.append('phone', _this.editForm.phone);

          if (_this.editForm.gender === '男')
            params.append('gender', 1)
          else params.append('gender', 0);
          _this.$axios.post('http://' + _this.$ip + ':' + _this.$port + '/user/elder-info/update-info', params).then(res => {
            console.log(res);
            if (res.data.code === 0) {
              alert('修改成功')
              // _this.visible = false
            } else
              alert('修改失败')
          })

        } else {
          alert('请确认所有项目填写完整')
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

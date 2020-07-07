<template>
  <el-table
    :data="tableData"
    style="width: 1750px;height: 850px"
    :stripe="true"
    :border="true">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="义工姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{ props.row.gender }}</span>
          </el-form-item>
          <el-form-item label="电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="身份证">
            <span>{{ props.row.id_card }}</span>
          </el-form-item>
          <el-form-item label="出生日期">
            <span>{{ props.row.birthday }}</span>
          </el-form-item>
          <el-form-item label="访问日期">
            <span>{{ props.row.checkin_date }}</span>
          </el-form-item>
          <el-form-item label="离开日期">
            <span>{{ props.row.checkout_date }}</span>
          </el-form-item>
          <el-form-item label="描述">
            <span>{{ props.row.DESCRIPTION }}</span>
          </el-form-item>
          <el-form-item label="是否在职">
            <span>{{ props.row.ISACTIVE }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="ID"
      prop="id"
      :resizable="false">
    </el-table-column>
    <el-table-column
      label="义工姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="性别"
      prop="gender">
    </el-table-column>
    <el-table-column
      label="身份证"
      prop="id_card">
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
  name: 'VolunteerTable',
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
        id: '1',
        ORG_ID: '',
        CLIENT_ID: '',
        name: '小李',
        gender: '男',
        phone: '123456',
        id_card: '123',
        birthday: '1956-05-05',
        checkin_date: '2020-05-05',
        checkout_date: '2020-05-05',
        imgset_dir: '',
        profile_photo: '',
        DESCRIPTION: '大学生义工',
        ISACTIVE: '在职',
        CREATED: '',
        CREATEBY: '',
        UPDATED: '',
        UPDATEBY: '',
        REMOVE: ''
      }, {
        id: '2',
        ORG_ID: '',
        CLIENT_ID: '',
        name: '小吴',
        gender: '男',
        phone: '123456',
        id_card: '123',
        birthday: '1956-05-05',
        checkin_date: '2020-05-05',
        checkout_date: '2020-05-05',
        imgset_dir: '',
        profile_photo: '',
        DESCRIPTION: '大学生义工',
        ISACTIVE: '在职',
        CREATED: '',
        CREATEBY: '',
        UPDATED: '',
        UPDATEBY: '',
        REMOVE: ''
      }, {
        id: '3',
        ORG_ID: '',
        CLIENT_ID: '',
        name: '小陈',
        gender: '男',
        phone: '123456',
        id_card: '123',
        birthday: '1956-05-05',
        checkin_date: '2020-05-05',
        checkout_date: '2020-05-05',
        imgset_dir: '',
        profile_photo: '',
        DESCRIPTION: '大学生义工',
        ISACTIVE: '在职',
        CREATED: '',
        CREATEBY: '',
        UPDATED: '',
        UPDATEBY: '',
        REMOVE: ''
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
          _this.$axios.post('http://' + _this.$ip + ':' + _this.$port + '/user/volunteer-info/update-info', params).then(res => {
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

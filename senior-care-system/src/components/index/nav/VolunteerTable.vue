<template>
  <el-container direction="vertical">
    <el-container>
      <el-button @click="handleExportItemVolunteer" icon="el-icon-download" type="primary">导出义工信息</el-button>
    </el-container>
    <el-table
      :data="tableData"
      style="width: 1750px;height: 750px"
      :stripe="true"
      :border="true"
      :default-sort="{prop: 'id', order: 'ascending'}"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="义工姓名">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.gender }}</span>
            </el-form-item>
            <el-form-item label="电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="身份证">
              <span>{{ props.row.identity_card_id }}</span>
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
              <span>{{ props.row.description }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="ID"
        prop="id"
        :resizable="false"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="义工姓名"
        prop="username">
      </el-table-column>
      <el-table-column
        label="性别"
        prop="gender">
      </el-table-column>
      <el-table-column
        label="身份证"
        prop="identity_card_id">
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
  </el-container>
</template>

<script>
export default {
  name: 'VolunteerTable',
  data () {
    return {

      exportApiVolunteer: '/user/volunteer-info/export-info?token=eyJ0eX' +
        'AiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6ImxhYi1qd3QifQ.eyJpc3MiOi' +
        'JodHRwOlwvXC9keHh5Y3kuYmp0dS5lZHUuY24iLCJhdWQiOiJodHRwOlwvXC9ke' +
        'Hh5Y3kuYmp0dS5lZHUuY25cL2FkbWluIiwianRpIjoibGFiLWp3dCIsImlhdCI6' +
        'MTU5MzU2NDk4MSwiZXhwIjoxNjE5NDg0OTgxLCJw' +
        'YXlsb2FkIjp7ImlkIjoxLCJ0eXBlIjoiYWRtaW4ifX0.o15VhmuvU6tFkCnGf' +
        'xlb8PeHnL8tUM6VUXz3avcGNKk',


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

      //义工信息
      tableData: []

    }
  },
  methods: {

    // 下载义工信息
    handleExportItemVolunteer () {

      window.location.href = 'http://' + this.$ip + ':' + this.$port + this.exportApiVolunteer

    },

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

          if (_this.editForm.gender === '男') {
            params.append('gender', 1);
          } else {
            params.append('gender', 0);
          }

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

    /*
    * 获取义工信息
    * */
    getVolunteerInfo () {

      let _this = this;

      _this.$axios.post('http://' + _this.$ip + ':' + _this.$port + '/user/volunteer-info/list-info').then(res => {

        if (res.data.code === 0) {

          _this.tableData = res.data.data;
          // console.log(_this.tableData);

          for (let i = 0; i <= _this.tableData.length; i++) {

            // console.log(_this.tableData[i].gender);
            if (_this.tableData[i].gender == 1) {
              _this.tableData[i].gender = '男';
            }

          }

        } else {

          console.log('请求失败')

        }

      }).catch(error => {

          console.log(error)

        }
      );

    },
  },

  mounted () {

    this.getVolunteerInfo()

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

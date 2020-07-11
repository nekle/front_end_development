<template>
  <el-container direction="vertical">
    <el-container>
      <el-button @click="handleExportItem" icon="el-icon-download" type="primary">导出老人信息</el-button>
    </el-container>
    <el-table
      :data="tableData"
      style="width: 1750px;"
      :stripe="true"
      :border="true"
      :default-sort="{prop: 'id', order: 'ascending'}"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="老人姓名">
              <span>{{ props.row.username }}</span>
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
            <el-form-item label="入院日期">
              <span>{{ props.row.checkin_date }}</span>
            </el-form-item>
            <el-form-item label="出院日期">
              <span>{{ props.row.checkout_date }}</span>
            </el-form-item>
            <el-form-item label="房间号">
              <span>{{ props.row.room_number }}</span>
            </el-form-item>
            <el-form-item label="第一监护人">
              <span>{{ props.row.guardianList[0].guardianInfo.name}}</span>
            </el-form-item>
            <el-form-item label="与第一监护人关系">
              <span>{{ props.row.guardianList[0].relation }}</span>
            </el-form-item>
            <el-form-item label="第一监护人电话">
              <span>{{ props.row.guardianList[0].guardianInfo.phone }}</span>
            </el-form-item>
            <el-form-item label="第一监护人微信">
              <span>{{ props.row.guardianList[0].guardianInfo.wechat_openid}}</span>
            </el-form-item>
            <el-form-item label="第二监护人">
              <span>{{ props.row.guardianList[1].guardianInfo.name }}</span>
            </el-form-item>
            <el-form-item label="与第二监护人关系">
              <span>{{ props.row.guardianList[1].relation }}</span>
            </el-form-item>
            <el-form-item label="第二监护人电话">
              <span>{{ props.row.guardianList[1].guardianInfo.phone }}</span>
            </el-form-item>
            <el-form-item label="第二监护人微信">
              <span>{{ props.row.guardianList[1].guardianInfo.wechat_openid }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="ID"
        prop="id"
        width="50"
        :resizable="false"
        :sortable="true"
      >
      </el-table-column>
      <el-table-column
        label="老人姓名"
        prop="username"
        width="100"
      >
      </el-table-column>
      <el-table-column
        label="性别"
        prop="gender"
        width="50"
      >
      </el-table-column>
      <el-table-column
        label="身份证"
        prop="identity_card_id">
      </el-table-column>
      <!--    操作按钮-->
      <el-table-column
        fixed="right"
        label="操作"
        width="230"
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
                <el-button type="primary" @click="submit(scope.row.id,'editForm')">保存修改</el-button>
                <el-button type="primary" @click="cancel('editForm')">重置</el-button>
              </div>
            </div>
            <el-button type="primary" slot="reference" icon="el-icon-edit" style="width: 160px;margin-bottom: 5px">
              修改老人信息
            </el-button>
          </el-popover>
          <el-popover
            placement="right"
            width="600"
            trigger="click">
            <AddGuardian></AddGuardian>
            <el-button slot="reference" type="primary" icon="el-icon-plus" style="width: 160px">添加监护人信息</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>

import AddGuardian from './PersonInfoAdd/AddGuardian';

export default {
  name: 'SeniorTable',

  components: {

    AddGuardian

  },

  data () {
    return {

      exportApi: '/user/elder-info/export-info?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsIm' +
        'p0aSI6ImxhYi1qd3QifQ.eyJpc3MiOiJodHRwOlwvXC9keHh5Y3kuYmp0dS5lZH' +
        'UuY24iLCJhdWQiOiJodHRwOlwvXC9keHh5Y3kuYmp0dS5lZHUuY25cL2FkbWluIiwian' +
        'RpIjoibGFiLWp3dCIsImlhdCI6MTU5MzU2NDk4MSwiZXhwIjoxNjE5NDg0OTgxLCJwYXlsb2' +
        'FkIjp7ImlkIjoxLCJ0eXBlIjoiYWRtaW4ifX0.o15VhmuvU6tFkCnGfxlb8PeHnL8tUM6VUXz3avcGNKk',

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

      //请求到的老人数据
      tableData: [],
    }
  },
  methods: {

    // 下载老人信息
    handleExportItem () {

      window.location.href = 'http://' + this.$ip + ':' + this.$port + this.exportApi

    },

    /*
    * 获取所有老人信息
    * */
    getOldInfo () {

      let _this = this;

      _this.$axios.post('http://' + _this.$ip + ':' + _this.$port + '/user/elder-info/list-info').then(res => {

        if (res.data.code === 0) {

          _this.tableData = res.data.data;

          for (let items of _this.tableData) {

            let arr = Object.keys(items.guardianList[0]);
            let arr1 = Object.keys(items.guardianList[1]);

            if (arr.length > 0) {

            } else {

              items.guardianList[0] = {

                'id': 0,
                'elder_id': 0,
                'relation': '父子',
                'guardian_id': 0,
                'status': 0,
                'create_time': '2020-07-01 16:19',
                'guardianInfo': {
                  'id': 0,
                  'name': '未导入',
                  'email': '123@',
                  'phone': '0',
                  'wechat_openid': '',
                  'status': 1,
                  'create_time': '2020-07-01 16:19',
                  'update_time': '2020-07-01 16:19'

                }

              }

            }

            if (arr1.length > 0) {
            } else {

              items.guardianList[1] = {

                'id': 0,
                'elder_id': 0,
                'relation': '父子',
                'guardian_id': 0,
                'status': 0,
                'create_time': '2020-07-01 16:19',
                'guardianInfo': {
                  'id': 0,
                  'name': '未导入',
                  'email': null,
                  'phone': '0',
                  'wechat_openid': '',
                  'status': 1,
                  'create_time': '2020-07-01 16:19',
                  'update_time': '2020-07-01 16:19'
                }
              }

            }

          }

          for (let i = 0; i <= _this.tableData.length; i++) {

            if (_this.tableData[i].gender == 1) {

              _this.tableData[i].gender = '男';

            }
          }

        } else {
          console.log('获取老人信息失败')
        }

      }).catch(error => {

          console.log(error)

        }
      );

    },

    /*
    * 重置修改表格
    * @params [String] formName 表单的名字
    * */
    cancel (formName) {
      // this.visible = false
      // console.log(this.visible)
      this.$refs[formName].resetFields();
    },

    /*
    * 提交修改的信息
    * @params [String] ID 老人的ID
    * @params [String] formName 表单的名字
    * */
    submit (ID, formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          let params = new URLSearchParams();

          params.append('id', Number(ID));
          params.append('username', String(_this.editForm.username));
          params.append('phone', _this.editForm.phone);

          if (_this.editForm.gender === '男') {
            params.append('gender', 1);
          } else {
            params.append('gender', 0);
          }

          _this.$axios.post('http://' + _this.$ip + ':' + _this.$port + '/user/elder-info/update-info', params).then(res => {

            // console.log(res);

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
    // 获取老人信息

  },

  mounted () {

    this.getOldInfo();

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

  .editButtons {
    width: 400px;
    margin: 0 auto;
  }
</style>

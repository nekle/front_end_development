<template>
  <el-table
    :data="tableData"
    style="width: 1750px;height: 850px"
    :stripe="true"
    :border="true"
    :size="medium">
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
    <el-form-item
      label="身份证"
      prop="id_card">
    </el-form-item>
  </el-table>
</template>

<script>
  export default {
    name: "VolunteerTable",
    data() {
      return {
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

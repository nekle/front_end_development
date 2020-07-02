<template>
  <el-table
    :border="true"
    :data="tableData"
    :size="medium"
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
  </el-table>
</template>

<script>
export default {
  name: 'StaffTable',
  data () {
    return {
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

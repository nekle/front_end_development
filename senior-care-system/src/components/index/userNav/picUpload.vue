<template>
  <div class="upload-info">
    <div>
      <el-upload
        :action=domain
        :data="QiNiuYun"
        ref="uploadPics"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="(file, fileList)=>{return handleRemove(file, fileList, index)}"
        :on-success="(response, file, fileList)=>{return handleSuccess(response, file, fileList, index)}"
        :on-error="uploadError"
        :on-change="addFile"
        :auto-upload="false"
        :show-file-list="true"
        :file-list="fileList">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div>
      <el-button type="primary" :loading="loading" @click="submitUpload">提交</el-button>
      <el-button type="info" plain>取消</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'picUpload',
  data () {
    return {
      dialogImageUrl: '', // 图片预览
      dialogVisible: false, // 图片预览
      disabled: false, // 图片内按钮
      loading: false,
      QiNiuYun: {
        key: '', // 图片名字处理
        token: 'K8S8gdMK3FIyCqmrtNjx4Div9hRSc74jFZtvyup6:CtBRT1uQ6A3wA1PkRu3RuT2XJS0=:eyJzY29wZSI6ImxpY2hlbmd1YW5nZGVxaW5pdXl1biIsImRlYWRsaW5lIjoxNTkzNTcyOTcwfQ==' // 七牛云token
      },
      domain: 'https://upload-z1.qiniup.com', // 七牛云的上传地址（华区）
      qiniuaddr: 'http://qcpsxc7gw.bkt.clouddn.com', // 七牛云的图片外链地址
      uploadPicUrl: '', // 提交到后台图片地址
      fileList: [],
      qiniuURLs: []
    }
  },
  mounted () {
    // this.getQiniuToken();
  },
  methods: {
    addFile (file, fileList) {
      this.fileList = fileList
      console.log(this.fileList)
      this.QiNiuYun.key = `name_${file.name}`
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleRemove (file, fileList) {
      console.log(this.fileList)
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 3 张图片，如需更换，请删除上一张图片在重新选择！`
      )
    },
    beforeAvatarUpload (file) {
      const isPNG = file.type === 'image/png'
      const isJPEG = file.type === 'image/jpeg'
      const isJPG = file.type === 'image/jpg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPNG && !isJPEG && !isJPG) {
        this.$message.error('上传头像图片只能是 jpg、png、jpeg 格式!')
        return false
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
        return false
      }
      this.QiniuData.key = `upload_pic_${file.name}`
    },
    handleSuccess (response, file, fileList) {
      console.log('上传到七牛云成功')
      // console.log(fileList);
      // this.fileList1 = []
      // this.fileList1.push({
      //   name: 'http://' + this.qiniuaddr + '/' + response.key,
      //   url: 'http://' + this.qiniuaddr + '/' + response.key
      // })
      // this.uploadPicUrl = `${this.qiniuaddr}/${response.key}`;
    },
    uploadError (err, file, fileList) {
      this.$message({
        message: '上传出错，请重试！',
        type: 'error',
        center: true
      })
      console.log(err)
      console.log(fileList)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    submitUpload (fileList) {
      this.$refs.uploadPics.submit()
      console.log('文件列表')
      console.log(this.fileList)
    },
    // 提交数据到后台
    handleSubmit () {
      let ajaxData = {
        receipt_img: this.uploadPicUrl // 图片地址
      }
      this.$http.put('/xxx', ajaxData)
        .then(response => {
          let {code, data} = response.data
          if (code === '0') {
            this.$message({
              message: '提交成功！',
              type: 'success',
              center: true
            })
          }
        })
        .catch(error => {
          this.$message({
            message: error.msg,
            type: 'error',
            center: true
          })
        })
    },
    // 请求后台拿七牛云token
    getQiniuToken () {
      axios.get()
        .then(response => {
          let {code, data} = response.data
          if (code === '0') {
            this.QiniuData.token = data
          }
        })
        .catch(error => {
        })
    }
  }
}
</script>

<style scoped>

</style>

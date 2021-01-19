<template>
  <div>
    <el-upload class="upload-demo" ref="upload" accept="image/*" name="image" style="display: inline-block;" action="" :limit="100" :show-file-list="false" :on-change="handleChange" :file-list="fileList" multiple :auto-upload="false">
      <el-button type="primary" plain size="mini" icon="el-icon-plus">上传图片</el-button>
    </el-upload>

  </div>
</template>

<script>
  import SingleUpload from '@/components/Upload/single'
  export default {
    name: 'UploadIndex',
    data() {
      return {
        fileList: [],
        timer: null
      }
    },
    methods: {
      handleChange(file, fileList) {
        console.log(fileList)
        this.fileList = fileList
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.handleUpload()
          clearTimeout(this.timer)
        }, 100)
      },
      handleUpload(data) {
        console.log(data, 'handleUpload')
        const that = this
        SingleUpload(this.fileList.map(file => file.raw), {
          success(res) {
            console.log('成功', res)
          }, // 成功回调
          complete() {
            that.$refs.upload.clearFiles()
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped></style>

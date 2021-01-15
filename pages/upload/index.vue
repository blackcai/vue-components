<template>
  <div>
    <el-upload class="upload-demo" ref="upload" accept="image/*" name="image" style="display: inline-block;" action="" :limit="1" :show-file-list="false" :http-request="handleUpload" :file-list="fileList" multiple>
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
        fileList: []
      }
    },
    methods: {
      handleUpload(data) {
        console.log(data)
        SingleUpload(data.file, {
          success(res) {
            console.log('成功', res)
          }, // 成功回调
        })
      }
    }
  }
</script>

<style lang="scss" scoped></style>

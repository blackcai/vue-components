<template>
  <div class="">
    <el-form :model="form" label-width="100px" size="mini">
      <el-form-item label="模块名称">
        {{ config.moduleName || '分割线' }}
      </el-form-item>
      <el-form-item label="上下边距">
        <el-slider v-model="form.padding"></el-slider>
      </el-form-item>
      <el-form-item label="视频封面">
        <image-list :limit="1"></image-list>
        <div class="image-txt">*用于视频第一帧展示，图片建议尺寸375px*200px</div>
      </el-form-item>
      <el-form-item label="上传视频">
        <video-box></video-box>
        <div class="image-txt">上传视频大小不能超过20MB，视频支付格式：MP4,AVI,mpeg,quicktime</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import ImageList from '../../Upload/ImageList'
  import VideoBox from '../../Upload/video'
  export default {
    name: 'VideoModule',
    components: {
      ImageList, VideoBox
    },
    props: {
      config: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        form: {}
      }
    },
    watch: {
      config: {
        handler() {
          this.form = this.config
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .image-txt{color:#606266;font-size:12px;padding-top:10px;}
</style>

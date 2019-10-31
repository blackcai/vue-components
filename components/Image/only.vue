<template>
  <div class="image-container">
    <div class="image-upload-only">
      <div tabindex="0" class="el-upload el-upload--text" @click="visible = true">
        <img v-if="value" :src="value" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <div class="el-loading-mask" v-if="value">
          <i class="close el-icon-delete" @click.stop="deleted"></i>
        </div>
      </div>
    </div>
    <image-dialog :visible.sync="visible" :limit="1" @change="selectImage" />
  </div>
</template>

<script>
import ImageDialog from '@/components/Image/index.vue'

export default {
  name: 'OnlyImage',
  components: { ImageDialog },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false
    }
  },
  created() {
  },
  methods: {
    deleted() {
      this.$emit('input', '')
    },
    selectImage(item) {
      if (item.length) {
        this.$emit('input', item[0].imgBig)
      }
    }
  }
}
</script>

<style lang="scss">
  .image-upload-only {
     .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
     .el-upload:hover {
       .el-loading-mask{display:block;}
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100px;
      height: 100px;
      display: block;
    }
    .el-loading-mask{display: none;
      .close{position:absolute;z-index:5;left:50%;top:50%;}
    }
  }
</style>
<style scoped lang="scss"></style>

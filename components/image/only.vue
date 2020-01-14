<template>
  <div class="image-container">
    <div class="image-upload-only">
      <div tabindex="0" class="el-upload el-upload--text" @click="visible = true">
        <img v-if="obj && obj[valueProp['value']]" :src="obj[valueProp['value']]" class="avatar" :style="{height: `${size}px`, width: `${size}px`}">
        <i v-else class="el-icon-plus avatar-uploader-icon" :style="{height: `${size}px`, width: `${size}px`, lineHeight: `${size}px`}"></i>
        <div v-if="obj && obj[valueProp['value']]" class="el-loading-mask">
          <i class="close el-icon-delete" @click.stop="deleted"></i>
        </div>
      </div>
    </div>
    <image-dialog :visible.sync="visible" :max="1" @change="selectImage" />
  </div>
</template>

<script>
import ImageDialog from '@/components/image/index.vue'

export default {
  name: 'OnlyImage',
  components: { ImageDialog },
  props: {
    value: {
      type: Number,
      default: null
    },
    image: {
      type: Object,
      default: () => {
        return {}
      }
    },
    valueProp: {
      type: Object,
      default: () => {
        return {
          value: 'src'
        }
      }
    },
    size: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      visible: false,
      obj: null
    }
  },
  created() {
  },
  methods: {
    deleted() {
      this.obj = null
      this.$emit('input', null)
    },
    selectImage(item) {
      if (item.length) {
        this.obj = {
          ...item[0]
        }
        this.$emit('input', item[0].id)
      }
    }
  },
  watch: {
    image(n) {
      if (n.src) {
        this.obj = {
          src: n.src
        }
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
      font-size: 50%;
      color: #8c939d;
      text-align: center;
    }
    .avatar {
      display: block;
    }
    .el-loading-mask{display: none;
      .close{position:absolute;z-index:5;left:50%;top:50%;}
    }
  }
</style>
<style scoped lang="scss"></style>

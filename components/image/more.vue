<template>
  <div class="image-container">
    <div class="image-upload-only">
      <div v-for="(item, index) in imageList" :key="index" class="el-upload el-upload--text">
        <img v-if="item" :src="item.src" class="avatar" :style="{height: `${size}px`, width: `${size}px`}">
        <i v-else class="el-icon-plus avatar-uploader-icon" />
        <div v-if="item" class="el-loading-mask">
          <i class="close el-icon-delete" @click.stop="deleted(index)" />
        </div>
      </div>
      <div class="el-upload el-upload--text" @click="showImageBox" v-if="value.length < max">
        <i class="el-icon-plus avatar-uploader-icon" :style="{height: `${size}px`, width: `${size}px`, lineHeight: `${size}px`}" />
      </div>
      <div class="image-tips">{{ tips }}</div>
    </div>
    <image-dialog :visible.sync="visible" :max="5" @change="selectImage" />
  </div>
</template>

<script>
import ImageDialog from '@/components/image/index.vue'

export default {
  name: 'MoreImage',
  components: { ImageDialog },
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    max: { // 最大的值
      type: Number,
      default: 5
    },
    tips: { // 提示
      type: String,
      default: ''
    },
    image: {
      type: Array,
      default: () => {
        return []
      }
    },
    size: { // 长款一致
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      imageList: [], // 照片列表
      visible: false
    }
  },
  watch: {
    image(n) {
      if (n.length) {
        this.imageList = n
      }
    }
  },
  created() {
    this.imageList = this.image
  },
  methods: {
    // 更新value
    update() {
      const arr = []
      this.imageList.forEach(value => {
        arr.push(value.id)
      })
      this.$emit('input', arr)
      this.$emit('change', this.value)
    },
    // 显示选择图片的框框
    showImageBox(index) {
      this.visible = true
    },
    // 删除图片列表
    deleted(index) {
      this.imageList.splice(index, 1)
      this.update()
    },
    selectImage(item) {
      /*
      * 用户选择图片的回调
      * 判断图片数量
      * 检查是否已经有用该图片，如果没有则插入
      * */
      if (this.imageList.length + item.length > this.max) {
        this.$message.error(`最多可以选择${this.max}张图片`)
        this.visible = true
        return
      }
      if (!item.length) return
      let isRepeat = 0
      item.forEach((value) => {
        if (!this.value.includes(value.id)) {
          this.imageList.push(value)
        } else {
          ++isRepeat
        }
      })
      if (isRepeat) {
        this.$confirm(`有${isRepeat}张图片重复选择，已跳过。`, '提示', {
          showCancelButton: false
        })
      }
      this.update()
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
<style scoped lang="scss">
  .image-tips{color:red;font-size:12px;}
</style>

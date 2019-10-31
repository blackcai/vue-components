<template>
  <div class="image-container">
    <div class="image-upload-only">
      <div v-for="(item, index) in imageList" :key="index" class="el-upload el-upload--text" @click="showImageBox(index)">
        <img v-if="item" :src="item" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" />
        <div v-if="item" class="el-loading-mask">
          <i class="close el-icon-delete" @click.stop="deleted(index)" />
        </div>
      </div>
      <div class="el-upload el-upload--text" @click="showImageBox(imageList.length)">
        <i class="el-icon-plus avatar-uploader-icon" />
      </div>
      <div class="image-tips">{{ tips }}</div>
    </div>
    <image-dialog :visible.sync="visible" :limit="1" @change="selectImage" />
  </div>
</template>

<script>
import ImageDialog from '@/components/Image/index.vue'

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
      default: 100
    },
    wh: { // 功能构想，使用隐式图片dom获得图片的高度和宽度并进行判断
      type: Array,
      default: () => {
        return []
      }
    },
    tips: { // wh的临时替代办法
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imageList: [], // 照片列表
      imageIndex: 0, // 当前选择照片的索引
      visible: false
    }
  },
  watch: {
    value: {
      handler(n, o) {
        if (n.length && !this.imageList.length) {
          // 如果新的值有数据而本地的没有判定为后台获取回来的数据
          this.imageList = n
        }
      },
      deep: true
    }
  },
  created() {
  },
  methods: {
    // 更新value
    update() {
      console.log(this.imageList)
      this.$emit('input', this.imageList)
      this.$emit('change', this.imageList)
    },
    // 显示选择图片的框框
    showImageBox(index) {
      this.imageIndex = index
      this.visible = true
    },
    // 删除图片列表
    deleted(index) {
      this.imageList.splice(index, 1)
      this.update()
    },
    // 选择了图片
    selectImage(item) {
      if (this.imageList === this.max) {
        this.$message.error(`最多可以选择${this.max}张图片`)
        return
      }
      if (item.length) {
        this.imageList[this.imageIndex] = item[0].imgBig
        this.update()
        // this.$emit('input', item[0].imgBig)
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
<style scoped lang="scss">
  .image-tips{color:red;font-size:12px;}
</style>

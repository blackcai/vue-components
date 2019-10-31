<template>
  <div class="image-container">
    <el-button type="primary" size="mini" @click="visible = true">{{ btn }}</el-button>
    <image-dialog :visible.sync="visible" :limit="10" @change="selectImage" />
  </div>
</template>

<script>
import ImageDialog from '@/components/Image/index.vue'

export default {
  name: 'BtnImage',
  components: { ImageDialog },
  props: {
    btn: {
      type: String,
      default: '选择图片'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  watch: {},
  created() {
  },
  methods: {
    // 选择了图片
    selectImage(item) {
      const imageList = []
      item.forEach((value) => {
        imageList.push(value.imgBig)
      })
      this.$emit('change', imageList)
      this.close()
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

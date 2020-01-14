<template>
  <div class="image-container">
    <el-button type="primary" size="mini" @click="visible = true">{{ btn }}</el-button>
    <image-dialog :visible.sync="visible" :max="max" @change="selectImage" />
  </div>
</template>

<script>
import ImageDialog from '@/components/image/index.vue'

export default {
  name: 'BtnImage',
  components: { ImageDialog },
  props: {
    btn: {
      type: String,
      default: '选择图片'
    },
    max: {
      type: Number,
      default: 5
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
      this.$emit('change', item)
    }
  }
}
</script>

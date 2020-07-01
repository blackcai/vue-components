<template>
  <div>
    <custom-detail-module ref="CustomDetail"></custom-detail-module>
    <el-card>
      <el-button type="primary" size="mini" @click="handleGetHtml">获取html</el-button>
      <div class="">这个组件功能拖动部分，引用自 VueDraggable </div>
      <div class="">这个组件功能编辑器部分，引用自 vue-ueditor-wrap </div>
    </el-card>
  </div>
</template>

<script>
  // 自定义详情模块
  export default {
    name: 'DetailModule',
    layout: 'bar',
    components: {
      CustomDetailModule: resolve => {
        return require(['@/components/CustomDetailModule/index.vue'], resolve)
      }
    },
    methods: {
      handleGetHtml() {
        console.log(this.$refs.CustomDetail.getHtml())
      }
    }
  }
</script>

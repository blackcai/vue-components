<template>
  <div>
    <custom-detail-module></custom-detail-module>
    <el-card>
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
    }
  }
</script>

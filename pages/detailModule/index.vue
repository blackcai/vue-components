<template>
  <div>
    <custom-detail-module></custom-detail-module>
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

<template>
  <div class="divider-views" :style="{ padding: `${config.padding}px 0`}">
    <el-divider></el-divider>
  </div>
</template>

<script>
  export default {
    name: 'DividerModule',
    props: {
      config: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .divider-views {
    /deep/ .el-divider--horizontal {margin:0;}
  }

</style>

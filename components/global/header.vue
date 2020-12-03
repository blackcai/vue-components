<template>
  <el-row class="header">
    <el-col :span="12" class="text-left">
      <el-link href="/" type="primary" v-if="$route.path !== '/'">返回首页</el-link>
      <span v-else>小组件</span>
    </el-col>
    <el-col :span="12" class="text-right">
      <el-link type="primary" href="https://gitee.com/mymcode/vue-component">gitee</el-link>
      <el-link type="primary" href="https://github.com/blackcai/vue-components">github</el-link>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style scoped lang="scss">
  .header{padding:20px;
    border-bottom:#eee 1px solid;
  }
</style>

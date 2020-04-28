<template>
  <div class="">
    <el-form :model="form" label-width="100px" size="mini">
      <el-form-item label="模块名称">
        {{ config.moduleName || '辅助空白' }}
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="form.backgroundColor" size='small'></el-color-picker>
      </el-form-item>
      <el-form-item label="组件高度">
        <el-slider v-model="form.height" :min="1"></el-slider>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'BlankModule',
    props: {
      config: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        form: {}
      }
    },
    watch: {
      config: {
        handler() {
          this.form = this.config
        },
        deep: true
      }
    },
    created() {
      this.form = this.config
    }
  }
</script>

<style scoped lang="scss"></style>

<template>
  <div class="">
    <el-form :model="form" label-width="100px" size="mini">
      <el-form-item label="模块名称">
        {{ config.moduleName || '分割线' }}
      </el-form-item>
      <el-form-item label="上下边距">
        <el-slider v-model="form.padding"></el-slider>
      </el-form-item>
    </el-form>
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

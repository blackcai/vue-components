<template>
  <div class="">
    <el-form :model="form" label-width="100px" size="mini">
      <el-form-item label="模块名称">
        {{ config.moduleName || '标题' }}
      </el-form-item>
      <el-form-item label="标题名称">
        <el-input v-model="form.value" type="text" placeholder="请输入标题名称" />
      </el-form-item>
      <el-form-item label="显示样式">
        <el-radio-group v-model="form.style">
          <el-radio label="1">样式一</el-radio>
          <el-radio label="2">样式二</el-radio>
          <el-radio label="3">样式三</el-radio>
          <el-radio label="4">样式四</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="显示方式">
        <el-radio-group v-model="form.align">
          <el-radio label="left">居左</el-radio>
          <el-radio label="center">居中</el-radio>
          <el-radio label="right">居右</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上下边距">
        <el-slider v-model="form.padding"></el-slider>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="form.backgroundColor" size='small'></el-color-picker>
      </el-form-item>
      <el-form-item label="文字颜色">
        <el-color-picker v-model="form.textColor" size='small'></el-color-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'TitleModule',
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

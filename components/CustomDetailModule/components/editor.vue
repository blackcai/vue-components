<template>
  <div class="">
    <el-form :model="form" label-width="100px" size="mini">
      <el-form-item label="模块名称">
        {{ config.moduleName || '富文本' }}
      </el-form-item>
      <el-form-item label="上下边距">
        <el-slider v-model="form.padding"></el-slider>
      </el-form-item>
      <el-form-item label="内容编辑">
        <u-editor v-model="form.value" :config="editorConfig"></u-editor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import UEditor from '../../UEditor/index'
  export default {
    name: 'EditorModule',
    components: {
      UEditor
    },
    props: {
      config: {
        type: Object,
        default: () => {
          return {}
        }
      },
      editorConfig: {
        initialFrameWidth: 1000, // 初始化编辑器宽度,默认1000
        initialFrameHeight: 320 // 初始化编辑器高度,默认320
      }
    },
    data() {
      return {
        form: {
          value: ''
        }
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
    },
    beforeDestroy() {}
  }
</script>

<style scoped lang="scss"></style>

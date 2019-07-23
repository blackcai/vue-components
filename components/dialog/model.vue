<template>
  <custom-dialog :title="dialogState ? '添加' : '修改'" :visible.sync="dialogVisible" auto-height>
    <div class="content"></div>
    <template slot="footer">
      <el-button type="default" size="mini" class="admin-btn admin-btn-primary">保存</el-button>
      <el-button type="default" size="mini" class="admin-btn admin-btn-grey">取消</el-button>
    </template>
  </custom-dialog>
</template>

<script>
  export default {
    name: 'Dialog',
    data() {
      return {
        dialogVisible: false,
        formInfo: {}
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      dialogState: {
        type: Boolean,
        default: false
      },
      formInfo: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    created() {
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList
      },
      formDetail() {
        // 处理弹窗信息
        this.reset()
        this.dialogVisible = this.visible
        if (!this.dialogState) {
          this.formItem = {
            ...this.formInfo
          }
        }
        this.getCate()
      },
      hide() {
        // 关闭弹窗
        this.dialogVisible = false
        this.$emit('update:visible', false)
      },
      close() {
        this.dialogVisible = false
        this.$emit('update:visible', false)
      },
      reset() {
        this.formItem = {}
      }
    },
    components: {},
    watch: {
      visible(news) {
        if (news) {
          this.formDetail()
        }
      },
      dialogVisible(news) {
        if (!news) {
          this.close()
        }
      }
    }
  }
</script>

<style scoped lang="scss"></style>

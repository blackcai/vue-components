<template>
  <transition name="dialog-fade">
    <div class="custom-dialog-wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div class="custom-dialog" ref="dialog" :class="{'custom-dialog-center': center}" :style="{ 'width': width }">
        <div class="dialog-nav" v-show="title">
          <p class="dialog-title">
            <slot name="title">
              <span class="dialog-title-content">{{title}}</span>
            </slot>
          </p>
        </div>
        <el-button typd="default" class="close-icon"v-if="showClose" @click="handleClose">
          <i class="el-icon-close"></i>
        </el-button>
        <div class="dialog-absolute">
          <div class="dialog-content" ref="dialogContent" v-show="content">
            <slot>
            </slot>
          </div>
        </div>
        <div class="dialog-footer" v-show="footer">
          <div class="dialog-footer-content">
            <slot name="footer">
                <el-button type="default" class="admin-btn admin-btn-grey" size="mini" @click="handleClose">关闭</el-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  // import Popup from 'element-ui/src/utils/popup'

  export default {
    name: 'Dialog',
    props: {
      title: {
        type: String,
        default: '标题'
      },
      header: {
        type: Boolean,
        default: true
      },
      content: {
        type: Boolean,
        default: true
      },
      footer: {
        type: Boolean,
        default: false
      },
      showClose: {
        type: Boolean,
        default: true
      },
      appendToBody: { // 插入到body中
        type: Boolean,
        default: true
      },
      closeOnClickModal: { // 点击背景关闭
        type: Boolean,
        default: false
      },
      beforeClose: Function, // 关闭之前
      visible: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '750px'
      }
    },
    data() {
      return {
        closed: false,
        height: '400px'
      }
    },
    methods: {
      getMigratingConfig() {
        return {
          props: {
            'size': 'size is removed.'
          }
        }
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal) return
        this.handleClose()
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide)
        } else {
          this.hide()
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false)
          this.$emit('close')
          this.closed = true
        }
      },
      updatePopper() {
        // this.broadcast('ElSelectDropdown', 'updatePopper')
        // this.broadcast('ElDropdownMenu', 'updatePopper')
      },
      getScroll() {
        const height = this.$refs.dialogContent.children[0].clientHeight
        if (height <= 420) {
          this.changeHeight(height)
        }
      },
      changeHeight(val) {
        if (val <= 120) {
          this.height = '250px'
        } else {
          this.height = `${val + 140}px`
        }
      }
    },
    components: {
      // Popup
    },
    watch: {
      visible(val) {
        if (val) {
          this.closed = false
          this.$emit('open')
          this.$el.addEventListener('scroll', this.updatePopper)
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0
          })
          if (this.appendToBody) {
            document.body.appendChild(this.$el)
          }
          document.body.style.overflow = 'hidden'
          this.$nextTick(() => {
            if (this.autoHeight) {
              this.getScroll()
            }
          })
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper)
          if (!this.closed) this.$emit('close')
          document.body.style.overflow = ''
        }
      }
    },
    mounted() {
      if (this.visible) {
        // this.open()
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      }
    }
  }
</script>

<style lang="scss">
  .custom-dialog-wrapper{
    .custom-dialog{
      .dialog-content{
        .el-form-item.el-form-item--mini{margin-bottom:12px;}
      }
    }
  }
</style>
<style lang="scss" scoped>
  .custom-dialog-wrapper{background:rgba(0,0,0,.6);height:100%;position:fixed;width:100%;top:0;left:0;z-index:2000;overflow: auto;
    .custom-dialog{background:#fff;margin:15vh auto 0 auto;position:relative;border-radius:2px;
      .dialog-nav{height:75px;background:none;font-size:14px;line-height: 40px;text-indent: 10px;z-index:2;width:100%;top:0;
        .dialog-title{text-align: center;line-height:100px;
          .dialog-title-content{color:#000;font-size:24px;}
        }
      }
      .close-icon{background:#fff; border:none;border-radius:100px; font-size:14px;color:#000;position:absolute;padding:5px;right:-10px;top:-10px;z-index:10000;}
      .dialog-absolute{top:40px;bottom:40px;width:100%;
       .dialog-content{padding:20px;height:100%;position:relative;background:#fdfdfd;
       }
      }
      .dialog-footer{position:absolute;background:#fff;z-index:2;width:100%;bottom:0;left:0;height:40px;border-top:1px solid #edf2f6;line-height:35px;box-shadow:0 0 10px rgba(0,0,0,0.1);
        .dialog-footer-content{text-align: center;padding:0 10px;}
      }
      &.custom-dialog-center{text-align: center}
    }
  }
  .custom-dialog-wrapper-temp{background:rgba(0,0,0,.6);height:100%;position:fixed;width:100%;top:0;left:0;z-index:2000;overflow: auto;
    .custom-dialog{width:750px;height:auto;background:#fff;margin:15vh auto 0 auto;position:relative;overflow: hidden;border-radius:2px;
      .dialog-nav{height:40px;background:#325280;font-size:14px;line-height: 40px;text-indent: 10px;position:relative;z-index:2;
        .dialog-title{
          .dialog-title-content{color:#fff;}
        }
        .close-icon{background:none; border:none; color:#fff;position:absolute;right:0;top:0;}
      }
      .dialog-content{padding:20px;margin-bottom:40px;}
      .dialog-footer{position:absolute;background:#fff;box-shadow:0 0 5px rgba(0,0,0,0.3);z-index:2;width:100%;bottom:0;left:0;height:40px;border-top:1px solid #edf2f6;line-height:35px;
        .dialog-footer-content{text-align: right;padding:0 10px;}
      }
      &.custom-dialog-center{text-align: center}
    }
  }
</style>

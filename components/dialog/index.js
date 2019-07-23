import DialogComponent from './index.vue'

const CustomDialog = {
  install: function(Vue) {
    Vue.component('CustomDialog', DialogComponent)
  }
}

export default CustomDialog

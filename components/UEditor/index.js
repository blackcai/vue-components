import UEditor from './components/vue-ueditor-wrap.vue'

UEditor.install = function(Vue) {
  Vue.component(UEditor.name, UEditor)
}

export default UEditor

import Vue from 'vue'

export function fn() {
  console.log('你调用了什么鬼')
}
const filters = {
  fn
}

export default filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

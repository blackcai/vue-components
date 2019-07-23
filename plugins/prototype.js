import Vue from 'vue'
import { Message } from 'element-ui'
export default () => {
  Vue.prototype.isDevelop = (name) => { // 功能正在开发中提示
    Message.warning(`${ typeof name === 'object' ? '' : name}功能正在开发中……`)
  }
}

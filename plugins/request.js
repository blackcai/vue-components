import axios from 'axios'
import { Loading } from 'element-ui'
const requestItem = {
  store: null,
  loading: null, // loading显示
  second: 0, // 计算时间
  timer: null // 计时器
}
export default function({ app, store }) {
  requestItem.store = store
  const loadClose = () => {
    if (requestItem.store.getters.loading) {
      // 检测是否已经显示了加载按钮超过时间
      const times = setInterval(() => {
        if (requestItem.second > 0.2) {
          requestItem.second = 0
          clearInterval(times)
          clearInterval(times)
          // 处理loading层的回归
          requestItem.store.dispatch('ChangeLoading')
          requestItem.loading.close()
        }
      }, 200)
    }
  }
  // create an axios instance
  const service = axios.create({
    baseURL: '', // api的base_url
    timeout: 30000 // request timeout
  })

  // request interceptor
  service.interceptors.request.use(
    config => {
      store.dispatch('ChangeRequest', true)
      if (requestItem.store.getters.loading) {
        requestItem.timer = setInterval(() => {
          requestItem.second = requestItem.second + 0.1
        }, 200)
        requestItem.loading = Loading.service({
          lock: false,
          text: '',
          customClass: 'el-icon-tc-loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0)'
        })
      }
      // Do something before request is sent
      if (requestItem.store.getters.token) {
        config.headers['http-token'] = `${requestItem.store.getters.token}` // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      }
      return config
    },
    error => {
      loadClose()
      requestItem.store.dispatch('ChangeRequest', false)
      // Do something with request error
      Promise.reject(error)
    }
  )

  // respone interceptor
  service.interceptors.response.use(
    response => {
      loadClose()
      requestItem.store.dispatch('ChangeRequest', false)
      return response.data
    },
    error => {
      loadClose()
      requestItem.store.dispatch('ChangeRequest', false)
      if (error.response && error.response.status === 401) {
        // 401未登录，需要登录。
        requestItem.store.dispatch('LoginStatus', 'qrcode')
        requestItem.store.dispatch('clearInfo')
        return Promise.reject(error)
      }
      return Promise.reject(error)
    }
  )
  window.$request = service
}

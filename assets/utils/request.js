import axios from 'axios'
import { Notification } from 'element-ui'
import store from '@/store'
import { getToken } from '@/assets/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    console.log(store().getters.token, 'request')
    if (store().getters.token) {
      config.headers['http-token'] = `${store().getters.token}` // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    if (response.data && response.data.code !== 200) {
      Notification({
        title: ' 错误提示',
        message: response.data.msg,
        type: 'error',
        duration: 2000
      })
      return
    }
    if (response.config.method !== 'get') {
      Notification({
        title: '成功提示',
        message: response.data.msg,
        type: 'success',
        duration: 2000
      })
    }
    return response.data
  },
  error => {
    console.log(error)
    Notification({
      title: '错误提示',
      message: error.response.data.msg,
      type: 'error',
      duration: 2000
    })
    return Promise.reject(error)
  }
)

export default service

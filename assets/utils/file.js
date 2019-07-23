import axios from 'axios'
import { Loading, Notification } from 'element-ui'
// import store from '@/store'
import { getToken, refreshToken } from '@/assets/utils/auth'

let loadingInstance
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 * 10 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      background: 'rgba(0,0,0,0)'
    })
    // Do something before request is sent
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = 'bearer ' + getToken()
    }
    // refreshToken() // 刷新cookie
    return config
  },
  error => {
    loadingInstance.close()
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    loadingInstance.close()
    if (response.data && response.data.code) {
      if (response.data.code === 200) {
        Notification({
          title: '成功提示',
          message: response.data.message,
          type: 'success',
          duration: 3000
        })
      } else if (response.data.code === 500) {
        Notification({
          title: '错误提示',
          dangerouslyUseHTMLString: true,
          message: response.data.message,
          type: 'error',
          duration: 5000
        })
        return Promise.reject('error')
      } else {
        Notification({
          title: '错误提示',
          dangerouslyUseHTMLString: true,
          message: response.data.message,
          type: 'warning',
          duration: 5000
        })
        return Promise.reject('error')
      }
    } else {
      return response
    }
  },
  error => {
    console.log(error.response)
    loadingInstance.close()
    if (error.response.status === 401) {
      Notification({
        title: '错误提示',
        message: error.response.data.message,
        type: 'error',
        duration: 3000
      })
    } else {
      Notification({
        title: '错误提示',
        message: error.response.data.message,
        type: 'error',
        duration: 3000
      })
    }
    return error
    // return Promise.reject(error)
  }
)

export default service

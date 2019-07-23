import { getToken } from '~/assets/utils/auth'
import Vue from 'vue'
// 路由检测中间件
export default function({ route, redirect, store }) {
  if (process.client) {
    // 需要登录的界面判断是否已经加载了个人信息
    let redirectURL = '/login'
    let token, path
    // 在服务端
    // if (isServer) {
    //   const cookies = getcookiesInServer(req)
    //   path = req.originalUrl
    //   token = cookies.token ? cookies.token : ''
    // }
    // 在客户端判读是否需要登录
    token = getToken()
    console.log(token, 'userAuth')
    path = route.path
    if (path) {
      redirectURL = '/login' // ?ref=' + encodeURIComponent(path)
    }
    // 需要进行权限判断的页面开头 // 登录完成跳转回到页面
    if (!token) {
      redirect({ path: redirectURL, query: { callback: route.path } })
    }
  }
}

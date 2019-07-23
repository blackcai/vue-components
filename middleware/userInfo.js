import { getToken } from '@/assets/utils/auth'
// 路由检测中间件
export default function({ route, redirect, store }) {
  if (getToken()) {
    if (!Object.keys(store.getters.userInfo).length) {
      store.dispatch('getUserInfo')
    }
    if (!Object.keys(store.getters.accountInfo).length) {
      store.dispatch('getAccountInfo')
    }
  }
}

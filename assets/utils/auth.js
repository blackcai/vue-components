import Cookies from 'js-cookie'
import { evil } from './validate'
const TokenKey = 'auth-cache'
const millisecond = () => {
  return new Date().getTime()
}
const expiresTime = (d) => {
  const day = d ? d : 1
  return new Date(millisecond() + 60 * 1000 * 60 * 24 * day)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, time, day) {
  if (time) {
    return Cookies.set(TokenKey, token, { expires: expiresTime(day) })
  } else {
    return Cookies.set(TokenKey, token)
  }
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function refreshToken(time, day) {
  const cookieValue = Cookies.get(TokenKey)
  if (time) {
    Cookies.set(TokenKey, cookieValue, { expires: expiresTime(day) })
  } else {
    Cookies.set(TokenKey, cookieValue)
  }
}

export function setLocal(info, name) {
  return localStorage.setItem(name || TokenKey, JSON.stringify(info))
}
export function getLocal(name) {
  return evil(localStorage.getItem(name || TokenKey))
}
export function removeLocal(name) {
  return localStorage.removeItem(name || TokenKey)
}
export function clearLocal() {
  return localStorage.clear()
}

export function setSession(info, name) {
  if (!name || name === TokenKey) {
    setToken(info)
  }
  return sessionStorage.setItem(name || TokenKey, JSON.stringify(info))
}
export function getSession(name) {
  return evil(sessionStorage.getItem(name || TokenKey))
}
export function removeSession(name) {
  if (!name || name === TokenKey) {
    removeToken(name)
  }
  return sessionStorage.removeItem(name || TokenKey)
}
export function clearSession(status) {
  if (status) { // 如果要清楚cookie
    removeToken()
  }
  return sessionStorage.clear()
}

// 获取服务端cookie
export function getcookiesInServer(req) {
  const service_cookie = {}
  req && req.headers.cookie && req.headers.cookie.split(';').forEach((val) => {
    const parts = val.split('=')
    service_cookie[parts[0].trim()] = (parts[1] || '').trim()
  })
  return service_cookie
}
// 获取客户端cookie
export function getcookiesInClient(key) {
  return Cookies.get(key) ? Cookies.get(key) : ''
}

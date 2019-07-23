/**
 *@prettier
 */
/**
 * @format
 * */

import reg from './regular'
export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

export function isNumber(str) {
  const reg = /^[0-9]+.?[0-9]*$/
  return reg.test(str)
}

export function isIdCard(rule, value, callback) {
  // const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
  if (value === '') {
    callback()
  }
  if (!reg.idCard.test(value)) {
    callback(new Error('请输入正确的身份证号码'))
  } else {
    callback()
  }
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function evil(fn) {
  const Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
  return new Fn(`return ${fn}`)()
}

// form validate
export function phoneNumber(rule, value, callback) {
  if (value === '') {
    callback()
    return
  }
  if (!(reg.phone.test(value) || reg.tel.test(value))) {
    callback(new Error('请输入正确的电话号码'))
  } else {
    callback()
  }
}

export function mobile(rule, value, callback) {
  if (!reg.phone.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

export function plane(rule, value, callback) {
  if (!reg.tel.test(value)) {
    callback(new Error('请输入正确的座机号码'))
  } else {
    callback()
  }
}

// check tel and plane
export function phone1(rule, value, callback) {
  if (!reg.phone1.test(value)) {
    callback(new Error('请输入正确的电话号码'))
  } else {
    callback()
  }
}

export function tel1(rule, value, callback) {
  if (!reg.tel1.test(value)) {
    callback(new Error('请输入正确的电话号码'))
  } else {
    callback()
  }
}

export function isMoney(rule, value, callback) {
  if (!reg.isMoney.test(value)) {
    callback(new Error('请输入数字'))
  } else {
    callback()
  }
}

// obj is not empty
export function isEmpty(obj) {
  for (const i in obj) {
    return true
  }
  return false
}

export function password(rule, value, callback) {
  if (value.length < 6 || value.length > 16) {
    callback(new Error("密码位数为6-16，必须包含数字、字母、特殊符号(~!@#$%^&*()_+|<>,.?/:;'[]{}\\)"))
  }
  const number = /^.*\d+.*$/
  const letter = /^.*[a-zA-Z]+.*$/
  const other = /^.*[~!@#$%^&*()_+|<>,.?/:;'\[\]{}\"]+.*$/
  if (number.test(value) && letter.test(value) && other.test(value)) {
    callback()
  } else {
    callback(new Error("密码位数为6-16，必须包含数字、字母、特殊符号(~!@#$%^&*()_+|<>,.?/:;'[]{}\\)"))
  }
}

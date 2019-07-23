import fileSaver from 'file-saver'
import { formatDate } from './date'

/*
* data 文件数据流
* name 名称
* type 类型
* suf 后缀
* time 文件添加时间
* */

export function saver({ data, name, type, suf = '', time = true } = {}) {
  let timer = ''
  if (time) {
    const date = new Date()
    timer = formatDate(date, 'yyyy-MM-dd')
  }
  const blob = new Blob([data], { type: type || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  const fileName = `${name}${time ? timer : ''}${suf ? `.${suf}` : ''}`
  fileSaver.saveAs(blob, fileName)
}

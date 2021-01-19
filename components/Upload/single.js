/**
 * 单个文件上传调用
 * 通常在使用中，我们都希望能够封装一个完整的上传，包括弹出提示信息，但是根据框架的不同，也会导致提示的方法调用差异
 * 这里用 element ui 的 loading 进行演示
 * */


import FileUpload from './Upload'
import { Loading } from 'element-ui'

const singleUpload = (files, options) => {
  const uploader = new FileUpload()
  let loadingProcess = null
  const processRun = (time) => {
    if (loadingProcess) {
      loadingProcess.setText(time === 100 ? '处理中……' : `${time}%`)
    } else {
      loadingProcess = Loading.service({
        background: 'rgba(0,0,0,0.4)',
        spinner: 'el-icon-loading',
        text: `${time}%`
      })
    }
  }
  uploader.upload(files, {
    ...options,
    progress(progress) {
      processRun(progress.loaded / progress.total * 100 | 0)
      console.log('progress', progress)
    }, // 文件传输进度
    fail(e) {
      console.log('fail', e)
    }, // 失败回调
    complete() {
      loadingProcess && loadingProcess.close()
      options.complete && options.complete()
    } // 调用完成
  })
  
}

export default singleUpload

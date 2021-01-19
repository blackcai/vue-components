/**
 * 文件上传
 * 验证类型、大小、宽高（图片）
 * 默认参数中的 request 需要自行配置
 * 在使用过程中，注意修改一下信息
 * options.request
 * this._getImageBaseInfo 中 获取 url 文件的 key 名
 * this._createFormData 文件组装
 * */

import extend from '../extend/index'

class FileUpload {
  constructor() {
    this.name = 'FileUpload'
    this.options = { // 默认的配置信息
      type: 'any', // 上传文件的类型，如果是 any 则不验证文件类型
      max: 0, // 允许最大内存，单位 M // 为 0 不验证
      accept: '', // 允许文件类型，请注意用 | 隔开
      request: { // 请求地址配置
        url: 'http://lab.myweb.com/api/upload'
      },
      image: {
        validate: true, // 当 type 为 image 的时候，默认需要验证
        precision: true, // 精度 true 表示精准，false 表示范围
        width: 0, // 当精准的时候，只用这个，如果是范围，则表示最小宽度
        height: 0, // 当精准的时候，只用这个，如果是范围，则表示最小高度
        maxWidth: 0,
        maxHeight: 0,
        result: false // 是否需要获取图片的信息，如宽高等
      },
      /**
       * 当为 false 的时候，不做验证
       * 需要验证的类型：类型、大小、宽高
       * 当 type 为 image 的时候 wh 将会生效，否则被忽略
       * */
      validate: ['type', 'size', 'wh'],
      success: null, // 成功回调
      progress: null, // 文件传输进度
      fail: null, // 失败回调
      complete: null // 调用完成
    }
    // 预设的文件配置方案，以 this.options.accept 优先
    this.fileConfig = {
      any: {
        desc: '文件'
      },
      image: {
        desc: '图片',
        accept: 'jpeg|jpg|png|gif'
      },
      video: {
        desc: '视频',
        accept: 'mp4|avi|mkv|mov|3gp|wmv|mpg|vob|flv'
      },
      audio: {
        desc: '音频',
        accept: 'mp3|wav'
      },
      file: {
        desc: '文件',
        accept: 'xlsx|xltx|xlsm|xls|csv|pdf|docx|dotx|dotm|docm|doc|sheet'
      }
    }
  }
  async _validate(file) {
    /**
     * 验证文件信息
     * 如果是 false，直接通过验证
     * */
    if (!this.options.validate) return true
    /**
     * 是否需要验证文件类型
     * any 不验证
     * */
    if (this.options.type !== 'any' && this.options.validate.includes('type')) {
      if (!this._validateType(file)) return
    }
    // 是否需要验证文件类型
    if (this.options.validate.includes('size')) {
      if (!this._validateSize(file)) return
    }
    /**
     * 是否需要验证文件类型
     * type 不为 image 不做验证
     * */
    if (this.type === 'image' && this.image.image && this.options.validate.includes('wh')) {
      if (!await this._validateWidthAndHeight(file)) {
        return
      }
    }
    return true
  }
  _validateType(file) {
    // 验证文件类型
    const { accept, desc } = this.fileConfig[this.options.type]
    const regexp = new RegExp(`.(${this.options.accept || accept})$`)
    if (!regexp.test(file.name.toLowerCase())) {
      // 如果验证不通过则直接报错
      this._callback('fail', {
        type: 'validate',
        message: `只允许上传${this.options.accept || accept}格式的${desc}`
      })
      return false
    }
    return true
  }
  _validateSize(file) {
    // 验证文件大小
    const { desc } = this.fileConfig[this.options.type]
    if (this.options.max !== 0 && file.size / 1024 / 1024 > this.options.max) {
      this._callback('fail', {
        type: 'validate',
        message: `上传${desc}大小不能超过${this.options.max}MB`
      })
      return false
    }
    return true
  }
  async _validateWidthAndHeight(file) {
    /**
     * 验证图片的长宽
     * 精准验证的时候只需要验证默认宽高
     * 如果验证范围，则需要判断最低值和最高值，如果是 0 则不做判断，如 width 为 0，则只需要验证最大宽度而不验证最小宽度
     * */
    const { precision, width, height, maxWidth, maxHeight } = this.options.image
    const fileInfo = await this._getImageBaseInfo(file, 'file')
    if (precision) {
      if (width !== fileInfo.width || height !== fileInfo.height) {
        this._callback('fail', {
          type: 'validate',
          message: `请确保上传图片尺寸为${width}*${height}`
        })
        return false
      }
      return true
    } else {
      // 验证顺序：最小宽度、最大宽度、最小高度、最大高度
      if ((width && fileInfo.width < width) || (maxWidth && fileInfo.maxWidth > maxWidth) || (height && fileInfo.height < height) || (maxHeight && fileInfo.maxHeight > maxHeight)) {
        this._callback('fail', {
          type: 'validate',
          message: `上传图片尺寸${width ? `【最小宽度为：${width}】` : ''}${height ? `【最小高度为：${height}】` : ''}${maxWidth ? `【最大宽度为：${maxWidth}】` : ''}${maxHeight ? `【最大高度为：${maxHeight}】` : ''}`
        })
        return false
      }
    }
    return true
  }
  _createFormData(files) {
    /**
     * 创建表单信息
     * 参数根据自身需要设置
     * */
    const isMultiple = this.getType(files) === '[object Array]'
    const formData = new FormData()
    if (isMultiple) {
      files.forEach((file, index) => {
        formData.append(`file[${index}]`, file)
      })
    } else {
      formData.append('file[0]', files)
    }
    return formData
  }
  _getImageBaseInfo(file, type = 'url') {
    /*
    * 获取文件的基本信息，宽、高
    * file 文件
    * type 获取文件的类型 url 代表网址，file 代表文件
    * */
    return new Promise(resolve => {
      if (type === 'url') {
        const img = new Image()
        img.src = file.src
        img.onload = () => {
          resolve({
            ...file,
            width: img.width,
            height: img.height
          })
        }
      } else {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(res) {
          let image = new Image()
          image.src = res.target.result
          image.onload = function() {
            resolve({
              file,
              width: this.width,
              height: this.height
            })
          }
        }
      }
    })
  }
  _callback(name, result) {
    // 回调的调用方法
    console.log('callback', name, result)
    if (this.options[name]) {
      this.options[name](result)
    }
    name !== 'progress' && this.options.complete && this.options.complete()
  }
  _request(file) {
    // 上传方法
    return $request({
      url: this.options.request.url,
      method: 'post',
      data: file,
      onUploadProgress: progressEvents => {
        // 在这里返回文件的上传状态
        this._callback('progress', progressEvents)
      }
    })
  }
  getType(value) {
    return Object.prototype.toString.call(value)
  }
  async _start(files, options) {
    // 上传方法
    // 如果有信息就合并
    if (Object.keys(options).length) {
      this.options = extend(this.options, options)
    }
    const isMultiple = this.getType(files) === '[object Array]'
    let isValidate = true // 是否验证通过
    // 如果是多文件，需要循环验证文件信息
    if (isMultiple) {
      for (let i = 0; i < files.length; i++) {
        if (!await this._validate(files[i])) {
          isValidate = false
          break
        }
      }
    } else {
      isValidate = await this._validate(files)
    }
    // 对文件进行验证
    if (isValidate) {
      // 组装表单
      const formData = this._createFormData(files)
      // 接口调用
      this._request(formData).then(res => {
        if (res.code === 200) {
          /**
           * 这里根据具体需求调用 _getImageBaseInfo
           * 如果不需要获取文件的宽高信息，直接调用 _callback
           * */
          if (this.options.success && this.type === 'image') {
            this._getImageBaseInfo(res.data).then(result => {
              this._callback('success', result)
            })
          } else {
            this._callback('success', res)
          }
        } else {
          this._callback('fail', res)
        }
      }).catch(e => {
        // 失败后调用回调
        this._callback('fail', e)
      })
    }
  }
  upload(file, options) {
    this._start(file, options).then(res => {
      console.log('_start running', res)
    })
  }
}

export default FileUpload

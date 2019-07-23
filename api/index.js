import request from '@/assets/utils/request'

export function defaultApi() {
  return request({
    url: '',
    method: 'post',
  })
}

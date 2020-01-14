// 文件分类

export function getGroup({ page = 1, size = 10 } = {}) {
  return $request({
    url: '/upload/group',
    params: {
      page: page || 1,
      size: size || 10
    }
  })
}

// 保存
export function saveGroup(data) {
  return $request({
    url: '/upload/group',
    method: 'post',
    data
  })
}

// 详情
export function getGroupInfo(id) {
  return $request({
    url: `/upload/group/${id || null}`
  })
}
export function deleteGroup(id) {
  return $request({
    url: `/upload/group/${id}`,
    method: 'delete'
  })
}
export function updateGroup(data) {
  return $request({
    url: '/upload/group',
    method: 'put',
    data,
    header: {
      'content-type': 'utf-8'
    }
  })
}

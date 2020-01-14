// 文件分类

export function getFile({ page = 1, size = 10, groupId = null } = {}) {
  return $request({
    url: '/upload',
    params: {
      page: page || 1,
      size: size || 10,
      group_id: groupId
    }
  })
}

// 保存
export function saveFile(data) {
  return $request({
    url: '/upload',
    method: 'post',
    data
  })
}

// 详情
export function getFileInfo(id) {
  return $request({
    url: `/upload/${id}`
  })
}

// 删除
export function deleteFile(id) {
  return $request({
    url: `/upload/${id}`,
    method: 'delete'
  })
}

// 删除
export function deleteFileList(data) {
  return $request({
    url: `/upload/array`,
    method: 'delete',
    data: {
      data
    }
  })
}

// 移动文件分组
export function moveFile(lst, groupId) {
  return $request({
    url: '/file/move',
    method: 'post',
    data: {
      lst,
      groupId
    }
  })
}

<template>
  <custom-dialog title="图片管理" :visible.sync="dialogVisible" auto-height>
    <div class="content image-manage">
      <div class="group-box">
        <div class="group-list">
          <div class="select-line" :class="listQuery.prefix === '' ? 'select' : ''" @click="goGroup(null)">全部</div>
          <div v-for="(tag, index) in groupList" :key="index" class="select-line" :class="listQuery.prefix === tag.enName ? 'select' : ''" :title="tag.name" @click="goGroup(tag.enName)">
            <i class="el-icon-edit edit" @click.stop="editGroup(tag)" />
            {{ tag.name }}
            <!--<i class="el-icon-error deleted" @click.stop="deleteGroup(tag.id)"></i>-->
          </div>
        </div>
        <div class="group-add">
          <!--<a href="javascript:void(0)" @click="addGroup">新增分组</a>-->
        </div>
      </div>
      <div class="image-content">
        <div class="image-top-manage">
          <!--<el-dropdown trigger="click">-->
          <!--<el-button type="primary" size="mini" :disabled="!imgCheck.length">-->
          <!--移动至<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <!--</el-button>-->
          <!--<el-dropdown-menu slot="dropdown">-->
          <!--<el-dropdown-item v-for="tag in groupList" :key="tag.id" @click.native="moveGroup(tag.id)">{{ tag.name }}</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
          <el-button type="danger" plain size="mini" :disabled="!imgCheck.length" @click="deleteImageForItem">删除</el-button>
          <el-upload ref="upload" class="upload-demo" name="image" style="display: inline-block;" multiple action="" :show-file-list="false" :on-change="handleChange" :file-list="fileList" :auto-upload="false">
            <el-button type="primary" plain size="mini" icon="el-icon-plus">上传图片</el-button>
          </el-upload>
          <small />
        </div>
        <div class="image-list">
          <div v-for="(item, index) in imgList" :key="index" class="image-box" :class="{ 'active': imgCheck.includes(item.guid) }" @click="selectImage(item)">
            <img :src="item.imgBig">
            <a href="javascript:void(0)" class="close" @click.stop="deleteImage(item)"><i class="el-icon-close" /></a>
            <div class="select-model">
              <i class="el-icon-check" />
            </div>
          </div>
        </div>
        <div>
          <pagination v-show="total > 0 && total > imgList.length" style="margin:0;padding:0;" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" layout="prev, pager, next, total" @pagination="getFileList" />
        </div>
      </div>
    </div>
    <template slot="footer">
      <el-button type="default" size="mini" class="admin-btn admin-btn-primary" @click="enter">确定</el-button>
      <el-button type="default" size="mini" class="admin-btn admin-btn-grey" @click="close">取消</el-button>
    </template>
  </custom-dialog>
</template>

<script>
import { getTypeList, addType, editType, deleteType } from '@/api/file'
import { getImageList, cloudUpload, fileDelete } from '@/api/file'
export default {
  name: 'ImageManage',
  components: {
    CustomDialog: resolve => {
      return require('@/components/dialog/index.vue')
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    limit: { // 可以选择多少个图片返回
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      dialogVisible: false,
      formItem: {
      },
      groupList: [], // 分组列表
      imgList: [], // 图片列表
      imgCheck: [],
      listLoading: false, // 列表是否在加载
      total: 0, // 分页数据
      listQuery: {
        page: 1,
        limit: 10,
        prefix: ''
      },
      fileList: [], // 图片列表
      timer: null // 图片选择多个触发的节流
    }
  },
  watch: {
    visible(news) {
      if (news) {
        this.formDetail()
      }
    },
    dialogVisible(news) {
      if (!news) {
        this.close()
      }
    }
  },
  created() {
  },
  methods: {
    init() {
      this.getGroupList()
      this.getFileList()
    },
    getGroupList() {
      // 图片分类
      getTypeList({ page: 1, size: 1000 }).then((res) => {
        this.groupList = res.data
      })
    },
    getFileList({ page = this.listQuery.page, limit = this.listQuery.limit, prefix = this.listQuery.prefix } = {}) {
      // 获取图片列表
      getImageList({ page, limit, prefix }).then((res) => {
        this.imgList = res.data
        this.total = res.count
      }).catch(e => {
        this.$notify({
          title: '获取失败',
          message: '获取图片列表失败，请重试',
          type: 'error'
        })
      }).finally(() => {
        this.imgCheck = []
      })
    },
    goGroup(name) {
      if (this.listQuery.prefix === name) return
      this.imgCheck = []
      this.listQuery.prefix = name
      this.listQuery.page = 1
      this.getFileList()
    },
    editGroup(item) {
      const vm = this
      this.$prompt('请输入新的分组名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '名称不能为空',
        inputPlaceholder: '请输入新的分组名称',
        inputValue: item.name
      }).then(({ value }) => {
        editType({
          ...item,
          name: value
        }).then((res) => {
          vm.getGroupList()
        })
      })
    },
    addGroup() {
      const vm = this
      this.$prompt('请输入分组名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '名称不能为空'
      }).then(({ value }) => {
        addType({
          type: 'image',
          name: value,
          sort: vm.groupList.length
        }).then((res) => {
          vm.getGroupList()
        }).catch(e => {
          this.$notify({
            title: '添加失败',
            type: 'error'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    deleteGroup(id) {
      const vm = this
      this.$confirm('确定要删除此分组吗？删除分组后，该类目下面的图片将会划分到未分类的类别下。注意：此操作不可逆。', '提示', {
        type: 'warning'
      }).then((res) => {
        deleteType(id).then((res) => {
          this.$notify({
            title: '删除成功',
            type: 'success'
          })
          vm.getGroupList()
        }).catch(e => {
          this.$notify({
            title: '删除失败',
            type: 'error'
          })
        })
      }).catch()
    },
    // 选中图片
    selectImage(item) {
      if (this.imgCheck.indexOf(item.guid) === -1) {
        this.imgCheck.push(item.guid)
      } else {
        this.imgCheck.remove(item.guid)
      }
      if (this.imgCheck.length > this.limit) {
        this.imgCheck.splice(0, 1)
      }
    },
    // 删除指定图片
    deleteImage(item) {
      this.$confirm('确定要删除选定的图片吗？', '提示', {
      }).then((res) => {
        fileDelete(item.imgBig).then((res) => {
          this.$notify({
            title: '删除成功',
            type: 'success'
          })
          this.getFileList()
        }).catch(e => {
          this.$notify({
            title: '删除失败',
            type: 'error'
          })
        })
      })
    },
    // 删除选中的图片
    deleteImageForItem() {
      const imgLength = this.imgCheck.length
      let isDelete = 0 // 已经删除成功次数
      let runTime = 0 // 运行次数
      // 统计删除成功的数量
      const total = () => {
        if (this.limit === 1) {
          if (isDelete) {
            this.$notify({
              title: '删除成功',
              type: 'success'
            })
          } else {
            this.$notify({
              title: '删除失败',
              type: 'error'
            })
          }
        } else {
          if (imgLength === isDelete) {
            this.$notify({
              title: '删除成功',
              type: 'success'
            })
          } else {
            this.$notify({
              title: '删除成功',
              content: `本次删除${isDelete}张图片，剩余${imgLength - isDelete}未删除`,
              type: 'success'
            })
          }
        }
        this.getFileList()
      }
      const deleted = (id) => {
        console.log(id)
        ++runTime
        const info = this.imgList.filter(o => o.guid === id[0])
        fileDelete(info[0].imgBig).then((res) => {
          ++isDelete
          if (imgLength !== runTime) {
            deleted(this.imgCheck.slice(runTime, 1))
          } else {
            total()
          }
        }).catch(e => {
          if (imgLength !== runTime) {
            deleted(this.imgCheck.slice(runTime, 1))
          }
        })
      }
      if (imgLength) {
        deleted(this.imgCheck.slice(0, 1))
      } else {
        this.$message('您还没有选择要删除的图片')
      }
    },
    /*
    moveGroup(id) {
      // 移动图片数组
      console.log(id)
      if (this.groupId === id) return
      if (!this.imgCheck.length) return
      moveFile(this.imgCheck, id).then((res) => {
        this.getFileList()
      }).catch(e => {
      })
    },
    */
    // 上传图片，选中图片
    handleChange(file, fileList) {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          const formData = new FormData()
          formData.append('file', file.raw)
          formData.append('path', this.listQuery.prefix)
          const loading = this.$loading({
            lock: true,
            text: '上传中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          cloudUpload(formData).then((res) => {
            this.getFileList()
          }).finally(() => {
            loading.close()
            this.$refs.upload.clearFiles()
          })
          clearTimeout(this.timer)
          this.timer = null
        }, 1000)
      }
    },
    formDetail() {
      // 处理弹窗信息
      this.reset()
      this.dialogVisible = this.visible
      this.init()
    },
    hide() {
      // 关闭弹窗
      this.dialogVisible = false
      this.$emit('close')
      this.$emit('update:visible', false)
      this.$emit('success')
    },
    close() {
      this.dialogVisible = false
      this.$emit('close')
      this.$emit('update:visible', false)
    },
    reset() {
      this.formItem = {}
      this.listQuery.page = 1
      this.listQuery.size = 10
      this.total = 0
      this.groupList = [] // 分组列表
      this.listQuery.prefix = ''
      this.imgList = [] // 图片列表
      this.imgCheck = []
      this.fileList = [] // 图片列表
      this.timer = null // 图片选择多个触发的节流
    },
    // 返回按钮
    enter() {
      const lst = []
      this.imgList.forEach((value, index) => {
        if (this.imgCheck.includes(value.guid)) {
          lst.push(value)
        }
      })
      this.$emit('change', lst)
      this.close()
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .image-manage{display: flex;
    .group-box{height:100%;width:150px;flex-shrink: 0;
      .group-list{height:250px;overflow: auto;padding-right:20px;
        .select-line{cursor: pointer;font-size:12px;border-radius:5px;margin-bottom:5px;text-indent: 20px;position:relative;padding:10px 0;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;
          .edit{position:absolute;display: none;top:13px;left:2px;}
          .deleted{position:absolute;display: none;top:13px;right:2px;}
          &:hover{background:rgba(64,158,255,.2);color:#409EFF;
            .edit{display: inline-block;text-indent: 0;}
            .deleted{display: inline-block;text-indent: 0;}
          }
          &.select{background:rgba(64,158,255,.2);color:#409EFF;}
        }
      }
      .group-add{
        a{font-size:12px;}
      }
    }
    .image-content{flex-grow:1;
      .image-top-manage{padding-bottom:10px;}
      .image-list{height:240px;display: flex;flex-wrap: wrap;
        .image-box{width:100px;height:100px;padding:5px;border-radius:5px;border:1px solid transparent;
          position:relative;
          .close{position:absolute;right:-5px;top:-5px;background:#fff;border:1px solid rgba(64,158,255,.2);border-radius:100px;overflow: hidden;display: none;width:20px;height:20px;text-align: center;line-height:22px;z-index:2;}
          &:hover{border:1px solid rgba(64,158,255,.2);
            a{display:inline-block;
              &:hover{background:rgba(64,158,255,1);color:#fff;}
            }
            .select-model{
              display:block;
            }
          }
          img{width:100%;height:100%;}
          .select-model{
            display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.6);
            text-align: center;line-height:100px;font-size: 28px;color:#fff;
          }
          &.active{
            .select-model{display: block;}
          }
        }
      }
    }
  }
</style>

<template>
  <custom-dialog title="图片管理" :visible.sync="dialogVisible">
    <div class="content image-manage">
      <div class="group-box">
        <div class="group-list">
          <div class="select-line" :class="groupId === null ? 'select' : ''" @click="goGroup(null)">全部</div>
          <div class="select-line" :class="groupId === 0 ? 'select' : ''" @click="goGroup(0)">未分类</div>
          <div class="select-line" v-for="tag in groupList" @click="goGroup(tag.id)" :key="tag.id" :class="groupId === tag.id ? 'select' : ''" :title="tag.name">
            <i class="el-icon-edit edit" @click.stop="editGroup(tag)"></i>
            {{ tag.name }}<i class="el-icon-error deleted" @click.stop="deleteGroup(tag.id)"></i>
          </div>
        </div>
        <div class="group-add">
          <a href="javascript:void(0)" @click="addGroup">新增分组</a>
        </div>
      </div>
      <div class="image-content">
        <div class="image-top-manage">
          <el-dropdown trigger="click">
            <el-button type="primary" size="mini" :disabled="!imgCheck.length">
              移动至<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="tag in groupList" :key="tag.id" @click.native="moveGroup(tag.id)">{{ tag.name }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="danger" plain size="mini" :disabled="!imgCheck.length" @click="deleteImageForItem">删除</el-button>
          <el-upload class="upload-demo" ref="upload" name="image" style="display: inline-block;" multiple action="" :show-file-list="false" :on-change="handleChange" :file-list="fileList" :auto-upload="false">
            <el-button type="primary" plain size="mini" icon="el-icon-plus">上传图片</el-button>
          </el-upload>
          <small>处于选中状态的图片不会受到翻页的影响。</small>
        </div>
        <div class="image-list">
          <div v-for="item in imgList" :key="item.id" class="image-box" :class="{ 'active': imgCheck.includes(item.id) }" @click="selectImage(item)">
            <img :src="item.src" />
            <a href="javascript:void(0)" class="close" @click.stop="deleteImage(item)"><i class="el-icon-close"></i></a>
            <div class="select-model">
              <i class="el-icon-check"></i>
            </div>
          </div>
        </div>
        <div>
          <pagination layout="prev, pager, next" :total="pagination.total" :page="pagination.page" :size="pagination.size" @change="getFileList" vstyle=""></pagination>
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
  import { getGroup, saveGroup, updateGroup, deleteGroup } from '@/api/file/group'
  import { getFile, saveFile, moveFile, deleteFile, deleteFileList } from '@/api/file/index'
  import common from '@/mixins/common'
  export default {
    name: 'image-manage',
    mixins: [common],
    data() {
      return {
        dialogVisible: false,
        formItem: {
        },
        groupList: [], // 分组列表
        groupId: null,
        imgList: [], // 图片列表
        imgCheck: [],
        pagination: {
          size: 10
        },
        fileList: [], // 图片列表
        timer: null // 图片选择多个触发的节流
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      dialogState: {
        type: Boolean,
        default: false
      },
      formInfo: {
        type: Object,
        default: () => {
          return {}
        }
      },
      max: {
        type: Number,
        default: 1
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
        getGroup({ page: 1, size: 1000 }).then((res) => {
          this.groupList = res.data.list
        })
      },
      getFileList({ page = this.pagination.page, size = this.pagination.size, groupId = this.groupId } = {}) {
        // 获取图片列表
        getFile({ page, size, groupId }).then((res) => {
          this.imgList = res.data.list
          this.setPagination(res.data.page, res.data.size, res.data.total)
        })
      },
      goGroup(id) {
        if (this.groupId === id) return
        this.imgCheck = []
        this.groupId = id
        this.setPagination(1)
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
          updateGroup({
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
          saveGroup({
            type: 'image',
            name: value,
            sort: vm.groupList.length
          }).then((res) => {
            vm.getGroupList()
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
          deleteGroup(id).then((res) => {
            vm.getGroupList()
          })
        }).catch()
      },
      // 选中图片
      selectImage(item) {
        if (this.imgCheck.indexOf(item.id) === -1) {
          this.imgCheck.push(item.id)
        } else {
          this.imgCheck.remove(item.id)
        }
        if (this.imgCheck.length > this.max) {
          this.imgCheck.splice(0, 1)
        }
      },
      // 删除指定图片
      deleteImage(item) {
        this.$confirm('确定要删除选定的图片吗？', '提示', {
        }).then((res) => {
          deleteFile(item.id).then((res) => {
            this.getFileList()
          })
        }).catch()
      },
      // 删除选中的图片
      deleteImageForItem() {
        deleteFileList(this.imgCheck).then((res) => {
          this.getFileList()
        })
      },
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
      // 上传图片，选中图片
      handleChange(file, fileList) {
        console.log(file, fileList)
        console.log(this.fileList)
        if (this.timer) {
          return
        } else {
          this.timer = setTimeout(() => {
            const formData = new FormData()
            fileList.forEach((value, index) => {
              formData.append(`image[${index}]`, value.raw)
            })
            saveFile(formData).then((res) => {
              this.getFileList()
            }).finally(() => {
              this.$refs.upload.clearFiles()
            })
            clearTimeout(this.timer)
            console.log(this.timer)
            this.timer = null
          }, 1000)
        }
      },
      formDetail() {
        // 处理弹窗信息
        this.reset()
        this.dialogVisible = this.visible
        this.init()
        if (!this.dialogState) {
          //
        } else {
          //
        }
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
        this.pagination.page = 1
        this.pagination.size = 10
        this.pagination.total = 0
        this.groupList = [] // 分组列表
        this.groupId = null
        this.imgList = [] // 图片列表
        this.imgCheck = []
        this.fileList = [] // 图片列表this.timer = null // 图片选择多个触发的节流
      },
      enter() {
        const lst = []
        this.imgList.forEach((value, index) => {
          if (this.imgCheck.includes(value.id)) {
            lst.push(value)
          }
        })
        this.$emit('change', lst)
        this.close()
      }
    },
    components: {
      CustomDialog: resolve => {
        return require(['@/components/dialog/index.vue'], resolve)
      },
      Pagination: resolve => {
        return require(['@/components/Pagination/index.vue'], resolve)
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

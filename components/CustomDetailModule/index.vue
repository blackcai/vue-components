<template>
  <div class="custom-detail-module">
    <div class="">
      <phone-box>
        <vue-draggable v-model="moduleList">
          <div v-for="(item, index) in moduleList" :key="index" @click="handleEdit(item)" class="view-list" :class="{ active: item.moduleIndex === moduleActiveIndex }">
            <title-view v-if="item.module === 'title'" :config="item" />
            <editor-view v-if="item.module === 'editor'" :config="item" />
            <divider-view v-if="item.module === 'divider'" :config="item" />
            <blank-view v-if="item.module === 'blank'" :config="item" />
            <video-view v-if="item.module === 'video'" :config="item" />
            <div class="delete" @click.stop="handleDelete(item, index)">删除</div>
          </div>
        </vue-draggable>
      </phone-box>
    </div>
    <div class="module-list">
      <el-card style="width:1000px;">
        <el-button type="primary" @click="handleAddModule('title')">标题</el-button>
        <el-button type="primary" @click="handleAddModule('editor')">富文本</el-button>
        <el-button type="primary" @click="handleAddModule('divider')">分割线</el-button>
        <el-button type="primary" @click="handleAddModule('blank')">辅助空白</el-button>
        <el-button type="primary" @click="handleAddModule('video')">视频</el-button>
      </el-card>
      <el-card v-if="moduleName" style="width:1000px;">
        <title-module v-show="moduleName === 'title'" :config="moduleConfig.title" />
        <editor-module v-show="moduleName === 'editor'" :config="moduleConfig.editor" />
        <divider-module v-show="moduleName === 'divider'" :config="moduleConfig.divider" />
        <blank-module v-show="moduleName === 'blank'" :config="moduleConfig.blank" />
        <video-module v-show="moduleName === 'video'" :config="moduleConfig.video" />
      </el-card>
    </div>
  </div>
</template>

<script>
  /*
  * 数据返回
  * getContent(status) 传入状态为 true 的时候返回的是原始数组 默认为字符串
  * setContent(content, status) 默认传入数据字符串 status 为 true 的时候传入数组
  * */
  import VueDraggable from 'vuedraggable'

  import PhoneBox from '../PhoneBox/index'

  import TitleModule from './components/title'
  import EditorModule from './components/editor'
  import DividerModule from './components/divider'
  import BlankModule from './components/blank'
  import VideoModule from './components/video'

  import TitleView from './views/title'
  import EditorView from './views/editor'
  import DividerView from './views/divider'
  import BlankView from './views/blank'
  import VideoView from './views/video'

  export default {
    name: 'GoodsInfoDetail',
    components: {
      PhoneBox,
      TitleModule,
      EditorModule,
      DividerModule,
      BlankModule,
      VideoModule,
      VueDraggable,
      TitleView,
      EditorView,
      DividerView,
      BlankView,
      VideoView
    },
    data() {
      return {
        moduleList: [], // 内容列表
        moduleName: '', // 模块名称
        moduleConfig: {
          title: {},
          editor: {},
          divider: {},
          blank: {},
          video: {}
        }, // 模块配置
        moduleActiveIndex: null
      }
    },
    methods: {
      handleAddModule(name) {
        const that = this
        this.moduleConfig[name] = null
        const generator = {
          title() {
            const config = {
              moduleIndex: that.moduleList.length,
              module: 'title',
              moduleName: '标题',
              value: '请输入标题内容',
              style: '1',
              align: 'left',
              padding: 0,
              backgroundColor: '#fff',
              textColor: '#000'
            }
            console.log(name, ':', config)
            that.moduleList.push(config)
          },
          editor() {
            const config = {
              moduleIndex: that.moduleList.length,
              module: 'editor',
              moduleName: '富文本',
              value: '请输入内容',
              padding: 0
            }
            console.log(name, ':', config)
            that.moduleList.push(config)
          },
          divider() {
            const config = {
              moduleIndex: that.moduleList.length,
              module: 'divider',
              moduleName: '分割线',
              padding: 5
            }
            console.log(name, ':', config)
            that.moduleList.push(config)
          },
          blank() {
            const config = {
              moduleIndex: that.moduleList.length,
              module: 'blank',
              moduleName: '辅助空白',
              backgroundColor: '#fff',
              height: 10
            }
            console.log(name, ':', config)
            that.moduleList.push(config)
          },
          video() {
            const config = {
              moduleIndex: that.moduleList.length,
              module: 'video',
              moduleName: '视频',
              padding: 0,
              imageSrc: '',
              videoSrc: ''
            }
            console.log(name, ':', config)
            that.moduleList.push(config)
          }
        }
        try {
          this.moduleConfig[name] = null
          const length = that.moduleList.length
          generator[name]()
          that.moduleConfig[name] = that.moduleList[length]
          this.moduleName = name
          this.moduleActiveIndex = length
        } catch (e) {
          console.log(e)
        }
      },
      handleEdit(item) {
        this.moduleList.forEach((value) => {
          if (value.moduleIndex === item.moduleIndex) {
            this.moduleConfig[value.module] = value
          }
        })
        this.moduleName = item.module
        this.moduleActiveIndex = item.moduleIndex
      },
      handleDelete(item, index) {
        // 清空选择内容
        this.$confirm(`确定要删除${item.moduleName}吗？`, '提示', {}).then(() => {
          this.moduleActiveIndex = null
          this.moduleName = ''
          this.moduleList.splice(index, 1)
        })
      },
      getContent(status) {
        if (status) {
          return this.moduleList
        } else {
          return JSON.stringify(this.moduleList)
        }
      },
      setContent(content, status) {
        const evil = (fn) => {
          const Func = Function // 一个变量指向Function，防止有些前端编译工具报错
          return new Func(`return ${fn}`)()
        }

        if (status) {
          this.moduleList = content
        } else {
          try {
            this.moduleList = evil(content)
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-detail-module{display: flex;
    .module-list{flex-grow: 1;padding-left:20px;}
    .view-list{position:relative;overflow: hidden;
      &:hover,&.active{
        &:before{position:absolute;height:100%;width:100%;top:0;left:0;border:2px dashed #409EFF;content: '';}
      }
      .delete{color:#fff;font-size:12px;display: inline-block;position:absolute;right:0; bottom:0;background:rgba(0,0,0,0.2);padding:2px 5px;cursor: pointer;}
    }
    .editor-block{display: none}
  }
</style>

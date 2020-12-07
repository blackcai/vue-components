<template>
  <section>
    <div class="">
      <el-tabs type="border-card">
        <el-tab-pane :label="cmp.name" v-for="(cmp, cmpIndex) in cmpItem" :key="cmpIndex">
          <el-row>
            <el-col :span="12" v-for="(item, index) in cmp.list" :key="index" v-if="!item.disabled">
              <el-card shadow="always" style="height: 200px;">
                <el-row>
                  <el-col :span="24">
                    <div>
                      {{ item.name }}<el-tag size="mini" v-if="item.not">转载</el-tag> <span class="time">{{ item.time }}</span>
                      <div v-for="(c, j) in item.image" :key="index">
                        {{ c.name }}：
                        <el-image :key="j"
                                  style="width: 30px; height: 30px"
                                  :src="c.src" :alt="c.name"
                                  :preview-src-list="[c.src]">
                        </el-image>
                      </div>
                    </div>
                    <el-row>
                      <el-col :span="24" v-if="item.msg"><small>说明：{{ item.msg }}</small></el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="24">
                    <a v-if="item.code" :href="item.code" target="_blank">查看源码</a>
                    <el-button type="text" class="button" v-if="item.url" @click="goUrl(item.url)">查看演示</el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <div class="" style="padding:20px 0;text-indent: 20px;">可以发送邮件至<a href="mailto:mabumilu@qq.com?subject=插件需求&body=我在找一个插件">我的邮箱</a>提出你的详细需求，我尽所能的给你提供想要的组件。</div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'vue-component',
    layout: 'bar',
    data() {
      return {
        cmpItem: [
          {
            name: '功能组件',
            list: [
              { name: '一个简易实用的商品sku添加组件', url: 'sku?version=index', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/sku', time: '2019-7-27', not: false, msg: '如需参考真实交互数据，参见：一个api接口' },
              { name: '另一个简易实用的商品sku添加组件', url: 'sku2?version=index', code: 'https://github.com/rossroma/vue-sku', time: '2019-7-27', not: false },
              { name: '上个sku组件的ui改版', url: 'sku2/index2?version=index', code: 'https://github.com/rossroma/vue-sku/tree/refactoring', time: '2019-8-31', not: false },
              { name: '对应上一个sku组件的c端选择器', url: 'sku3', code: '', time: '2020-4-3', not: false },
              { name: '随机密码生成', url: 'random?version=index', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/random', time: '2019-7-27', not: false },
              { name: '表格生成器', url: 'table?version=index', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/table', time: '2019-7-30', not: false },
              { name: 'jquery-tab切换组件示例', url: 'jquery/tab?version=index', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/jquery/tab', time: '2019-10-31', not: false },
              { name: '一个api接口（PHP）', url: 'http://shop1.yexiaodan.com', code: 'https://gitee.com/mymcode/tpshop', time: '2019-1-14', not: false, image: [
                { src: '/image/password.jpg', name: '密码' },
                { src: '/image/qrcode.jpg', name: '数据库表' }
              ], disabled: true},
              { name: '一个api接口（VUE）', url: 'http://shop1.yexiaodan.com', code: 'https://gitee.com/mymcode/vue-admin-tpshop', time: '2019-1-14', not: false, image: [
                { src: '/image/password.jpg', name: '密码' },
                { src: '/image/qrcode.jpg', name: '数据库表' }
              ], disabled: true},
              { name: '弹窗式图片及分类管理', url: '', code: '', time: '2019-1-14', not: false, msg: '参见：一个api接口的文件管理', disabled: true },
              { name: '拖拽式模块管理', url: 'detailModule', code: '', time: '2020-4-27', not: false, msg: '一个可拖拽的模块管理' },
              { name: 'FCC翻译团队邀请（非组件）', url: 'https://github.com/freeCodeCamp/news-translation', code: '', time: '', not: false }
            ]
          },
          {
            name: '代码片段',
            list: [
              { name: 'extend 对象合并', url: 'extend?version=index', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/extend', time: '2020-12-3', not: false, msg: '这个方法来自 swipper' }
            ]
          },
          {
            name: '特效',
            list: [
              { name: '下雨', url: 'rain?version=index', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/rain', time: '2020-12-7', not: false, msg: '来自 jq22' }
            ]
          }
        ]
      }
    },
    created() {
    },
    methods: {
      goUrl(url) {
        if (url.indexOf('http') !== -1) {
          location.href = url
        } else {
          this.$router.push(url)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image{width:100%;}
</style>

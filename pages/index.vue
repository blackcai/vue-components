<template>
  <section>
    <div class="">
      <el-card shadow="always" v-for="(item, index) in cmpItem" :key="index">
        <el-row>
          <el-col :span="12">
            <div>{{ item.name }}<el-tag size="mini" v-if="item.not">转载</el-tag> <span class="time">{{ item.time }}</span></div>
          </el-col>
          <el-col :span="12" class="text-right">
            <a v-if="item.code" :href="item.code" target="_blank">查看源码</a>
            <el-button type="text" class="button" @click="goUrl(item.url)">查看</el-button>
          </el-col>
        </el-row>
      </el-card>
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
          { name: '一个简易实用的商品sku添加组件', url: 'sku', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/sku', time: '2019-7-27', not: false },
          { name: '另一个简易实用的商品sku添加组件', url: 'sku2', code: 'https://github.com/rossroma/vue-sku', time: '2019-7-27', not: false },
          { name: '上个sku组件的ui改版', url: 'sku2/index2', code: 'https://github.com/rossroma/vue-sku/tree/refactoring', time: '2019-8-31', not: false },
          { name: '随机密码生成', url: 'random', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/random', time: '2019-7-27', not: false },
          { name: '表格生成器', url: 'table', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/table', time: '2019-7-30', not: false },
          { name: 'jquery-tab切换组件示例', url: 'jquery/tab', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/jquery/tab', time: '2019-10-31', not: false },
          { name: 'FCC翻译团队邀请（非组件）', url: '', code: 'https://github.com/freeCodeCamp/news-translation', time: '', not: false }
        ]
      }
    },
    created() {
    },
    methods: {
      goUrl(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image{width:100%;}
</style>

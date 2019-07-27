<template>
  <section>
    <div class="">
      <el-card shadow="always" v-for="(item, index) in cmpItem" :key="index">
        <el-row>
          <el-col :span="12">
            <div>{{ item.name }}<el-tag size="mini" v-if="item.not">转载</el-tag> <span class="time">{{ item.time }}</span></div>
          </el-col>
          <el-col :span="12" class="text-right">
            <a :href="item.code" target="_blank">查看源码</a>
            <el-button type="text" class="button" @click="goUrl(item.url)">查看</el-button>
          </el-col>
        </el-row>
      </el-card>
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
          { name: '另一个简易实用的商品sku添加组件', url: 'sku2', code: 'https://github.com/rossroma/vue-sku', time: '2019-7-27', not: true },
          { name: '随机密码生成', url: 'random', code: 'https://gitee.com/mymcode/vue-component/tree/develop/pages/random', time: '2019-7-27', not: false },
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

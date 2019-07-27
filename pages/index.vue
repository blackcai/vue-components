<template>
  <section>
    <el-row>
      <el-col :span="12" class="text-left">组件demo</el-col>
      <el-col :span="12" class="text-right">
        <a href="https://gitee.com/mymcode/vue-component">gitee</a>|
        <a href="https://github.com/blackcai/vue-components">github</a>
      </el-col>
    </el-row>
    <div class="">
      <el-card shadow="always">
          <div>一个简易实用的商品sku添加组件</div>
        <div>
          <a href="https://gitee.com/mymcode/vue-component/tree/develop/pages/sku" target="_blank">https://gitee.com/mymcode/vue-component/tree/develop/pages/sku</a>
        </div>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click="goUrl('sku')">查看</el-button>
          </div>
      </el-card>

      <el-card shadow="always">
        <div>
          <div>另一个简易实用的商品sku添加组件<el-tag size="mini">转载</el-tag></div>
          <div>
            <a href="https://github.com/rossroma/vue-sku" target="_blank">https://github.com/rossroma/vue-sku</a>
          </div>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click="goUrl('sku2')">查看</el-button>
          </div>
        </div>
      </el-card>

      <el-card shadow="always">
        <div>
          <div>随机密码生成</div>
          <div>
            <a href="https://gitee.com/mymcode/vue-component/tree/develop/pages/random" target="_blank">https://gitee.com/mymcode/vue-component/tree/develop/pages/random</a>
          </div>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click="goUrl('random')">查看</el-button>
          </div>
        </div>
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
        currentDate: '2019-7-23'
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

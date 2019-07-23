<template>
  <el-row>
    <el-col :span="4">
      <el-card shadow="hover">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>一个简易实用的商品sku添加组件</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click="goUrl('sku')">查看</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'vue-component',
    data() {
      return {
        currentDate: '2019-7-23'
      }
    },
    created() {
    },
    methods: {
      goUrl(url) {
        console.log(url)
        this.$router.push(url)
      }
    }
  }
</script>

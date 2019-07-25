<template>
  <section>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span>组件类</span>
          </div>
          本意是提供一个思路，直接拿来用也没关系，但是一定要明白为什么要这样去实现？有没有更好的方式去实现？程序猿的世界没有捷径，只有自己努力，今天可以用他人写好的插件，明天遇到没有人走过的路，是否会退缩？</el-card>
      </el-col>
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
    <el-row>
      <el-col :span="24">
        <div slot="header" class="clearfix">
          <span>功能类</span>
        </div>
        <el-card>实用功能</el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>随机密码生成</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="goUrl('random')">查看</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
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

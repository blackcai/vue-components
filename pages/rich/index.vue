<template>
  <div class="app-container">
    <div>
      <el-input placeholder="请输入一个随机数" v-model="num">
        <el-button slot="append" @click="generate">生成</el-button>
      </el-input>
    </div>
    <div class="" v-for="(item, index) in arrData">
      {{ item }}
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
  // 要想富先修路
  /*
  * arrData {
  *   num: 0 次数
  *   str: '1, 2, 3, 4, 5, 6, 7'
  * }
  * */
  export default {
    name: 'RichGenerate',
    data() {
      return {
        arrData: {},
        num: 0
      }
    },
    methods: {
      generate() {
        if (!Number(this.num)) {
          this.$message.error('请输入一个正确的数字')
          return
        }

      }
    }
  }
</script>

<style scoped>

</style>

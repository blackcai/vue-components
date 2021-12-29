<template>
  <div>
    <el-button @click="changeClick">切换</el-button>
    <el-button @click="deleteClick">删除</el-button>
    <div v-for="(item, index) in arr" @click="handleClick(item)">{{ item }}</div>
  </div>
</template>

<script>
  export default {
    name: 'TestKey',
    data() {
      return {
        arr: [
          { name: 'test1' },
          { name: 'test2' },
          { name: 'test3' }
        ]
      }
    },
    methods: {
      changeClick() {
        console.log('changeClick')
        this.$set(this.arr, [0], {
          name: 'newTest'
        })
        console.log(this.arr)
      },
      deleteClick() {
        this.arr.splice(1,1)
      },
      handleClick(item) {
        console.log(item)
      }
    }
  }
</script>

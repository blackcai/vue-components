<template>
  <div>
    <el-row>
      <el-col :span="12" class="padding-bottom">
        <el-input type="textarea" placeholder="请输入对象1" v-model="oldData"></el-input>
      </el-col>
      <el-col :span="12" class="padding-bottom">
        <el-input type="textarea" placeholder="请输入对象2" v-model="newData"></el-input>
      </el-col>
    </el-row>
    <div class="padding-bottom">
      <el-button type="primary" @click="handleMerge">合并</el-button>
    </div>
    <div>
      <el-card>
        <div slot="header">合并后</div>
        {{ mergeData }}
      </el-card>
    </div>
  </div>
</template>

<script>
  import ObjectExtend from '@/components/extend'
  export default {
    name: 'ExtendIndex',
    layout: 'bar',
    data() {
      return {
        oldData: '',
        newData: '',
        mergeData: ''
      }
    },
    created() {
      const obj = ObjectExtend({
        a: 1,
        c: function() {},
        d: {
          a: [1],
          e: {
            f: 1,
            g: 2,
            i: 2,
            j: 9
          }
        }
      }, {
        b: 2,
        d: {
          a: [2],
          e: {
            g: 3,
            h: 1,
            j: 8
          }
        }
      })
      console.log(obj)
    },
    methods: {
      handleMerge() {
        try {
          console.log(this.oldData)
          console.log(this.newData)
          const oldData = JSON.parse(this.oldData)
          const newData = JSON.parse(this.newData)
          this.mergeData = ObjectExtend(oldData, newData)
        } catch (e) {
          console.error(e)
          alert('请确保对象正确')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .padding-top {
    padding-top: 10px;
  }
  .padding-bottom {
    padding-bottom: 10px;
  }
  .padding-left{
    padding-left: 10px;
  }
  .padding-right {
    padding-right: 10px;
  }
</style>

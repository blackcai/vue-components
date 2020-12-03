<template>
  <div class="padding-top">
    <el-row>
      <el-col :span="12" class="padding-bottom">
        <el-input type="textarea" placeholder="请输入对象1" v-model="oldData"></el-input>
      </el-col>
      <el-col :span="12" class="padding-bottom">
        <el-input type="textarea" placeholder="请输入对象2" v-model="newData"></el-input>
      </el-col>
      <el-col :span="24" class="padding-bottom">对象参考：{"key": "对象1"}</el-col>
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
//      const obj = ObjectExtend({
//        a: 1,
//        c: function() {},
//        d: {
//          a: [1],
//          e: {
//            f: 1,
//            g: 2,
//            i: 2,
//            j: 9
//          }
//        }
//      }, {
//        b: 2,
//        d: {
//          a: [2],
//          e: {
//            g: 3,
//            h: 1,
//            j: 8
//          }
//        }
//      })
//      console.log(obj)
    },
    methods: {
      handleMerge() {
        let oldData = null
        let newData = null
        try {
          oldData = JSON.parse(this.oldData)
        } catch (e) {
          this.$confirm('请输入正确的数据对象1', '提示', {}).then(res => {})
          return
        }
        try {
          newData = JSON.parse(this.newData)
        } catch (e) {
          this.$confirm('请输入正确的数据对象2', '提示', {}).then(res => {})
          return
        }
        this.mergeData = ObjectExtend(oldData, newData)
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

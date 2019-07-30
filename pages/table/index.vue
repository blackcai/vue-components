<template>
  <section>
    <el-card size="mini">
      <div slot="header" class="clearfix">
        <span>表格头部</span>
      </div>
      <el-card>
        <div class="text item">
          <el-tag v-for="(item, index) in thead" closable @close="closeThead(index)" :key="index">
            <input type="text" v-model="thead[index]" style="width:100px;" />
          </el-tag>
          <el-input v-model="theadValue" size="mini" placeholder="请输入规格值" style="width:200px;" @keyup.enter.native="addThead">
            <el-button slot="append" icon="el-icon-plus" @click="addThead">添加</el-button>
          </el-input>
        </div>
      </el-card>
    </el-card>
    <el-card size="mini">
      <div slot="header" class="clearfix">
        <span>表格内容</span>
      </div>
      <el-card size="mini">
        <div class="text item">
          <el-button size="mini" @click="addTbody">添加一行表格</el-button>
          <el-button size="mini" @click="hideBorder = true" v-if="!hideBorder">隐藏输入框边框</el-button>
          <el-button size="mini" @click="hideBorder = false" v-if="hideBorder">显示输入框边框</el-button>
          <el-input v-model="lineNumber" size="mini" placeholder="请输入行数" type="number" style="width:200px;" @keyup.enter.native="inputDelete">
            <el-button slot="append" @click="inputDelete">删除指定行数据</el-button>
          </el-input>
        </div>
      </el-card>
    </el-card>
    <el-card size="mini">
      <div slot="header" class="clearfix">
        <span>颜色设置</span>
      </div>
      <el-card size="mini">
        <div class="text item">
          <el-input v-model="color.headBg" size="mini" placeholder="表格头部颜色" style="width:300px">
            <el-button slot="append">表格头部颜色</el-button>
          </el-input>
          <el-input v-model="color.border" size="mini" placeholder="表格边框颜色" style="width:300px">
            <el-button slot="append">表格边框颜色</el-button>
          </el-input>
          <el-input v-model="color.headColor" size="mini" placeholder="表格头部文字颜色" style="width:300px">
            <el-button slot="append">表格头部文字颜色</el-button>
          </el-input>
          <el-input v-model="color.bodyColor" size="mini" placeholder="表格内容文字颜色" style="width:300px">
            <el-button slot="append">表格内容文字颜色</el-button>
          </el-input>
        </div>
      </el-card>
    </el-card>
    <table style="width:1000px;border:1px solid #ccc;margin: 100px auto 100px auto;">
      <thead :style="{ background: color.headBg }">
      <tr>
        <th v-for="(item, index) in thead" :key="index" style="text-align: left;padding:10px;" :style="{ borderRight: color.border, color: color.headColor }">{{ item }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tbody" :key="index" style="border-top:1px solid #ccc;">
        <td v-for="(c, j) in item" :key="j" style="padding:10px;" :style="{ borderRight: color.border, color: color.headColor }"><input type="text" v-model="tbody[index][j]" placeholder="" :style="{ border: hideBorder ? 'none' : '' }"></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    name: 'table-index',
    data() {
      return {
        thead: [],
        theadValue: '',
        tbody: [],
        hideBorder: false,
        lineNumber: 0,
        color: {
          headBg: '#99bbdd',
          border: '#ccc',
          headColor: '#545454',
          bodyColor: '#545454'
        }
      }
    },
    layout: 'bar',
    methods: {
      addThead() {
        this.thead.push(this.theadValue)
        this.theadValue = ''
        if (this.tbody.length) {
          this.updateBody()
        } else {
          this.addTbody()
        }
      },
      closeThead(index) {
        this.thead.splice(index, 1)
        this.deleteBody(index)
      },
      updateBody(index) {
        this.tbody.forEach((value, j) => {
          value.push('')
        })
      },
      deleteBody(index) {
        this.tbody.forEach((value, j) => {
          value.splice(index, 1)
        })
      },
      addTbody() {
        const arr = []
        this.thead.forEach((value, index) => {
          arr.push('')
        })
       this.tbody.push(arr)
      },
      inputDelete() {
        // 最少保留一行数据
        // 实际比输入的少一行
        const trueNumber = this.lineNumber - 1
        if (this.lineNumber > this.tbody.length) {
          this.$message('请输入正确的行数。')
        } else {
          this.tbody.splice(trueNumber, 1)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
table{
  thead{
    tr{
      th{}
    }
  }
  tbody{
    tr{
      td{}
    }
  }
}
</style>

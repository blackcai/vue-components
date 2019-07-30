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
          <el-button size="mini" @click="hideBorder = !hideBorder">{{ hideBorder ? '显示输入框边框' : '隐藏输入框边框' }}</el-button>
          <el-button size="mini" @click="inputText = !inputText">{{ inputText ? '文字转输入框' : '输入框转换文字' }}</el-button>
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
    <table style="width:1000px;margin: 100px auto 100px auto;border-collapse: collapse;border-spacing: 0;" :style="{ border: `1px solid ${ color.border }` }" ref="table">
      <thead :style="{ background: color.headBg }">
      <tr>
        <th v-for="(item, index) in thead" :key="index" style="text-align: left;padding:10px;" :style="{ borderRight: `1px solid ${color.border}`, color: color.headColor }">{{ item }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tbody" :key="index" :style="{ borderTop: `1px solid ${ color.border }` }">
        <td v-for="(c, j) in item" :key="j" style="padding:10px;" :style="{ borderRight: `1px solid ${ color.border }`, color: color.bodyColor }">
          <input type="text" v-if="!inputText" v-model="tbody[index][j]" style="width:100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;" placeholder="" :style="{ border: hideBorder ? 'none' : '' }">
          <span v-if="inputText">{{ tbody[index][j] }}</span>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="table" style="width:1000px;margin: 100px auto 100px auto;" v-if="thead.length" :style="{ border: `1px solid ${ color.border }` }" ref="tableForDiv">
      <div class="header" style="display: flex;" :style="{ background: color.headBg }">
        <div v-for="(item, index) in thead" :key="index" style="text-align: left;padding:10px;" :style="{ width: `${pjWidth}%`, borderRight: thead.length - 1 === index ? '' : `1px solid ${color.border}`, color: color.headColor }">{{ item }}</div>
      </div>
      <div class="body" style="display: flex;" v-for="(item, index) in tbody" :key="index" :style="{ borderTop: `1px solid ${ color.border }` }">
        <div v-for="(c, j) in item" :key="j" style="padding:10px;" :style="{ width: `${pjWidth}%`, borderRight: item.length - 1 === j ? '' : `1px solid ${ color.border }`, color: color.bodyColor }">
          <input type="text" v-if="!inputText" v-model="tbody[index][j]" placeholder="" style="width:100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;" :style="{ border: hideBorder ? 'none' : '' }">
          {{ inputText ? tbody[index][j] : '' }}
        </div>
      </div>
    </div>

    <div class="table" style="width:1000px;margin: 100px auto 100px auto;" v-if="thead.length" :style="{ border: `1px solid ${ color.border }` }" ref="tableForLi">
      <ul class="header" :style="{ background: color.headBg }" style="width:100%;height:40px;">
        <li v-for="(item, index) in thead" :key="index" style="float:left;padding:10px;height:100%;" :style="{ width: `${pjWidth}%`, borderRight: thead.length - 1 === index ? '' : `1px solid ${color.border}`, color: color.headColor }">{{ item }}</li>
      </ul>
      <ul class="body" v-for="(item, index) in tbody" :key="index" :style="{ borderTop: `1px solid ${ color.border }` }" style="width:100%;height:50px;">
        <li v-for="(c, j) in item" :key="j" style="float:left;padding:10px;height:100%;" :style="{ width: `${pjWidth}%`, borderRight: item.length - 1 === j ? '' : `1px solid ${ color.border }`, color: color.bodyColor }">
          <input type="text" v-if="!inputText" v-model="tbody[index][j]" placeholder="" style="width:100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;" :style="{ border: hideBorder ? 'none' : '' }">
          {{ inputText ? tbody[index][j] : '' }}
        </li>
      </ul>
    </div>

    <el-card>
      <div slot="header" class="clearfix">
        <span>表格代码</span>
        <el-button @click="getHtml" size="mini">获取表格代码</el-button>
        <el-button @click="getHtmlForDiv" size="mini">获取Div代码</el-button>
        <el-button @click="getHtmlForUl" size="mini">获取ul-li代码</el-button>
      </div>
      <el-card>{{ html }}</el-card>
    </el-card>
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
        inputText: false,
        lineNumber: 0,
        color: {
          headBg: '#99bbdd',
          border: '#ccc',
          headColor: '#545454',
          bodyColor: '#545454'
        },
        html: '',
        pjWidth: '' // 平均宽度
      }
    },
    layout: 'bar',
    methods: {
      addThead() {
        if (!this.theadValue.trim()) return
        this.thead.push(this.theadValue)
        this.theadValue = ''
        if (this.tbody.length) {
          this.updateBody()
        } else {
          this.addTbody()
        }
        this.updateWidth()
      },
      closeThead(index) {
        this.thead.splice(index, 1)
        this.deleteBody(index)
        this.updateWidth()
      },
      // 更新宽度
      updateWidth() {
        this.pjWidth = (1000 / (this.thead.length * 1000)).toFixed(2) * 100
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
        if (!this.lineNumber) return
        // 最少保留一行数据
        // 实际比输入的少一行
        this.$confirm(`请确认您将删除第${this.lineNumber}行数据，此操作不可恢复。`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const trueNumber = this.lineNumber - 1
          if (this.lineNumber > this.tbody.length) {
            this.$message('请输入正确的行数。')
          } else {
            this.tbody.splice(trueNumber, 1)
          }
        }).catch(() => {
        })
      },
      getHtml() {
        let isChange = false
        if (!this.inputText) {
          this.inputText = true
          isChange = true
        }
        setTimeout(() => {
          this.html = this.$refs.table.outerHTML.replaceAll('<!---->', '')
          if (isChange) {
            this.inputText = false
          }
        }, 0)
      },
      getHtmlForDiv() {
        let isChange = false
        if (!this.inputText) {
          this.inputText = true
          isChange = true
        }
        setTimeout(() => {
          this.html = this.$refs.tableForDiv.outerHTML.replaceAll('<!---->', '')
          if (isChange) {
            this.inputText = false
          }
        }, 0)
      },
      getHtmlForUl() {
        let isChange = false
        if (!this.inputText) {
          this.inputText = true
          isChange = true
        }
        setTimeout(() => {
          this.html = this.$refs.tableForLi.outerHTML.replaceAll('<!---->', '')
          if (isChange) {
            this.inputText = false
          }
        }, 0)
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

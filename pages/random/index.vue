<template>
  <div>
    <div class="header">
      <h1>随机密码生成器 - 随机字符串生成器</h1>
      <h2>Random Password Generator</h2>
    </div>

    <el-form id="main" class="random-form" label-width="200px" :model="formItem">
      <el-form-item label="数字">
        <el-checkbox v-model="formItem.number"></el-checkbox>
      </el-form-item>
      <el-form-item label="小写字母">
        <el-checkbox v-model="formItem.small"></el-checkbox>
      </el-form-item>
      <el-form-item label="大写字母">
        <el-checkbox v-model="formItem.big"></el-checkbox>
      </el-form-item>
      <el-form-item label="需要添加的特殊符号">
        <el-input type="text" v-model="formItem.spec"></el-input>
      </el-form-item>
      <el-form-item label="排除字符">
        <el-input type="text" v-model="formItem.rid"></el-input>
      </el-form-item>
      <el-form-item label="字符不重复">
        <el-checkbox v-model="formItem.repeat"></el-checkbox>
      </el-form-item>
      <el-form-item label="生成长度">
        <el-input type="number" v-model="formItem.len"></el-input>
      </el-form-item>
      <el-form-item label="生成数量">
        <el-input type="number" v-model="formItem.createNumber"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="generate">生成字符串</el-button>
      </el-form-item>
      <el-form-item>
        <el-input type="text" onfocus="this.select()"v-for="(item, index) in createValue" :value="item" :key="index" readonly style="margin-bottom:10px;" />
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    components: {},
    name: 'random',
    layout: 'bar',
    head() {
      return {
        title: '随机字符生成器'
      }
    },
    data() {
      return {
        formItem: {
          number: true, // 是否数字
          small: true, // 是否小写
          big: true, // 是否大写
          spec: '', // 特殊符号
          rid: '', // 排除字符
          repeat: true, // 是否重复
          len: '12', // 生成长度
          createNumber: '1' // 生成数量
        },
        createValue: ''
      }
    },
    methods: {
      rand(e) {
        return Math.floor(Math.random() * e)
      },
      loadConfig() {
        const a = {};
        [].forEach.call(form.getElementsByTagName("input"), function (e) {
          a[e.name] = "checkbox" === e.type ? e.checked : e.value
        })
        localStorage.setItem("passwordConfig", JSON.stringify(a))
      },
      saveConfig() {
        const a = {};
        [].forEach.call(form.getElementsByTagName("input"), function (e) {
          a[e.name] = "checkbox" === e.type ? e.checked : e.value
        })
        localStorage.setItem("passwordConfig", JSON.stringify(a))
      },
      generate() {
        let e = ''
        const a = []
        const o = this.formItem.repeat // 是否重复
        const r = Number(this.formItem.createNumber) // 生成数量
        const item = {
          number: this.formItem.number,
          small: this.formItem.small,
          big: this.formItem.big,
          spec: this.formItem.spec,
          rid: this.formItem.rid,
          repeat: this.formItem.repeat,
          len: this.formItem.len,
          createNumber: this.formItem.createNumber
        }
        for (
          item.number && (e += "0123456789"),
          item.small && (e += "abcdefghijklmnopqrstuvwxyz"),
          item.big && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
          item.spec && (e += item.spec),
          item.rid && (e = e.replace(new RegExp(item.rid.split("").join("|"), "g"), ""));
          a.length < r;) {
          for (var t = e.split(""), c = "", n = 0, l = item.len; n < l && !(t.length < 1); n++) {
            const f = this.rand(t.length);
            c += t[f], o && t.splice(f, 1)
          } - 1 === a.indexOf(c) && a.push(c)
        }
        this.createValue = a
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header{text-align: center;
    h1{color: #444;  font-size: 300%; font-weight:300;}
    h2{color: #666;  font-size: 125%; font-weight:300;}
  }
  .random-form{width:750px;margin:0 auto;
    .el-form-item{margin-bottom:5px;}
  }
</style>

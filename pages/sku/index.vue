<template>
  <div id="priceByAttr">
    <el-radio-group v-model="moreSpec">
      <el-radio :label="false">单规格</el-radio>
      <el-radio :label="true">多规格</el-radio>
    </el-radio-group>
    <!-- 单规格 -->
    <div class="only-spec" v-if="!moreSpec">
      <div class="">
        <el-form :model="formItem" class="el-form" size="mini" label-width="100px">
          <el-form-item label="规格编码">
            <el-input placeholder="规格编码" v-model="formItem.sku"></el-input>
          </el-form-item>
          <el-form-item label="成本价">
            <el-input placeholder="成本价" v-model="formItem.cost"></el-input>
          </el-form-item>
          <el-form-item label="库存">
            <el-input placeholder="库存" v-model="formItem.num"></el-input>
          </el-form-item>
          <el-form-item label="销售价">
            <el-input placeholder="销售价" v-model="formItem.price"></el-input>
          </el-form-item>
          <el-form-item label="重量">
            <el-input placeholder="重量" v-model="formItem.weight"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="more-spec" v-if="moreSpec">
      <div class="">
        <div class="">
          <el-card>
            <div slot="header" class="clearfix">
              <span>规格信息</span>
            </div>
            <el-card class="box-card" v-for="(item, index) in this.specList" :key="index">
              <div slot="header" class="clearfix">
                <span>{{ item.name }}</span>
              </div>
              <div class="text item">
                <el-tag v-for="(child, j) in item.list" :key="j" closable @close="delSpecValue(index, j)" size="small">{{ child.name }}</el-tag>
                <el-input v-model="childItem[index]" size="mini" placeholder="请输入规格值" style="width:200px;" @keyup.enter.native="addChildSpec(index)">
                  <el-button slot="append" icon="el-icon-plus" @click="addChildSpec(index, item)">添加</el-button>
                </el-input>
              </div>
            </el-card>
            <el-card class="">
              <el-form class="" class="el-form" v-if="addItem.add" label-width="100px" size="mini">
                <el-form-item label="规格名称">
                  <el-input placeholder="规格名称" v-model="addItem.name"></el-input>
                </el-form-item>
                <!--<el-form-item label="规格值">-->
                <!--<el-input placeholder="规格值" v-model="addItem.value"></el-input>-->
                <!--</el-form-item>-->
                <el-form-item class="">
                  <el-button @click="addSpec({ name: addItem.name })" type="primary">确认</el-button>
                  <el-button @click="addItem.add = false" type="info">取消</el-button>
                </el-form-item>
              </el-form>
              <div class="">
                <el-button size="mini" @click="addItem.add = true">添加规格值</el-button></div>
            </el-card>
            <el-card>
              <el-row class="" type="flex" :gutter="10">
                <el-col style="text-align:right">批量设置：</el-col>
                <el-col><el-input placeholder="请输入成本价" size="mini" v-model="defaultData.cost"></el-input></el-col>
                <el-col><el-input placeholder="请输入销售价" size="mini" v-model="defaultData.price"></el-input></el-col>
                <el-col><el-input placeholder="请输入库存" size="mini" v-model="defaultData.num"></el-input></el-col>
                <el-col><el-input placeholder="请输入重量" size="mini" v-model="defaultData.weight"></el-input></el-col>
                <el-col><el-button @click="uniteSet" size="mini" type="primary">确定</el-button></el-col>
              </el-row>
            </el-card>
          </el-card>
        </div>
        <div class="" v-if="productSpec.length">
          <el-table :data="productSpec" :span-method="objectSpanMethod">
            <el-table-column type="index"></el-table-column>
            <el-table-column v-for="(item, index) in specList" :key="index" :label="item.name">
              <template slot-scope="scope">
                {{ getSpecAttr(index, scope.$index)['name'] }}{{ getSpecAttr(index, scope.$index)['id'] }}
              </template>
            </el-table-column>
            <el-table-column label="图片">
              <template slot-scope="scope">
                <upload-only v-model="productSpec[scope.$index].image_id" :size="25" :image="{ src: productSpec[scope.$index].image_url }"></upload-only>
              </template>
            </el-table-column>
            <el-table-column label="规格编码" prop="sku">
              <template slot-scope="scope">
                <el-input size="mini" placeholder="请输入规格编码" v-model="productSpec[scope.$index].sku"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="成本价（元）" prop="cost">
              <template slot-scope="scope">
                <el-input size="mini" placeholder="请输入成本价（元）" v-model="productSpec[scope.$index].cost"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="库存" prop="num">
              <template slot-scope="scope">
                <el-input size="mini" placeholder="请输入库存" v-model="productSpec[scope.$index].num"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="销售价（元）" prop="price">
              <template slot-scope="scope">
                <el-input size="mini" placeholder="请输入销售价（元）" v-model="productSpec[scope.$index].price"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="重量" prop="weight">
              <template slot-scope="scope">
                <el-input size="mini" placeholder="请输入重量" v-model="productSpec[scope.$index].weight"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="是否启用">
              <template slot-scope="scope">
                <el-switch v-model="productSpec[scope.$index].use" :active-value="1" :inactive-value="0"></el-switch>
              </template>
            </el-table-column>
          </el-table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // 说明一 specList
  /*
    id: '', // 预留项，设计中添加即上传服务器并创建
    name: this.addItem.name, // 规格名称
    list: [{
      id: '',
      value: this.addItem.value // 规格值名称
    }]
  */
  // 说明二 productSpec
  // { 图片，编码，成本价，销售价，库存， 重量，启用, 属性 }
  // 属性为规格值组合,格式：id_id_id
  // { url: '', sku: '', cost: '', price: '', num: '', weight: '', use: '', attr: '' }

  export default {
    name: 'pricebyattr',
    components: {
      UploadOnly: resolve => {
        return require(['@/components/image/only.vue'], resolve)
      }
    },
    props: {
      value: [Array, Object]
    },
    layout: 'bar',
    data() {
      return {
        formItem: { // 单规格属性
          image_id: null, // 图片地址
          sku: '', // 编码
          cost: '', // 进货价
          price: '', // 销售价
          num: '', // 数量
          weight: '', // 重量
          use: 1, // 是否启用
          attr: '0' // 属性
        },
        addItem: { // 添加栏规格
          add: false, // 是否添加状态
          name: '' // 规格名
        },
        childItem: [], // 添加已有的规格子类输入框
        defaultData: { // 统一设置信息
          cost: '', // 成本
          price: '', // 销售价
          num: '', // 库存
          weight: '' // 重量
        },
        specList: [], // 规格总览 内容参见说明一
        productSpec: [ // 规格列表 内容参见说明二
        ],
        moreSpec: false, // 多规格
        factImgUrl: [],
        defaultChange: false, // 防止多次触发watch
        sqlData: []
      }
    },
    watch: {
      value: {
        handler(n) {
          if (this.defaultChange) {
            this.defaultChange = false
          } else {
            this.refresh()
          }
        },
        deep: true
      },
      moreSpec(n) {
        this.updateValue()
      },
      formItem: {
        handler(n) {
          if (this.defaultChange) {
            this.defaultChange = false
          } else {
            this.updateValue()
          }
        },
        deep: true
      }
    },
    created() {
    },
    methods: {
      saveSpec({ name = '', id = '' } = {}) {
        console.log(name, id)
        return new Promise((resolve, reject) => {
          // 没有数据
          if (name === '' || id === '') {
            throw Error('添加错误')
            return
          }
          // 如果有id则代表添加，没有则表示删除
          if (id) {
            this.sqlData.forEach((value, index) => {
              if (value.id === id) {
                // 取得父数据
                this.sqlData[index].list.push({
                  id: value.list.length || 1,
                  value: name
                })
                resolve({
                  code: 200,
                  data: {
                    id: value.list.length || 1,
                    value: name
                  },
                  message: '添加成功'
                })
              }
            })
          } else {
            this.sqlData.push({
              id: this.sqlData.length || 1,
              value: name,
              list: []
            })
            resolve({
              code: 200,
              data: {
                id: this.sqlData.length || 1,
                value: name
              },
              message: '添加成功'
            })
          }
          reject()
        })
      },
      // 创建新的数据
      addData(id) {
        // const vm = this
        const product = {
          image_id: null, // 图片地址
          sku: '', // 编码
          cost: '', // 进货价
          price: '', // 销售价
          num: '', // 数量
          weight: '', // 重量
          use: 1, // 是否启用
          attr: '' // 属性
        }
        // 添加新的规格的时候更新后缀
        this.productSpec.forEach((value, index) => {
          this.productSpec[index].sku = `${this.productSpec[index].sku}_${id}`
          this.productSpec[index].attr = `${this.productSpec[index].attr}_${id}`
        })
        let count = this.countSum(0)
        // 判断当前的规格生成的条数和商品条数是否能对上
        if (count === this.productSpec.length) return
        // 如果有数据需要减1
        if (this.productSpec.length) {
          --count
        }
        // 设计上只有没有数据的时候才会走到这里
        for (let i = 0; i < count; i++) {
          this.productSpec.push({
            ...product,
            sku: id,
            attr: id
          })
        }
        this.updateValue()
      },
      // 生成指定索引开始的id列表，包含自身
      getIndexIdList(key, id) {
        // 索引总数
        // id通过自身传递,不需要包含进数组
        const list = this.specList.slice(key + 1, this.specList.length)
        if (!list.length) {
          return [id]
        }
        let arr = []
        const getList = (lst, i) => {
          const idList = []
          if (i === list.length - 1) {
            // 最后一个，也有可能是唯一一个
            // 依次排列数据返回
            lst.forEach((value, index) => {
              idList.push(value.id)
            })
          } else {
            // 不是最后一个
            // 取下一级数据
            lst.forEach((value, j) => {
              const childList = getList(list[i + 1].list, i + 1)
              childList.forEach((ids, k) => {
                idList.push(`${value.id}_${ids}`)
              })
            })
          }
          return idList
        }
        // 循环后面的列表
        arr = getList(list[0].list, 0)
        // 添加前置id
        arr.forEach((value, index) => {
          arr[index] = `${id}_${value}`
        })
        return arr
      },
      // 生成指定索引向上的id列表，不包含自身
      getBeforeIdList(key) {
        if (key === 0) {
          return []
        }
        const list = this.specList.slice(0, key)
        let arr = []
        const getList = (lst, i) => {
          const idList = []
          if (i === list.length - 1) {
            // 如果是最后一个，也有可能是唯一一个
            lst.forEach((value, index) => {
              idList.push(value.id)
            })
          } else {
            // 不是最后一个
            // 取下一级数据
            lst.forEach((value, j) => {
              const childList = getList(list[i + 1].list, i + 1)
              childList.forEach((ids, k) => {
                idList.push(`${value.id}_${ids}`)
              })
            })
          }
          return idList
        }
        // 循环后面的列表
        arr = getList(list[0].list, 0)
        return arr
      },
      // 更新数据 主规格增加
      updateData(index, id) {
        const product = {
          image_id: null, // 图片地址
          sku: '', // 编码
          cost: '', // 进货价
          price: '', // 销售价
          num: '', // 数量
          weight: '', // 重量
          use: 1, // 是否启用
          attr: '' // 属性
        }
        if (this.specList.length === 1) {
          this.productSpec.push({
            ...product,
            sku: id,
            attr: id
          })
        } else {
          // 前置id列表
          const before = this.getBeforeIdList(index)
          // 后置id列表
          const after = this.getIndexIdList(index, id)
          // 新增的数据列表
          let allIdList = []
          if (before.length) {
            before.forEach((value) => {
              after.forEach((value2) => {
                allIdList.push(`${value}_${value2}`)
              })
            })
          } else {
            allIdList = allIdList.concat(after)
          }
          // 获得数据增加间隔距离
          const space = this.countBeforeNum(index)
          if (before.length) {
            for (let i = 0; i < before.length; i++) {
              const list = allIdList.slice(i * after.length, (i + 1) * after.length)
              list.forEach((value, j) => {
                this.productSpec.splice(space + space * i + list.length * i + j, 0, {
                  ...product,
                  sku: value,
                  attr: value
                })
              })
            }
          } else {
            const list = allIdList.slice(0, after.length)
            list.forEach((value, j) => {
              this.productSpec.push({
                ...product,
                sku: value,
                attr: value
              })
            })
          }
        }
        this.updateValue()
      },
      // 统一设置数据
      uniteSet() {
        this.productSpec.forEach((value, index) => {
          this.$set(this.productSpec[index], 'weight', this.defaultData.weight)
          this.$set(this.productSpec[index], 'price', this.defaultData.price)
          this.$set(this.productSpec[index], 'cost', this.defaultData.cost)
          this.$set(this.productSpec[index], 'num', this.defaultData.num)
        })
      },
      /*
      * 添加新的规格名称
      * @params
      *   name 添加的名称
      *   id 父级id
      * */
      addSpec({ name = '', id = 0, callback } = {}) {
        const info = this.specList.filter(o => o.id === id)
        if (info.length) {
          const child = info[0].list.filter(o => o.name === name)
          if (child.length) {
            this.$message('该规格已存在')
            return
          }
        }
        this.saveSpec({ name, id }).then((res) => {
          // 如果添加的时候有 id 则表示添加的子级项
          if (id) {
            let index = 0
            this.specList.forEach((value, j) => {
              if (value.id === info[0].id) {
                index = j
              }
            })
            if (info[0].list.length) {
              info[0].list.push({
                id: res.data.id,
                name: name // 规格值名称
              })
              this.updateData(index, res.data.id)
            } else {
              info[0].list.push({
                id: res.data.id,
                name: name // 规格值名称
              })
              this.addData(res.data.id)
            }
          } else {
            this.specList.push({
              id: res.data.id, // 预留项，设计中添加即上传服务器并创建
              name: name, // 规格名称
              list: []
            })
            this.addItem = {
              add: false,
              name: ''
            }
            // this.addData(res.data.id)
          }
          callback && callback()
        }).catch((e) => {
        })
      },
      // 添加已有的规格的规格子类
      addChildSpec(index) {
        const info = this.specList[index]
        if (!info) {
          this.$message('规格值添加异常')
          return
        }
        const child = info.list.filter(o => o.name === this.childItem.name)
        if (child.length) {
          this.$message('请注意，已有该规格')
        }
        this.addSpec({ name: this.childItem[index], id: info.id, callback: () => {
          this.childItem[index] = ''
        } })
      },
      // 删除规格值
      delSpecValue(key, index) {
        const list = this.specList[key].list
        const id = `${list[index].id}`
        // 如果list只有一个，则替换并删除父级规格，如果有多个则删除
        if (list.length > 1) {
          for (let i = 0; i < this.productSpec.length; i++) {
            const attr = this.productSpec[i].attr.split('_')
            if (attr.includes(id)) {
              this.productSpec.splice(i, 1)
              --i
            }
          }
          // 删除商品完成之后删除规格
          this.specList[key].list.splice(index, 1)
        } else {
          for (let i = 0; i < this.productSpec.length; i++) {
            const attr = this.productSpec[i].attr.split('_')
            if (attr.includes(id)) {
              attr.remove(id)
              let newSku = ''
              attr.forEach((value, j) => {
                if (j > 0) {
                  newSku = `${newSku}_${value}`
                } else {
                  newSku = value
                }
              })
              this.productSpec[i].attr = newSku
              this.productSpec[i].sku = newSku
            }
          }
          this.specList.splice(key, 1)
        }
      },
      // 计算属性的乘积
      countSum(index) {
        let num = 1
        this.specList.forEach((item, j) => {
          if (j >= index && item.list.length) {
            num *= item.list.length
          }
        })
        return num
      },
      // 计算指定位置同级的数据条数
      countBeforeNum(key) {
        let num = 1
        // 所有的乘积
        const allNum = this.countSum(key)
        if (this.specList[key].length === 1) {
          num = allNum
        } else {
          const list = this.specList[key].list
          num = allNum / list.length * (list.length - 1)
        }
        return num
      },
      /*
      根据传入的属性值，拿到相应规格的属性
      @params
        specIndex 规格项目在 advancedSpecification 中的序号
        index 所有属性在遍历时的序号
      */
      getSpecAttr(specIndex, index) {
        // 获取当前规格项目下的属性值
        const currentValues = this.specList[specIndex].list
        let indexCopy
        // 判断是否是最后一个规格项目
        if (this.specList[specIndex + 1] && this.specList[specIndex + 1].list.length) {
          indexCopy = index / this.countSum(specIndex + 1)
        } else {
          indexCopy = index
        }
        const i = Math.floor(indexCopy % currentValues.length)
        if (i.toString() !== 'NaN') {
          return currentValues[i]
        } else {
          return {
            id: '',
            value: ''
          }
        }
      },
      // 判断是否显示
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex >= this.specList.length || columnIndex === 0) return [1, 1]
        return [rowIndex % this.countSum(columnIndex) === 0 ? this.countSum(columnIndex) : 0, 1]
      },
      // 设置商品规格
      setSpecList(list) {
        this.specList = list
      },
      // 设置商品信息
      setProduct(list) {},
      // 获得列表规格数据
      getSpecList() {
        return this.specList
      },
      // 获取最终产品数据
      getProductSpec() {
        return this.productSpec
      },
      // 更新数据
      updateValue() {
        this.defaultChange = true
        if (this.moreSpec) {
          this.$emit('input', this.productSpec)
        } else {
          this.$emit('input', this.formItem)
        }
      },
      refresh() {
        this.defaultChange = true
        if (this.value.length && this.value[0].attr === '0') {
          this.moreSpec = false
          this.formItem = {
            ...this.value[0]
          }
        } else {
          this.moreSpec = true
          this.productSpec = this.value
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  *{
    list-style: none;
  }
  .more-spec{border:1px solid #f5f5f5;}
  #priceByAttr {padding: 20px;}
</style>

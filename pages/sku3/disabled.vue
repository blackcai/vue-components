<template>
  <div>
    <div v-for="(item, index) in specsGroupDtos" :key="index">
      <div>
        <div>{{ item.name }}</div>
        <el-button v-for="(child, j) in item.specsValues" size="mini" :key="j"
                   :type="subIndex[index] === j ? 'primary' : ''" :disabled="!goodsStatus[index][j]"
                   @click="specificationBtn(child, index, $event, j)">{{ child }}
        </el-button>
      </div>
    </div>
    <div>总库存：{{ goodsNum }}</div>
    <!--<div>sku库存：{{ skuNum }}</div>-->
    <div class="">
      <div>说明</div>
      <div>当前页面的组件逻辑模块是百度找的。</div>
      <div>其它几个类型：
        <a href="/sku3/other">当前页面组件的初始状态</a>|
        <a href="/sku3/default">基础功能</a>|
        <a href="/sku3/remove">可以取消选中</a>
      </div>
      <div>最终的目的是实现淘宝的sku选择器功能</div>
    </div>
  </div>
</template>

<script>
  // 按钮禁用
  export default {
    name: 'Sku3',
    layout: 'bar',
    data() {
      return {
        specsValueDtos: [],
        specsGroupDtos: [],
        selectArr: [], // 存放被选中的值
        shopItemInfo: {}, // 存放要和选中的值进行匹配的数据
        subIndex: [], // 是否选中 因为不确定是多规格还是单规格，所以这里定义数组来判断
        goodsNum: 0, // 库存
        goodsStatus: [],
        skuNum: 0
      }
    },
    created() {
      this.createData()
      for (let i in this.specsValueDtos) {
        this.shopItemInfo[this.specsValueDtos[i].propvalids] = this.specsValueDtos[i] // 修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
      }
      this.checkItem()
    },
    methods: {
      createData() {
        // 创造虚拟的数据
        const specsGroupDtos = [
          {
            name: '套餐',
            specsValues: ['一号', '二号', '三号']
          },
          {
            name: '规格',
            specsValues: ['s', 'm', 'l', 'xl', 'xxl']
          },
          {
            name: '颜色',
            specsValues: ['赤', '橙', '黄', '绿', '蓝']
          },
          {
            name: '版式',
            specsValues: ['非主流', '杀马特', '洗剪吹']
          }
        ]
        this.specsGroupDtos = specsGroupDtos
        this.specsValueDtos = []
        // this.specsSelect = ['s', '赤', '非主流']
        let num = 0
        const fn = (value, index) => {
          if (specsGroupDtos.length - 1 === index) {
            const n = Math.floor(Math.random() * 1.3)
            this.specsValueDtos.push({
              specCode: 490,
              propvalids: `${value}`,
              skuPrice: 179.00 * index,
              skuCostPrice: 179.00 * index,
              skuStock: n
            })
            num += n
          } else {
            specsGroupDtos[index + 1].specsValues.forEach((v, j) => {
              fn(`${value},${v}`, index + 1)
            })
          }
        }
        specsGroupDtos[0].specsValues.forEach((value, index) => {
          fn(value, 0)
        })
        this.goodsNum = num
        console.log('总库存', num)
      },
      specificationBtn(item, n, event, index) {
        if (this.selectArr[n] !== item) {
          this.selectArr[n] = item
          this.subIndex[n] = index

        } else {
          this.selectArr[n] = ''
          this.subIndex[n] = -1 //去掉选中的颜色
        }
        this.checkItem()
      },
      checkItem() {
        const option = this.specsGroupDtos
        const result = [] // 定义数组存储被选中的值
        this.goodsNum = 0
        for (let i in option) {
          result[i] = this.selectArr[i] ? this.selectArr[i] : ''
        }
        for (let i in option) {
          const last = result[i] // 把选中的值存放到字符串last去
          for (let k in option[i].specsValues) {
            result[i] = option[i].specsValues[k] // 赋值，存在直接覆盖，不存在往里面添加name值
            this.goodsStatus[i] = this.goodsStatus[i] ? this.goodsStatus[i] : []
            const product = this.getProduct(result)
            this.goodsStatus[i][k] = product.status // 在数据里面添加字段isShow来判断是否可以选择
            this.goodsNum += product.num
          }
          result[i] = last // 还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
        }
        this.$forceUpdate() // 重绘
      },
      getProduct(result) {
        console.log(result)
        for (let i in result) {
          if (result[i] == '') {
            // 如果数组里有为空的值，那直接返回空
            return {
              status: true,
              num: 0
            }
          }
        }
        // 匹配选中的数据的库存，若不为空返回true反之返回false
        return {
          status: this.shopItemInfo[result].skuStock === 0 ? false : true,
          num: this.shopItemInfo[result].skuStock
        }
      }
    },
    computed: {}
  }
</script>

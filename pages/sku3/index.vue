<template>
  <div id="vmsimulatedDATA" class="productBox">
    <div class="productConten">
      <div class="product-delcom" v-for="(ProductItem,n) in specsGroupDtos" :key="n">
        <p>{{ProductItem.name}}</p>
        <ul class="product-footerlist clearfix">
          <li
            v-for="(oItem,index) in ProductItem.specsValues"
            :key="index"
            @click="specificationBtn(oItem,n,$event,index)"
            :class="[!goodsStatus[n][index] ? '' : 'noneActive', subIndex[n] === index ? 'productActive' : '']"
          >{{ oItem }}</li>
        </ul>
      </div>
    </div>
    <div>{{ goodsNum }}</div>
  </div>
</template>

<script>
// 按钮禁用
export default {
  name: 'Sku3',
  data () {
    return {
      specsValueDtos: [],
      specsGroupDtos: [],
      selectArr: [], // 存放被选中的值
      shopItemInfo: {}, // 存放要和选中的值进行匹配的数据
      subIndex: [], // 是否选中 因为不确定是多规格还是单规格，所以这里定义数组来判断
      goodsNum: 0, // 库存
      goodsStatus: []
    }
  },
  created () {
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
          const n = Math.floor(Math.random() * 1.1)
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
      console.log('总库存：', num)
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
    checkItem () {
      const option = this.specsGroupDtos
      const result = [] // 定义数组存储被选中的值
      for (let i in option) {
        console.log(i)
        result[i] = this.selectArr[i] ? this.selectArr[i] : ''
      }
      for (let i in option) {
        const last = result[i] // 把选中的值存放到字符串last去
        for (let k in option[i].specsValues) {
          result[i] = option[i].specsValues[k] // 赋值，存在直接覆盖，不存在往里面添加name值
          this.goodsStatus[i] = []
          this.goodsStatus[i][k] = this.isMay(result) // 在数据里面添加字段isShow来判断是否可以选择
        }
        result[i] = last // 还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
      }
      this.$forceUpdate() //重绘
    },
    isMay(result) {
      for (let i in result) {
        if (result[i] == '') {
          return true //如果数组里有为空的值，那直接返回true
        }
      }
      return this.shopItemInfo[result].stock === 0 ? false : true //匹配选中的数据的库存，若不为空返回true反之返回false
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

.productBox {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
}

.productConten {
  margin-bottom: 1rem;
}

.product-delcom {
  padding: 0.24rem 7%;
  color: #323232;
  font-size: 0.26rem;
  border-bottom: 1px solid #eeeeee;
}

.product-footerlist {
  margin-top: 0.1rem;
}

.product-footerlist li {
  border: 1px solid #606060;
  border-radius: 0.08rem;
  color: #606060;
  text-align: center;
  padding: 0.04rem 0.16rem;
  float: left;
  margin-right: 0.16rem;
  min-width: 0.96rem;
  margin-bottom: 0.16rem;
}

.product-footerlist li.productActive {
  background-color: #1a1a29;
  color: #fff;
  border: 1px solid #1a1a29;
}

.product-footerlist li.noneActive {
  background-color: #ccc;
  opacity: 0.4;
  color: #000;
  pointer-events: none;
}

</style>

<template>
  <div>
    <div v-for="(item, index) in specsGroupDtos" :key="index">
      <div>
        <div>{{ item.name }}</div>
        <el-button v-for="(child, j) in item.specsValues" size="mini" :key="j" :type="specsSelect[index] === child ? 'primary' : ''" @click="tapSpec(child, index)">{{ child }}</el-button>
      </div>
    </div>
    <div>库存：{{ specsDot }}</div>
  </div>
</template>

<script>
  // 默认有选中项，且无法取消
  export default {
    name: 'Sku3',
    data() {
      return {
        specsGroupDtos: [], // 规格列表
        specsValueDtos: [], // 商品规格数据
        specsSelect: [], // 已选规格
        specsDot: 0 // 库存
      }
    },
    created() {
      this.createData()
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
        this.specsSelect = ['s', '赤', '非主流']
        this.setDot()
        const fn = (value, index) => {
          if (specsGroupDtos.length - 1 === index) {
            this.specsValueDtos.push({
              specCode: 490,
              propvalids: `${value}`,
              skuPrice: 179.00 * index,
              skuCostPrice: 179.00 * index,
              skuStock: Math.floor(Math.random() * 2)
            })
          } else {
            specsGroupDtos[index + 1].specsValues.forEach((v, j) => {
              fn(`${value},${v}`, index + 1)
            })
          }
        }
        specsGroupDtos[0].specsValues.forEach((value, index) => {
          fn(value, 0)
        })
      },
      tapSpec(name, index) {
        this.$set(this.specsSelect, index, name)
        this.setDot(index)
      },
      setDot(index) {
        // 设置显示的剩余库存
        // 组装规格名称
        let specName = '' // 名称
        this.specsSelect.forEach(value => {
          specName = specName ? `${specName},${value}` : `${value}`
        })
        const specInfo = this.specsValueDtos.filter(o => o.propvalids.replace(/\s*/g,"") === specName.replace(/\s*/g,""))
        if (specInfo.length) {
          this.specsDot = specInfo[0].skuStock
        }
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped></style>

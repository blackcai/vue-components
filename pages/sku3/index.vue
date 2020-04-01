<template>
  <div>
    <div v-for="(item, index) in specsGroupDtos" :key="index">
      <div>
        <div>{{ item.name }}</div>
        <el-button v-for="(child, j) in item.specsValues" :key="j" :type="specsSelect[index] === child ? 'primary' : ''" @click="tapSpec(child, index)">{{ child }}</el-button>
      </div>
    </div>
    <div>库存：{{ specsDot }}</div>
  </div>
</template>

<script>
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
        console.log(this.specsValueDtos)
      },
      tapSpec(name, index) {
        this.$set(this.specsSelect, index, this.specsSelect[index] === name ? '' : name)
        // 表最后一个
        // if (this.specsGroupDtos.length - 1 === index) {
        //   // 最后一项
        // } else {
        //   this.specsSelect.splice(index + 1, 10)
        // }
        this.setDot(index)
      },
      setDot(index) {
        // 设置显示的剩余库存
        let specsIndex = index // 基准索引
        let dot = 0 // 库存
        let specName = '' // 名称
        // 组装规格名称
        this.specsSelect.forEach(value => {
          specName = specName ? `${specName},${value}` : `${value}`
        })
        if (this.specsGroupDtos.length - 1 === index) {
          // 最后一个，直接匹配
          const specInfo = this.specsValueDtos.filter(o => o.propvalids.replace(/\s*/g,"") === specName.replace(/\s*/g,""))
          if (specInfo.length) {
            this.specsDot = specInfo[0].skuStock
          }
          return
        }
        const fn = (value, index) => {
          if (this.specsGroupDtos.length - 1 === index) {
            // 最后一级
            const specInfo = this.specsValueDtos.filter(o => o.propvalids.replace(/\s*/g,"") === value.replace(/\s*/g,""))
            if (specInfo.length){
              dot += specInfo[0].skuStock
            }
          } else {
            this.specsGroupDtos[index + 1].specsValues.forEach((val, j) => {
              fn(`${value},${val}`, index + 1)
            })
          }
        }
        this.specsGroupDtos[specsIndex + 1].specsValues.forEach((value, j) => {
          fn(`${specName},${value}`, specsIndex + 1)
        })
        this.specsDot = dot
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped></style>

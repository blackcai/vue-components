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
  // 选中项可以去除
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
        // this.specsSelect = ['s', '赤', '非主流']
        let num = 0
        const fn = (value, index) => {
          if (specsGroupDtos.length - 1 === index) {
            const n = Math.floor(Math.random() * 200)
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
        console.log('总库存：', num)
        this.setDot()
      },
      tapSpec(name, index) {
        this.$set(this.specsSelect, index, this.specsSelect[index] === name ? '' : name)
        // if (this.specsSelect.length !== this.specsGroupDtos.length) return
        this.specsDot = 0
        this.setDot(index)
      },
      setDot(index) {
        // 设置显示的剩余库存
        // 组装规格名称
        const fn = (value, idx) => {
          let specName = value
          if (this.specsSelect[idx]) {
            // 如果有值
            let name = specName ? `${specName},${this.specsSelect[idx]}` : this.specsSelect[idx]
            if (idx === this.specsGroupDtos.length - 1) {
              // 如果已经是最后一项了
              this.changeDot(name, true)
            } else {
              fn(name, idx + 1)
            }
          } else {
            this.specsGroupDtos[idx].specsValues.forEach((val, k) => {
              let name = specName ? `${specName},${val}` : val
              if (idx === this.specsGroupDtos.length - 1) {
                // 如果已经是最后一项了
                this.changeDot(name, true)
              } else {
                fn(name, idx + 1)
              }
            })
          }
        }
        fn('', 0)
      },
      changeDot(value, status) {
        // 直接改变库存数量
        const specInfo = this.specsValueDtos.filter(o => o.propvalids.replace(/\s*/g,"") === value.replace(/\s*/g,""))
        if (specInfo.length) {
          if (status) {
            this.specsDot += specInfo[0].skuStock
          } else {
            this.specsDot = specInfo[0].skuStock
          }
        }
      },
      setDisabled() {
        // 处理库存
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped></style>

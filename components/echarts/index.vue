<template>
  <div ref="echarts" :style="{width: width, height: height}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
      }
    },
    props: {
      options: {
        type: Object,
        default: {}
      },
      width: {
        type: String,
        default: '1000px'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    mounted() {
      this.drawLines()
    },
    methods: {
      drawLines() {
        const $this = this
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init($this.$refs.echarts)
        // 绘制图表
        myChart.setOption({
          ...$this.options
        })
      }
    },
    watch: {
      options() {
        this.drawLines()
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="module-title">
    <div :class="[config.align, `text-${config.style}`]" :style="{ padding: `${config.padding}px 0`, backgroundColor: config.backgroundColor, color: config.textColor }">{{ config.value }}</div>
  </div>
</template>

<script>
  export default {
    name: 'TitleModule',
    props: {
      config: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .module-title{
    .left{text-align: left;}
    .center{text-align: center;}
    .right{text-align: right;}
  }
</style>

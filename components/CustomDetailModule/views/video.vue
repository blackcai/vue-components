<template>
  <div class="" :style="{ padding: `${config.padding}px 0`}">
    <div>视频占用区域</div>
  </div>
</template>

<script>
  export default {
    name: 'VideoModule',
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

<style scoped lang="scss"></style>

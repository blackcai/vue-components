<template>
  <div class="" :style="{ height: `${config.height}px`, backgroundColor: config.backgroundColor }">
  </div>
</template>

<script>
  export default {
    name: 'BlankModule',
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

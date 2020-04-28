<template>
  <div class="" :style="{ padding: `${config.padding}px 0`}">
    <div v-html="config.value">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditorModule',
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

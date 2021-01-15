n<template>
  <div class="default-layout">
    <nuxt />
  </div>
</template>

<script>
  export default {
    name: 'default',
    head() {
      return {
        script: [
          { src: 'https://v1.cnzz.com/z_stat.php?id=1277862009&web_id=1277862009', type: 'text/javascript' }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>

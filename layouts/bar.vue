<template>
  <div>
    <header-wrap></header-wrap>
    <nuxt/>
    <tdd-card></tdd-card>
    <footer-box></footer-box>
  </div>
</template>

<script>
  export default {
    name: 'bar',
    head() {
      return {
        script: [
          { src: 'https://v1.cnzz.com/z_stat.php?id=1277862009&web_id=1277862009', type: 'text/javascript' }
        ]
      }
    },
    data() {
      return {
      }
    },
    components: {
      HeaderWrap: resolve => {
        return require(['@/components/global/header.vue'], resolve)
      },
      TddCard: resolve => {
        return require(['@/components/tdd/index.vue'], resolve)
      },
      FooterBox: resolve => {
        return require(['@/components/Footer/index.vue'], resolve)
      }
    }
  }
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>

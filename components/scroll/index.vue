<template>
  <div class="nice-scroll" ref="niceScroll">
    <div ref="scrollContent">
    <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scroll',
    head() {
      return {
        script: [
          { src: '@/static/js/jquery-1.10.2.min.js' },
          { src: '@/static/js/jquery.nicescroll.min.js' }
        ]
      }
    },
    data() {
      return {
        time: 0
      }
    },
    created() {
    },
    props: {
      info: null
    },
    mounted() {
      $(this.$refs.niceScroll).niceScroll({
        horizrailenabled: false,
        nativeparentscrolling: false
      })
      const timer = setInterval(() => {
        if (this.time === 30) {
          clearInterval(timer)
          return
        }
        this.time ++
        $(this.$refs.niceScroll).getNiceScroll().resize()
      }, 1000)
    },
    watch: {
      info: {
        handler(n, o) {
//          setInterval(() => {
//            $(this.$refs.niceScroll).getNiceScroll().resize()
//          }, 1000)
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nice-scroll {
  }
</style>

<template>
  <div>
    <p class="text-center">
      <a href="https://beian.miit.gov.cn">{{ beian }}</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        beian: ''
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        const host = location.host
        if (host === 'www.yexiaodan.com') {
          this.beian = '蜀ICP备17042269号-2'
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>

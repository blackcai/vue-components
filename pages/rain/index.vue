<template>
  <div class="back-row-toggle splat-toggle">
    <div class="rain front-row">
      <div class="drop" v-for="(item, index) in rainList" :key="index" :style="{
        left: `${item.increment}%`,
        bottom: `${item.randoFiver + item.randoFiver - 1 + 100}`,
        animationDelay: `0.${item.randoHundo}s`,
        animationDuration: `0.5${item.randoHundo}s`}">
        <div class="stem" :style="{
        animationDelay: `0.${item.randoHundo}s`,
        animationDuration: `0.5${item.randoHundo}s`
        }"></div>
        <div class="splat" :style="{
        animationDelay: `0.${item.randoHundo}s`,
        animationDuration: `0.5${item.randoHundo}s`
        }"></div>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 源码来自 https://www.jq22.com/code1652
   * */
  export default {
    name: 'RainIndex',
    layout: 'bar',
    data() {
      return {
        rainList: []
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        let increment = 0
        let lst = []
        while (increment < 100) {
          const randoHundo = (Math.floor(Math.random() * 98 + 1))
          const randoFiver = (Math.floor(Math.random() * 4 + 2))
          increment += randoFiver
          lst.push({
            increment: increment,
            randoHundo: randoHundo,
            randoFiver: randoFiver
          })
        }
        this.rainList = lst
      }
    }
  }
</script>

<style lang="scss">
  .back-row-toggle{background:#000;height:500px;}
  .rain {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .drop {
    position: absolute;
    bottom: 100%;
    width: 15px;
    height: 120px;
    pointer-events: none;
    animation: drop 0.5s linear infinite;
  }

  @keyframes drop {
    0% {
      transform: translateY(0vh);
    }
    75% {
      transform: translateY(90vh);
    }
    100% {
      transform: translateY(90vh);
    }
  }

  .stem {
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
    animation: stem 0.5s linear infinite;
  }

  @keyframes stem {
    0% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .splat {
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation: splat 0.5s linear infinite;
    display: none;
  }

  body.splat-toggle .splat {
    display: block;
  }

  @keyframes splat {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    80% {
      opacity: 1;
      transform: scale(0);
    }
    90% {
      opacity: 0.5;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }

</style>

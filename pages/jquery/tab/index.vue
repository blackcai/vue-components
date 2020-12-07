<template>
  <div>
    <el-card shadow="hover">
      <template slot="header">模式切换</template>
      <el-button type="default" size="mini" @click="bindClick(1)">索引切换</el-button>
      <el-button type="success" size="mini" @click="bindClick(2)">通过data属性</el-button>
      <el-button type="primary" size="mini" @click="bindClick(3)">通过class</el-button>
    </el-card>
    <el-card shadow="hover">
      <template slot="header">切换按钮</template>
      <el-button v-for="(item, index) in nav" :key="index" type="primary" size="mini" :class="{ 'byIndex': modal === 1, 'byAttr': modal === 2, 'byClass': modal === 3 }" :data-id="item">按钮{{ item }}，第{{ index + 1 }}个</el-button>
    </el-card>
    <section>
      <el-card shadow="hover" v-for="(item, index) in nav" :key="index" class="content hide" :class="`content_${item}`" :data-id="item">
        <template slot="header">内容窗口（当前通过{{ modal === 1 ? '索引' : modal === 2 ? '属性' : 'class' }}切换）</template>
        按钮{{ item }}，第{{ index + 1 }}个按钮
      </el-card>
    </section>
    <el-divider></el-divider>
    <el-card>
      <template slot="header">说明</template>
      本意仅为演示jquery中几种切换tab的方法，此示例不符合开箱即用的原则，此示例尽量解释了每一个方法的使用注意事项，从我的角度看你能通过这个示例写出想要的tab，更能让你去熟悉这些方法。后续会更新符合开箱即用的示例。
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'jquery-tab',
    layout: 'bar',
    head() {
      return {
        script: [
          { src: 'https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js', type: 'text/javascript' }
        ]
      }
    },
    data() {
      return {
        nav: [],
        modal: 1
      }
    },
    methods: {
      refresh() {
        if (location.href.indexOf('#reloaded') === -1) {
          location.href = location.href + '#reloaded'
          location.reload()
        }
      },
      bindClick(modal) {
        this.modal = modal
        console.log(modal)
        this.$nextTick(() => {
          /*-- jquery操作tab --*/
          this.jquery()
        })
      },
      jquery() {
        /* 此处内容为使用jquery的项目中实际用到的内容
        * 值得注意的是，jquery的特色写法，很多刚开始用的都容易忽略，比如下面获取index或者其他属性的时候，可以顺带添加或者操作一些东西
        * 比如第一个通过索引切换的时候
        * $(this).addClass('active').siblings().removeClass('active').end().index()
        * 上面这个方法，依然能够获取到对应的索引，需要注意的是，如果使用了siblings()等选择其他元素的方法，就需要使用end()方法回到初始的选择器上面去
        */
        $(function() {
          /* 因为vue的特性，此处手动显示第一个内容框
          * 同时在切换模式的时候还原窗口
          * */
          $('.content').eq(0).addClass('active').show().siblings().hide().removeClass('active')
          /* 以下是jquery的正文
          * 在jquery中，点击属性是可以重复绑定的，所以注意还原对应的点击事件，在实际使用中，是不需要off事件的
          * 注意每个方法中都有一个addClass和removeClass方法，此方法用于添加属性和移除属性，根据实际使用选择通过class控制显示隐藏或者通过show和hide显示隐藏即可
          * /
          /*-- 第一个，通过索引去显示页面
           * 通过索引显示对应的模块，注意不论是按钮还是内容模块，都要有一个外层包裹
           * 如： <div> <a>按钮/内容</a><a>按钮/内容</a><a>按钮/内容</a><a>按钮/内容</a> </div>
           * --*/
          $('.byIndex').off('click').on('click', function() {
            console.log('通过索引', $(this).addClass('active').siblings().removeClass('active').end().index())
            const index = $(this).index()
            $('.content').eq(index).addClass('active').show().siblings().hide().removeClass('active')
          })

          /* 第二个，通过data-id data-id具有唯一性
          * 此属性可以设置为其他的属性，不一定要是data-id
          * 如设置为其他：$(this).attr(设置的名称)
          * 按钮 <a data-id="id的键值">按钮</a>
          * 模块 <div class="content" data-id="id的键值"></div>
          */
          $('.byAttr').off('click').on('click', function() {
            console.log('通过data-id', $(this).data('id'))
            const id = $(this).data('id')
            $(`.content[data-id="${id}"]`).addClass('active').show().siblings().hide().removeClass('active')
          })

          /*-- 第三个，通过class data-id具有唯一性 content_id同样具有唯一性
          * 获取按钮id属性原理同上，区别在于通过class获取而不是指定属性名获取模块
          --*/
          $('.byClass').off('click').on('click', function() {
            console.log('通过class', $(this).data('id'))
            const id = $(this).data('id')
            $(`.content_${id}`).addClass('active').show().siblings().hide().removeClass('active')
          })
        })
      }
    },
    mounted() {
      // 针对页面不刷新加载jquery的bug进行处理。
      this.refresh()
      /*-- 此处为数据构造，不用管 --*/
      const arr = this.nav
      const run = () => {
        if (arr.length < 9) {
          const index = Math.floor(Math.random(10) * 10)
          if (!arr.includes(index)) {
            arr.push(index)
          }
          run()
        }
      }
      run()
      /*-- 结束 --*/
      /**
       * 本地执行环境偶尔会出现 $ 报错的情况
       * */
      setTimeout(() => {
        this.bindClick(1)
      }, 2000)
    }
  }
</script>

<style scoped lang="scss"></style>

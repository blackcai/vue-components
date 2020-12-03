const pkg = require('./package')
const { resolve } = require('path')
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page

  */
  head: {
    title: "小组件",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/uda-logo.png' }
    ]
  },
  router: {
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/reset.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/prototype',
    '@/plugins/request',
    '@/plugins/svg'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma'
    // ['vue-i18n', i18n]
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      // svgRule.exclude = [resolve(__dirname, 'assets/svg')]
      //
      // // Includes /assets/svg for svg-sprite-loader
      // config.module.rules.push({
      //   test: /\.svg$/,
      //   include: [resolve(__dirname, 'assets/svg')],
      //   loader: 'svg-sprite-loader',
      //   options: {
      //     symbolId: 'icon-[name]'
      //   }
      // })
    }
  }
}

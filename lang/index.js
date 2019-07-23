import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)
const enLang = Object.assign(enLocale, elementEnLocale)
const zhLang = Object.assign(zhLocale, elementZhLocale)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.getters.locale,
    fallbackLocale: store.getters.locale,
    messages: {
      en: enLang,
      zh: zhLang
    }
  })
  
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    
    return `/${app.i18n.locale}/${link}`
  }
}

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueI18n)
const i18n = new VueI18n({
  // locale: 'zh', // only used for SPA prerender
  locale: /^zh/.test(navigator.language || navigator.userLanguage) ? 'zh' : 'en',
  messages: {
    en: {
      title: 'SyngenTech',
      nav: {
        home: 'Home',
        biopharma: 'Biopharma',
        service: 'Service',
        more: {
          title: 'About',
          about: 'About Us',
          management: 'Management Team',
          investors: 'Our Investors',
          contact: 'Contact Us'
        }
      },
      copyright: 'All rights reserved © Beijing Syngentech Co., LTD. · <a href="http://beian.miit.gov.cn" target="_blank">京ICP备14043945号-1</a>',
      ...enLocale
    },
    zh: {
      title: '合生基因',
      nav: {
        home: '首页',
        biopharma: '药物研发',
        service: '科研服务',
        more: {
          title: '关于我们',
          about: '公司简介',
          management: '管理团队',
          investors: '融资情况',
          contact: '联系我们'
        }
      },
      copyright: '版权所有 © 北京合生基因科技有限公司 · <a href="http://beian.miit.gov.cn" target="_blank">京ICP备14043945号-1</a>',
      ...zhLocale
    }
  },
  silentFallbackWarn: true
})

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

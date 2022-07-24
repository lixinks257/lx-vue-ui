import Vue from 'vue'
import App from './App.vue'
// import KsUI from '../packages'
// import KsUI from '../packages'
// import LxUI from '../packages'
import LxUI from 'lx-vue-ui'
import 'lx-vue-ui/dist/lx-vue-ui.css'
Vue.config.productionTip = false
Vue.use(LxUI)

new Vue({
  render: h => h(App)
}).$mount('#app')

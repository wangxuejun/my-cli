// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import router from './router'
import store from './vuex'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.less'
import './assets/css/common.less'
import subscribe from '@/components/basis/subscribe'
import { Button, Select, Input, Checkbox, Switch, Dropdown, DropdownMenu, DropdownItem} from 'element-ui'
import components from './components/index'
const elementComponents = [Button, Select, Input, Checkbox, Switch, Dropdown, DropdownMenu, DropdownItem, subscribe]
elementComponents.forEach(item => {
  Vue.use(item)
})
Vue.use(components)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: {
    App
  }
})

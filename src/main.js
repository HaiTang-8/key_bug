import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'

import {Button, Dialog} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Dialog.name, Dialog);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import App from './App.vue'
import router from './router'
import store from './store'
import {
  serveUrl
} from '@/utils/request'
Vue.config.productionTip = false
Vue.filter('dalImg', (url) => {
  if (url) {
    if (url.startsWith('http')) {
      return url
    } else {
      return serveUrl + url
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

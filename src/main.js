import Vue from 'vue'
import App from './App.vue'
import naver from 'vue-naver-maps';
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(naver, {
  clientID: 'lio592myou',
  useGovAPI: false,
  useOpenAPI: true //OpenAPI 사용
});
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

import App from './App.vue'

// 根据前端的跨域方式进行调整
axios.defaults.baseURL = '/api';
// 超时时间  8 秒
axios.defaults.timeout = 8000;
// 根据环境变量获取不同请求的地址
axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  // status = 1 正常   = 10 未登录
  let res = response.data;
  if(res.status == 0) {
    return res.data;
  } else if(res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'

import App from './App.vue'

// import 和 require 的区别
// import 的预编译加载，在编译的时候 import 的文件就会加载
// require 在执行的时候才会加载

// mock 开关
const mock = true;
if(mock) {
  require('./mock/api');
}

// 根据前端的跨域方式进行调整
// axios.defaults.baseURL = '/api';
// 通过 easy-mock 平台实现数据 mock   将 api 换成 easy-mock 平台的 url 
// axios.defaults.baseURL = '/api';
// 超时时间  8 秒
axios.defaults.timeout = 8000;
// 根据环境变量获取不同请求的地址
// axios.defaults.baseURL = env.baseURL
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

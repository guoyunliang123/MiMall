<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsonp from 'jsonp'

// import storage from "./storage";

export default {
  name: "App",
  components: {},
  data() {
    return {
      // res: {}
    };
  },
  mounted() {
    // cors + jsonp
    // let url = "https://www.imooc.com/activity/servicetime";
    // 代理
    // let url = "/activity/servicetime";
    // let url = "/api/activity/servicetime";
    // axios.get(url).then(() => {
    // });
    // jsonp(url, (err, res) => {
    //   let result = res;
    //   this.data = result;
    // })

    // storage.setItem("a", 1);
    // storage.setItem("user", { a: 1 });
    // storage.setItem("abc", { a: 1 }, "user");
    // storage.clear("a");
    // storage.clear("a", "user");

    // 本地加载请求静态 json 文件的形式
    // this.axios.get('./mock/user/login.json').then((res) => {
    //   this.res = res;
    // });

    // 通过 easy-mock 平台实现数据 mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // });
    
    // 本地集成 mockjs 实现数据 mock  先下载 mockjs  npm i mockjs --save-dev
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // });
  }
};
</script>

<style>
@import './assets/scss/reset.scss'
</style>

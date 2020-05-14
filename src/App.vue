<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsonp from 'jsonp'
import storage from "./storage";

export default {
  name: "App",
  components: {},
  data() {
    return {};
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
    storage.clear("a", "user");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

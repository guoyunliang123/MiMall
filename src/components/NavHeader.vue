<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MIUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:">登录</a>
          <a href="javascript:">注册</a>
          <a href="javascript:" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu"></div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nav-header',
  }
</script>

<style lang="scss">
  @import './../assets/scss/base.scss';
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container {
        justify-content: space-between;
        align-items: center;
        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: #ffffff;
          .icon-cart {
            display: inline-block;
            height: 12px;
            width: 16px;
            background: url('/imgs/icon-cart-checked.png') no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header {
      .container {
        height: 112px;
        .header-logo {
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          a {
              display: inline-block;
              width: 110px;
              height: 55px;
            &:before {
              content: ' ';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/imgs/mi-logo.png') no-repeat center;
              background-size: contain;
              transition: margin .2s;
            }
            &:after {
              content: ' ';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/imgs/mi-home.png') no-repeat center;
              background-size: contain;
            }
            &:hover:before {
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
      }
    }
  }
</style>
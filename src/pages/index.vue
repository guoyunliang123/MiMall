<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>

        </div>
        <swiper v-bind:options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a v-bind:href="'/#/product/' + item.id"><img v-bind:src="item.img" alt=""></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    
    <service-bar></service-bar>
  </div>
</template>

<script>

import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

  export default {
    name: 'index',
    components: {
      Swiper,
      SwiperSlide,
      ServiceBar
    },
    data() {
      return {
        swiperOptions: {
          // 自动播放
          autplay: true,
          // 可以从最后一张回到第一张
          loop: true,
          // 动画效果
          effect: 'cube',
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 100,
            shadowScale: 0.6
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        slideList: [
          {
            id: '42',
            img: '/imgs/slider/slide-1.jpg'
          },
          {
            id: '45',
            img: '/imgs/slider/slide-2.jpg'
          },
          {
            id: '46',
            img: '/imgs/slider/slide-3.jpg'
          },
          {
            id: '',
            img: '/imgs/slider/slide-4.jpg'
          },
          {
            id: '',
            img: '/imgs/slider/slide-1.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import './../assets/scss/mixin.scss';
  .index {
    .swiper-box {
      width: 1226px;
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585A7A;
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              position: relative;
              font-size: 16px;
              color: #ffffff;
              padding-left: 30px;
              display: block;
              &:after {
                content: ' ';
                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                position: absolute;
                top: 17.5px;
                right: 30px;
              }
            }
            &:hover {
              background-color: #FF6600;
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          left: 274px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
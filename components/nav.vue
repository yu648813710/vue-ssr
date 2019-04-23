<template>
  <div class="index_nav">
    <div class="item" v-for="(val,index) in navData" :key="'nav'+index">
      <nuxt-link :to="val.path">
        <img class="active_none" :src="val.img">
        <img class="none" :src="val.imactive">
        <span>{{val.name}}</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navData: [
        {
          name: '首页',
          img: '/_nuxt/static/images/inico01.png',
          imactive: '/_nuxt/static/images/inico01_green.png',
          path: '/'
        },
        {
          name: '楼盘',
          img: '/_nuxt/static/images/inico02.png',
          imactive: '/_nuxt/static/images/inico02_green.png',
          path: '/house/houseList'
        },
        {
          name: '微聊',
          img: '/_nuxt/static/images/inico03.png',
          imactive: '/_nuxt/static/images/inico03_green.png',
          path: '/house'
        },
        {
          name: '我的',
          img: '/_nuxt/static/images/inico04.png',
          imactive: '/_nuxt/static/images/inico04_green.png',
          path: '/house'
        }
      ]
    }
  },
  monthed() {}
}
</script>

<style lang="scss">
@import '../assets/css/common';
.index_nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.44rem;
  overflow: hidden;
  border-top: 0.01rem solid #eaeaea;
  background-color: $white_color;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  .item {
    img {
      display: block;
      width: 0.26rem;
      height: 0.23rem;
      margin: 0.02rem auto 0;
    }
    img.none {
      display: none;
    }
    span {
      text-align: center;
      font-size: 0.12rem;
      line-height: 0.2rem;
      display: block;
    }
  }
  .nuxt-link-exact-active {
    color: $main_color;
    img.none {
      display: block;
    }
    .active_none {
      display: none;
    }
  }
}
</style>


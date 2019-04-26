<template>
  <div class="index_box">
    <!-- top开始 -->
    <div class="index_top">
      <ul class="logo_img">
        <img src="~~/static/images/logo.png" alt>
      </ul>
      <ul class="index_search">
        <div>
          <img src="~~/static/images/big.png" alt>
          <span>万科理想城</span>
          <em>西安</em>
        </div>
      </ul>
      <ul class="index_calc">
        <img src="~~/static/images/index_calc.png" alt>
        <span>计算器</span>
      </ul>
    </div>
    <!-- top结束 -->
    <!-- banner start -->
    <div class="index_bannerstyle">
      <div class="index_banner swiper-container" id="index_banner">
        <ul class="swiper-wrapper">
          <li
            class="banner_item swiper-slide"
            v-for="(val,index) in pageData.banner"
            :key="index+'banner'"
          >
            <img :src="val.img" alt>
          </li>
        </ul>
        <!-- Add Pagination -->
        <ul class="swiper-pagination"></ul>
      </div>
      <img class="banner_shadow" src="images/banner-shdow.png" alt="阴影">
    </div>
    <!-- banner end -->
    <!-- 导航 start -->
    <div class="new_index_nav new_block_box">
      <div class="item" v-for="(val,index) in pageData.indexNav" :key="index+'nav'">
        <a href>
          <img :src="val.img" alt="楼盘">
          <span>{{val.text}}</span>
        </a>
      </div>
    </div>
    <!-- 导航 end -->
    <!-- 间隔 start -->
    <div class="new_interval_box"></div>
    <!-- 间隔 end -->
    <!-- 二级导航 start -->
    <div class="new_block_box new_index_plate">
      <div
        class="item item_one"
        v-for="(val,index) in pageData.minNav"
        :key="index+'minNav'"
        :style="'background:url('+val.img+') no-repeat;'"
      >
        <a href>
          <p class="max">{{val.text}}</p>
          <p>{{val.info}}</p>
        </a>
      </div>
    </div>
    <!-- 二级导航 end -->
    <!-- 间隔 start -->
    <div class="new_interval_box"></div>
    <!-- 间隔 end -->
    <!-- 好盘推荐 start -->
    <div class="new_block_box new_good_house">
      <div class="new_title_box">
        <span @click="recommendHouse=1" :class="[recommendHouse==1?' active': '','item']">好盘推荐</span>
        <span @click="recommendHouse=2" :class="[recommendHouse==2?' active': '','item']">独家策划</span>
      </div>
      <div class="center">
        <div :class="[recommendHouse==1?'': 'none','item','good_item']">
          <div class="item_house" v-for="(val,index) in pageData.houseRecommend" :key="index+'rec'">
            <a href>
              <div class="img">
                <img :src="val.img" alt>
                <span>{{val.site}}</span>
              </div>
              <div class="text mt10">
                <p>{{val.text}}</p>
                <p class="price">
                  均价：
                  <span>{{val.price}}元/m²</span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div :class="[recommendHouse==2?'': 'none','item','unique_item']">
          <div class="item_house" v-for="(val,index) in pageData.exPlanning" :key="index+'ex'">
            <a href>
              <img :src="val.img" alt>
              <span class="max">{{val.text}}</span>
              <span class="min">{{val.info}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 好盘推荐 end -->
    <!-- 间隔 statr -->
    <div class="new_interval_box"></div>
    <!-- 间隔 end -->
    <!-- 广告 start -->
    <abvertising :abvertisingData="pageData.minBanner"></abvertising>
    <!-- 广告 end -->
    <!-- 间隔 statr -->
    <div class="new_interval_box"></div>
    <!-- 间隔 end -->
    <!-- 新闻 start -->
    <div class="new_block_box new_news_box">
      <div class="new_title_box">
        <span @click="newsTab=1" :class="[newsTab==1?'active':'','item']">热门导购</span>
        <span @click="newsTab=2" :class="[newsTab==2?'active':'','item']">热点资讯</span>
        <span @click="newsTab=3" :class="[newsTab==3?'active':'','item']">购房指南</span>
      </div>
      <div class="center mt10">
        <div :class="[newsTab==1?'':'none','item']">
          <p v-for="(val,index) in pageNews.guide" :key="index+'guide'">
            <a href>
              <span class="fl">{{val.title}}</span>
              <span class="fr">{{val.time}}</span>
            </a>
          </p>
        </div>
        <div :class="[newsTab==2?'':'none','item']">
          <p v-for="(val,index) in pageNews.hotPaper" :key="index+'hotPaper'">
            <a href>
              <span class="fl">{{val.title}}</span>
              <span class="fr">{{val.time}}</span>
            </a>
          </p>
        </div>
        <div :class="[newsTab==3?'':'none','item']">
          <p v-for="(val,index) in pageNews.hot" :key="index+'hot'">
            <a href>
              <span class="fl">{{val.title}}</span>
              <span class="fr">{{val.time}}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
    <!-- 新闻 end -->
    <!-- 间隔 statr -->
    <div class="new_interval_box"></div>
    <!-- 间隔 end -->
    <!-- 推荐楼盘 start -->
    <div class="new_block_box new_recommend_box">
      <div class="new_title_box">
        <span class="item">猜你喜欢</span>
      </div>
      <ListHouse :listData="pageData.houseList"></ListHouse>
    </div>
    <!-- 推荐楼盘 end -->
  </div>
</template>
<script>
import mock from './mock' //虚拟数据
import axios from 'axios' //请求插件
import Swiper from 'swiper' //请求插件
import ListHouse from '~~/components/list' //列表组件
import store from '~~/store/store'
import abvertising from '~~/components/advertising' //广告组件
export default {
  store,
  data() {
    return {
      pageData: {}, //页面数据
      requestOver: true, //请求加锁
      recommendHouse: 1, //选项卡
      pageNews: {}, //页面新闻
      newsTab: 1 //新闻选项卡
    }
  },
  components: {
    ListHouse,
    abvertising
  },
  methods: {
    requestIndexData() {
      let that = this
      mock.mocks()
      if (that.requestOver) {
        //判断是否有请求进行
        that.requestOver = !that.requestOver //加锁
        that.$store.dispatch('setRequestState', that.requestOver)
        axios({
          method: 'get',
          url: 'house/index.json'
        })
          .then(function(res) {
            that.pageData = res.data //赋值数据
            that.pageNews = res.data.indexNews //处理新闻
            that.indexBanner() //首页banner
            that.requestOver = !that.requestOver
            that.$store.dispatch('setRequestState', that.requestOver)
          })
          .catch(function(err) {
            that.requestOver = !that.requestOver
            console.log(err)
            that.$store.dispatch('setRequestState', that.requestOver)
          })
      }
    },
    indexBanner() {
      new Swiper('#index_banner', {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
        pagination: {
          el: '#index_banner .swiper-pagination'
        }
      })
    }
  },
  mounted() {
    this.requestIndexData() //请求数据
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>


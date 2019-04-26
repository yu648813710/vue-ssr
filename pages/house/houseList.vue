<template>
  <div :class="[showScreenBoxB?'box_hidden':'','index_box']">
    <!-- top start -->
    <titlebox></titlebox>
    <!-- top end -->
    <!-- 搜索板块开始 -->
    <div class="houseList_search houseList-mt">
      <a href="houseSearch.html">
        <div class="houseList_searchl">
          <img src="~~/static/images/big.png">
          <span>秦汉新城不限购</span>
        </div>
      </a>
      <div class="houseList_searchr">
        <img src="~~/static/images/index_calc.png">
        <span>计算器</span>
      </div>
    </div>
    <!-- 搜索板块结尾 -->
    <!-- 灰色隔开开始 -->
    <div class="new_interval_box"></div>
    <!-- 灰色隔开结尾 -->
    <!-- 广告 start -->
    <abvertising :abvertisingData="pageData.minBanner"></abvertising>
    <!-- 广告 end -->
    <!-- 灰色隔开开始 -->
    <div class="new_interval_box"></div>
    <!-- 灰色隔开结尾 -->
    <!-- 筛选展开开始 -->
    <div class="houseList_sele_on">
      <ul>
        <li class="houseList_sele_li01">
          <span
            data-id="0"
            data-sign="area"
            :class="[screenData.area==0?'active':'']"
            @click="screenItemClick"
          >不限</span>
          <span
            v-for="(val,index) in pageData.area"
            :key="index+'area'"
            :data-id="val.id"
            :class="[screenData.area==val.id?'active':'']"
            data-sign="area"
            @click="screenItemClick"
          >{{val.title}}</span>
          <i data-key="area" @click.stop="clickNav"></i>
        </li>
        <li class="houseList_sele_li01">
          <span
            data-id="0"
            data-sign="price"
            :class="[screenData.price==0?'active':'']"
            @click="screenItemClick"
          >不限</span>
          <span
            v-for="(val,index) in pageData.price"
            :key="index+'price'"
            :data-id="val.id"
            data-sign="price"
            :class="[screenData.price==val.id?'active':'']"
            @click="screenItemClick"
          >{{val.title}}</span>
          <i data-key="price" @click.stop="clickNav"></i>
        </li>
        <li>
          <span
            data-id="0"
            data-sign="type"
            :class="[screenData.type==0?'active':'']"
            @click="screenItemClick"
          >不限</span>
          <span
            v-for="(val,index) in pageData.type"
            :key="index+'type'"
            :data-id="val.id"
            data-sign="type"
            :class="[screenData.type==val.id?'active':'']"
            @click="screenItemClick"
          >{{val.title}}</span>
          <i data-key="type" @click.stop="clickNav"></i>
        </li>
      </ul>
    </div>
    <!-- 筛选展开结尾 -->
    <!-- 灰色隔开开始 -->
    <div class="new_interval_box"></div>
    <!-- 灰色隔开结尾 -->
    <!-- 楼盘筛选开始 -->
    <div class="houseList-screen">
      <ul class="box-block houseList-select">
        <li
          v-for="(val,index) in selectNav"
          :key="index+'nav'"
          :class="[val.selected?'active_nav':'']"
        >
          <span :data-key="index" @click.stop="clickNav">{{val.name}}</span>
          <i></i>
        </li>
      </ul>
    </div>
    <!-- 楼盘筛选结束 -->
    <!-- 楼盘列表 start -->
    <div class="houseList-box houseList-mb">
      <ListHouse :listData="listData"></ListHouse>
    </div>
    <!-- 楼盘列表 end -->
    <!-- 筛选弹窗开始 -->
    <div :class="[showScreenBoxB?'':'none','popup-window screen_pop']" @click.self="tabScreenBox">
      <div class="houseList-screen houseList-line">
        <ul class="box-block houseList-select">
          <li
            v-for="(val,index) in selectNav"
            :key="index+'nav_box'"
            :class="[index==screenTab?'active':'']"
          >
            <a href="javascript:;">
              <span :data-key="index" @click.stop="screenClickNav">{{val.name}}</span>
              <i></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="screen_pop_box">
        <ul class="screen_centont">
          <li :class="['screen_type screen_area',screenTab=='area'?'':'none']">
            <div class="item_title fl">
              <p :class="[areaTabB==1?'active':'']" @click="areaTabB=1">区域</p>
              <p :class="[areaTabB==2?'active':'']" @click="areaTabB=2">地铁</p>
            </div>
            <div class="item_center fl">
              <div :class="['item',areaTabB==1?'':'none']">
                <span
                  data-id="0"
                  data-sign="area"
                  :class="[screenData.area==0?'active':'']"
                  @click="moreScreenClick"
                >不限</span>
                <span
                  v-for="(val,index) in pageData.area"
                  :key="index+'area'"
                  :data-id="val.id"
                  data-sign="area"
                  :class="[screenData.area==val.id?'active':'']"
                  @click="moreScreenClick"
                >{{val.title}}</span>
              </div>
              <div :class="['item',areaTabB==2?'':'none']">
                <span
                  id="0"
                  data-sign="metro"
                  :class="[screenData.metro==0?'active':'']"
                  @click="moreScreenClick"
                >不限</span>
                <span
                  v-for="(val,index) in pageData.metro"
                  :key="index+'metro'"
                  :data-id="val.id"
                  data-sign="metro"
                  :class="[screenData.metro==val.id?'active':'']"
                  @click="moreScreenClick"
                >{{val.title}}</span>
              </div>
            </div>
          </li>

          <li :class="['screen_type screen_price',screenTab=='price'?'':'none']">
            <div class="screen_tab">
              <span
                data-id="0"
                data-sign="price"
                :class="[screenData.price==0?'active':'']"
                @click="moreScreenClick"
              >不限</span>
              <span
                v-for="(val,index) in pageData.price"
                :key="index+'price'"
                :data-id="val.id"
                data-sign="price"
                :class="[screenData.price==val.id?'active':'']"
                @click="moreScreenClick"
              >{{val.title}}</span>
            </div>
          </li>
          <li :class="['screen_type screen_house',screenTab=='type'?'':'none']">
            <div class="screen_tab">
              <span
                data-id="0"
                data-sign="type"
                :class="[screenData.type==0?'active':'']"
                @click="moreScreenClick"
              >不限</span>
              <span
                v-for="(val,index) in pageData.type"
                :key="index+'type'"
                :data-id="val.id"
                data-sign="type"
                :class="[screenData.type==val.id?'active':'']"
                @click="moreScreenClick"
              >{{val.title}}</span>
            </div>
          </li>
          <!-- vue在获取多层数据时，如果多层数据未定义页面就会出错，所以需要加判断语句先进行判断 -->
          <li :class="['screen_type screen_more',screenTab=='more'?'':'none']" v-if="pageData.more">
            <div class="title">{{pageData.more.feature.title}}</div>
            <div class="screen_tab">
              <span
                data-id="0"
                data-sign="feature"
                :class="[screenData.feature==0?'active':'']"
                @click="moreScreenClick"
              >不限</span>
              <span
                v-for="(val,index) in pageData.more.feature.center"
                :key="index+'feature'"
                :data-id="val.id"
                data-sign="feature"
                :class="[screenData.feature==val.id?'active':'']"
                @click="moreScreenClick"
              >{{val.title}}</span>
            </div>
            <div class="title">{{pageData.more.house.title}}</div>
            <div data-sign="more" class="screen_tab">
              <span
                data-id="0"
                data-sign="house"
                :class="[screenData.house==0?'active':'']"
                @click="moreScreenClick"
              >不限</span>
              <span
                v-for="(val,index) in pageData.more.house.center"
                :key="index+'house'"
                :data-id="val.id"
                data-sign="house"
                :class="[screenData.house==val.id?'active':'']"
                @click="moreScreenClick"
              >{{val.title}}</span>
            </div>
            <div class="title">{{pageData.more.floor.title}}</div>
            <div data-sign="more" class="screen_tab">
              <span
                data-id="0"
                data-sign="floor"
                :class="[screenData.floor==0?'active':'']"
                @click="moreScreenClick"
              >不限</span>
              <span
                v-for="(val,index) in pageData.more.floor.center"
                :key="index+'floor'"
                :data-id="val.id"
                data-sign="floor"
                :class="[screenData.floor==val.id?'active':'']"
                @click="moreScreenClick"
              >{{val.title}}</span>
            </div>
            <div class="title">{{pageData.more.loop.title}}</div>
            <div data-sign="more" class="screen_tab">
              <span
                data-id="0"
                data-sign="loop"
                @click="moreScreenClick"
                :class="[screenData.loop==0?'active':'']"
              >不限</span>
              <span
                v-for="(val,index) in pageData.more.loop.center"
                :key="index+'loop'"
                :data-id="val.id"
                data-sign="loop"
                :class="[screenData.loop==val.id?'active':'']"
                @click="moreScreenClick"
              >{{val.title}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="true_but">
        <button @click="confirmList">确认</button>
      </div>
    </div>
    <!-- 筛选弹窗开始 -->
  </div>
</template>
<script>
import ListHouse from '~~/components/list' //列表组件
import titlebox from '~~/components/title' //title组件
import mock from './mocklist.js' //模拟数据
import axios from 'axios' //请求插件
import store from '~~/store/store' //状态
import abvertising from '~~/components/advertising' //广告组件
export default {
  components: {
    ListHouse,
    titlebox,
    abvertising
  },
  //页面头部管理
  head() {
    return {
      title: '列表页',
      meta: [{ hid: 'description', name: 'description', content: '我是列表页' }]
    }
  },
  data() {
    return {
      requestOver: true, //请求锁
      dataOver: true, //数据请求完成
      dataNum: 0, //列表页数据页数
      pageData: {}, //页面筛选数据
      //筛选选定数据
      screenData: {
        area: 0, //区域
        price: 0, //价格
        type: 0, //户型
        metro: 0, //地铁
        feature: 0, //更多特色
        floor: 0, //更多楼层
        loop: 0, //更多环路
        house: 0 //更多楼盘
      },
      //列表数据
      listData: [],
      //筛选导航
      selectNav: {
        area: {
          name: '区域',
          selected: 0
        },
        price: {
          name: '价格',
          selected: 0
        },
        type: {
          name: '类型',
          selected: 0
        },
        more: {
          name: '更多',
          selected: 0
        }
      },
      //操作筛选框显示
      showScreenBoxB: false,
      //筛选框点击选中状态
      screenTab: null,
      //区域选项卡变量
      areaTabB: 1
    }
  },
  methods: {
    //请求筛选数据
    requestPageData() {
      let that = this
      if (that.requestOver) {
        that.requestOver = !that.requestOver
        that.$store.dispatch('setRequestState', that.requestOver) //改变状态
        axios({
          method: 'get',
          url: 'house/listScreen'
        })
          .then(function(res) {
            that.requestOver = !that.requestOver
            that.$store.dispatch('setRequestState', that.requestOver) //改变状态
            that.pageData = res.data //筛选数据
            that.requestList() //请求列表数据
          })
          .catch(function(err) {
            that.requestOver = !that.requestOver
            console.log(err)
            that.$store.dispatch('setRequestState', that.requestOver) //改变状态
          })
      }
    },
    //请求列表数据
    requestList() {
      let that = this
      if (that.requestOver && that.dataOver) {
        that.requestOver = !that.requestOver
        axios({
          method: 'post',
          url: 'house/list',
          data: that.screenData
        })
          .then(function(res) {
            that.requestOver = !that.requestOver
            that.listData.push(...res.data) //筛选数据,利用扩展运算符来进行合并数据
            that.pageDataNum() //数据请求的时候看是否是最后一页
          })
          .catch(function(err) {
            that.requestOver = !that.requestOver
            console.log(err)
            that.pageDataNum() //数据请求的时候看是否是最后一页
          })
      }
    },
    //数据请求的时候判断页数
    pageDataNum() {
      this.dataNum++
      if (this.dataNum == 5) {
        this.dataOver = !this.dataOver
      }
    },
    //上拉加载
    //e 为滚动事件对象
    //num 限定滚动距离页面底部还有多高触发函数
    //fu 回调函数
    upScroll(e, num, fn) {
      let nums = num ? num : 50
      let scrollTop = document.documentElement.scrollTop //滚动高度
      let cScrollTop = document.body.scrollHeight //设备可滚动高度
      let cHeight =
        document.documentElement.clientHeight || document.body.clientHeight //设备高度
      if (cScrollTop - cHeight <= scrollTop) {
        fn()
        return false
      }
    },
    //导航点击
    clickNav(e) {
      this.tabScreenBox() //控制选择框
      this.screenClickNav(e) //选择框导航点击
    },
    //选择框导航点击
    screenClickNav(e) {
      let key = e.srcElement.dataset.key //获取行间的key
      if (this.screenTab == key) {
        //如果点击相同的按钮筛选框消失
        this.tabScreenBox() //控制选择框
        return false
      }
      this.screenTab = key
    },
    //控制选择框
    tabScreenBox() {
      this.screenTab = null //对选定进行清空
      this.showScreenBoxB = !this.showScreenBoxB
    },
    //筛选选项点击包括请求数据
    screenItemClick(e) {
      this.moreScreenClick(e)//筛选选项点击
      this.screenList()//请求数据
    },
    //筛选请求数据
    screenList() {
      this.listData = [] //列表数据清空
      this.requestList()//下拉请求数据
    },
    //筛选框确定请求
    confirmList(){
      this.screenList()//筛选请求数据
      this.tabScreenBox()//控制选择框
    },
    //筛选选项点击
    moreScreenClick(e) {
      let sign = e.srcElement.dataset.sign //行间标记
      let id = e.srcElement.dataset.id //行间标记
      this.screenData[sign] = id
    }
  },
  mounted() {
    let that = this
    mock.mocks() //模拟数据调用
    this.requestPageData() //请求筛选数据
    //下拉加载数据
    window.onscroll = function(e) {
      that.upScroll(e, '0', that.requestList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './list';
</style>


<template>
  <div>
    <nav class="listHead-top">
      <nuxt-link class="colorf" :to="url?url:'/'">
        <div class="fl">
          <img src="~~/static/images/top_jt.png" :alt="nav?nav:'首页'">
          <span>{{nav?nav:'首页'}}</span>
        </div>
      </nuxt-link>
      <div class="title">{{title?title:'房源网'}}</div>
    </nav>
  </div>
</template>
<script>
export default {
    props:{
        title:String,//页面title
        nav:String,//导航名称
        url:[String, Object],//链接
    }
}
</script>
<style lang="scss" scoped>
/*楼盘列表头部开始*/

nav.listHead-top {
  width: 95%;
  padding: 0 2.5%;
  height: 0.44rem;
  background-color: #fff;
  color: #333;
  line-height: 0.44rem;
  font-size: 0.14rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  a {
    color: #333;
  }
  div.fl {
    width: 20%;
    img {
      display: block;
      width: 0.11rem;
      height: 0.2rem;
      float: left;
      margin: 0.12rem 0.1rem 0 0;
    }
  }
  div.fr {
    width: 20%;
    img {
      display: block;
      float: left;
      width: 0.2rem;
      height: auto;
      margin: 0.12rem 0 0 0.1rem;
      overflow: hidden;
    }
    .hig {
      margin: 0.15rem 0 0 0.1rem;
    }
  }
  div.title {
    text-align: center;
    font-size: 0.18rem;
    width: 60%;
    float: left;
    font-weight: 600;
  }
}

div.nav-listMenu {
  width: 1.06rem;
  padding: 0.1rem;
  z-index: 999;
  color: #fff;
  font-size: 0.14rem;
  line-height: 0.32rem;
  text-align: center;
  position: absolute;
  right: 0%;
  top: 0.34rem;
  display: none;
  a {
    color: #fff;
  }
  ul.img img {
    display: block;
    width: 0.2rem;
    height: 0.1rem;
    float: right;
    margin-right: 0.2rem;
  }
  ul.list-text {
    border-radius: 0.03rem;
    background-color: rgba(0, 0, 0, 0.6);
    padding-bottom: 0.1rem;
  }
  li {
    border-bottom: 0.01rem solid #fff;
    margin: 0 0.1rem;
  }
}
/*楼盘列表头部开始 E*/
</style>

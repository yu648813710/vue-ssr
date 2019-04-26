<template>
  <div class="new_body_bottom">
    <nuxt/>
    <!-- 主要显示内容 -->
    <Navbox/>
    <!-- 导航 -->
    <shodwPage v-if="!requestB"></shodwPage>
    <!-- 加载数据时候的遮罩加载 -->
  </div>
</template>
<script>
import Navbox from '~/components/nav'
import shodwPage from '~~/components/shodwPage' //加载组件
import store from '~~/store/store'
export default {
  store,//使用
  middleware: 'auth', //中间件使用
  data() {
    return {
    }
  },
  components: {
    Navbox,
    shodwPage
  },
  computed:{
    //这块直接调用store里的状态，然后页面每次加载的时候改变状态从而产生遮罩
      requestB() {
        return  this.$store.state.requestOver
      },
  },
  methods: {
    resize(originSize, type) {
      let WType = type || 'x'
      let widths = document.documentElement.clientWidth
      let heights = document.documentElement.clientHeight
      if (WType == 'x') {
        var scale = (widths / originSize) * 200 //在X轴下求出比例并放大100倍。
      } else if (WType == 'y') {
        var scale = (heights / originSize) * 100
      }
      document.getElementsByTagName('html')[0].style.fontSize = scale + 'px'
      document.getElementsByTagName('body')[0].style.display = 'block'
    }
  },
  mounted: function() {
    //控制rem大小
    this.resize(750)
  }
}
</script>

<style lang="scss" scoped>
.new_body_bottom {
  margin-bottom: 0.44rem;
}
</style>

<template>
  <div class="center">
    <template v-if="listData">
      <div v-for="(val,index) in listData" :key="index+'list'" class="house-details">
        <div class="fl">
          <a href>
            <img :src="val.img" alt="楼盘照片">
          </a>
        </div>
        <div class="fr">
          <ul class="box-block">
            <li class="title">
              <a href>{{val.title}}</a>
            </li>
            <li class="tel">
              <a href>
                <span>{{val.site}}</span>
              </a>
            </li>
            <a href>
              <li class="sign">
                <span class="blue">{{val.sign}}</span>
              </li>
              <li class="mony">
                均价
                <span>{{val.price}}</span>
                元/平
              </li>
            </a>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    listData:Array,
  }
}
</script>
<style lang="scss" scoped>
.house-details {
  height: auto;
  overflow: hidden;
  padding-bottom: 0.1rem;
  margin-bottom: 0.1rem;
  border-bottom: 0.01rem solid #eaeaea;
  div.fl {
    width: 34%;
    height: 0.84rem;
    overflow: hidden;
    display: block;
    position: relative;
    img {
      @extend .fl;
      width: 100%;
      border-radius: 0.06rem;
    }
    span {
      display: block;
      width: 0.35rem;
      height: 0.18rem;
      overflow: hidden;
      color: #fff;
      line-height: 0.18rem;
      text-align: center;
      background: #e65f1c;
      position: absolute;
      left: 0;
      top: 0.05rem;
      z-index: 999;
    }
  }
  div.fr {
    color: #666;
    width: 63%;
    line-height: 0.2rem;
    text-align: left;
    li {
      overflow: hidden;
      height: auto;
    }
    li.title {
      font-size: 0.15rem;
      color: #000;
      font-weight: 600;
    }
    li.mony {
      color: #e65f1c;
      span {
        font-size: 0.16rem;
      }
    }
    li.sign {
      width: 100%;
      height: 0.22rem;
      overflow: hidden;
      span {
        padding: 0.01rem 0.03rem;
        border-radius: 0.02rem;
        font-size: 0.1rem;
        white-space: nowrap;
      }
      span.blue {
        color: #2cc5ce;
        border: 1px solid #cbecee;
      }
      span.red {
        color: #e5cd5c;
        border: 1px solid #f1ecd3;
      }
      span.green {
        color: #a0bd5a;
        border: 1px solid #f1f6e6;
      }
      span.grey {
        color: #999;
        border: 1px solid #eaeaea;
      }
    }
    li.tel span {
      height: 0.22rem;
      overflow: hidden;
      display: block;
      color: #666;
    }
  }
}
</style>

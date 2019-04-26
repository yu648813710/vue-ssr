<template v-if="abvertisingData">
<div>
  <div class="exhibition_banner" v-for="(val,index) in abvertisingData" :key="index+'ab'">
    <img :src="val.img" alt>
    <span class="exhibition_banner_nr">广告</span>
  </div>
</div>
</template>
<script>
export default {
    props:{
        abvertisingData:Array,
    }
}
</script>
<style lang="scss" scoped>
/* 图片广告开始 */

.exhibition_banner {
  width: 100%;
  height: 0.7rem;
  overflow: hidden;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 0.7rem;
  }
}

.exhibition_banner_nr {
  position: absolute;
  right: 2%;
  top: 5%;
  color: #d0d0d0;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.02rem 0.05rem;
  font-size: 0.1rem;
  border-radius: 0.02rem;
}

/* 图片广告结尾 */
</style>

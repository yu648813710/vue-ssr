<template>
  <div class="body_shdow">
      <h1>房源网</h1>
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 @import '../assets/css/common';
.body_shdow {
  width: 100%;
  height: 100vh;
  background: #fff;
  position: fixed;
  left:0;
  top:0;
  z-index:10009;
  .px{
      position: absolute;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
  }
  h1{
      font-size: 20px;
      line-height: 60px;
      color:$main_color;
      text-align: center;
    top:30%;
    @extend .px;
  }
  .spinner {
    width: 60px;
    height: 60px;    
    top:50%;
    @extend .px;

  }
  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #67cf22;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: bounce 2s infinite ease-in-out;
    animation: bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

}
@-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
</style>

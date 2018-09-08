<template>
  <div class="magic">
    <div class="magic-inner">
      <div class="magic-inner-box"></div>
      <div class="magic-inner-box"></div>
      <div class="magic-inner-box"></div>
      <div class="magic-inner-box"></div>
      <div class="magic-inner-box"></div>
      <div class="magic-inner-box"></div>
    </div>
    <div class="magic-outer">
      <div class="magic-outer-box"></div>
      <div class="magic-outer-box"></div>
      <div class="magic-outer-box"></div>
      <div class="magic-outer-box"></div>
      <div class="magic-outer-box"></div>
      <div class="magic-outer-box"></div>
    </div>
    <!--<div class="magic-outer">-->
      <!--<div class="magic-outer-box">Java</div>-->
      <!--<div class="magic-outer-box">PHP</div>-->
      <!--<div class="magic-outer-box">PS</div>-->
      <!--<div class="magic-outer-box">SASS</div>-->
      <!--<div class="magic-outer-box">KOA2</div>-->
      <!--<div class="magic-outer-box">Express</div>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'MagicCube'
}
</script>

<style scoped lang="scss">
  .magic {
    position: relative;
    height: 400px;
    margin-left: 10px;
    transform-style: preserve-3d;
    animation: magic 12s ease infinite;
    &-inner {
      &-box {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -100px;
        margin-left: -100px;
        border: 1px solid green;
        width: 200px;
        height: 200px;
        color: #FFFFFF;
        font-size: 30px;
        font-weight: 700;
        line-height: 200px;
        text-align: center;
        opacity: 0.8;
        &:nth-child(1) {
          background-image: url("/static/img/jq.jpg");
          transform: rotateY(90deg) translateZ(-100px);
        }
        &:nth-child(2) {
          background-image: url("/static/img/h5.jpg");
          transform: rotateY(90deg) translateZ(100px);
        }
        &:nth-child(3) {
          background-image: url("/static/img/css3.jpg");
          transform: rotateX(90deg) translateZ(-100px);
        }
        &:nth-child(4) {
          background-image: url("/static/img/node.png");
          transform: rotateX(90deg) translateZ(100px);
        }
        &:nth-child(5) {
          background-image: url("/static/img/react.png");
          transform: translateZ(-100px);
        }
        &:nth-child(6) {
          background-image: url("/static/img/vue.png");
          transform: translateZ(100px);
        }
      }
    }
    &-outer {
      &-box {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -150px;
        margin-left: -150px;
        border: 1px solid #ccc;
        width: 300px;
        height: 300px;
        color: #000;
        font-size: 30px;
        font-weight: 700;
        line-height: 300px;
        text-align: center;
        opacity: 0.8;
        &:nth-child(1) {
          background: rgba(255, 255, 255, .2);
          transform: rotateY(90deg) translateZ(-150px);
        }
        &:nth-child(2) {
          background: rgba(255, 255, 255, .2);
          transform: rotateY(90deg) translateZ(150px);
        }
        &:nth-child(3) {
          background: rgba(255, 255, 255, .2);
          transform: rotateX(90deg) translateZ(-150px);
        }
        &:nth-child(4) {
          background: rgba(255, 255, 255, .2);
          transform: rotateX(90deg) translateZ(150px);
        }
        &:nth-child(5) {
          background: rgba(255, 255, 255, .2);
          transform: translateZ(-150px);
        }
        &:nth-child(6) {
          background: rgba(255, 255, 255, .2);
          transform: translateZ(150px);
        }
      }
    }
  }

  @keyframes magic {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }
</style>

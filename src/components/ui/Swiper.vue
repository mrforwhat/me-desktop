<template>
    <div class="swiper">
      <ul>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutLeft">
        <li class="swiper-item animated" v-show="index===0" :style="{'background-image':'url(/static/img/'+imgList[0]+')'}">
        </li>
        </transition>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutLeft">
        <li class="swiper-item animated" v-show="index===1" :style="{'background-image':'url(/static/img/'+imgList[1]+')'}">
        </li>
        </transition>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutLeft">
        <li class="swiper-item animated" v-show="index===2" :style="{'background-image':'url(/static/img/'+imgList[2]+')'}">
        </li>
        </transition>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Swiper',
  data: function () {
    return {
      index: 0,
      imgList: [
        'banner-1.jpg',
        'banner-2.jpg',
        'banner-3.jpg'
      ]
    }
  },
  mounted: function () {
    let the = this
    let currentIndex = 0
    setInterval(function () {
      currentIndex = ++the.index
      if (currentIndex > 2) {
        currentIndex = 0
      }
      the.index = currentIndex
    }, 5000)
  }
}
</script>

<style scoped lang="scss">
  .swiper{
    width:620px;
    height:250px;
    position: relative;
    overflow: hidden;
    &-item{
      position: absolute;
      width:620px;
      height:250px;
      background-size:100% 100%;
    }
  }
</style>

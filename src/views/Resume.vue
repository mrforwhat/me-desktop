<template>
  <div class="resume">
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <nav-menu ref="nav" v-show="navShow" v-bind:navList="navList"  class="animated" @active="onActive"></nav-menu>
    </transition>
    <full-page ref="fullpage" @slide="onSlide"></full-page>
    <div class="arrow" v-show="arrowShow">
      <div class="arrow-atom"></div>
      <div class="arrow-atom"></div>
    </div>
  </div>
</template>

<script>
import FullPage from '@/components/ui/FullPage'
import NavMenu from '@/components/ui/NavMenu'
let navList = [
  {name: '主页', active: false, index: 0},
  {name: '关于我', active: true, index: 1},
  {name: '项目', active: false, index: 2},
  {name: '经历', active: false, index: 3}
]
export default {
  name: 'Resume',
  components: {
    FullPage,
    NavMenu
  },
  data: function () {
    return {
      navShow: false,
      arrowShow: true,
      navList
    }
  },
  methods: {
    onSlide: function (index) {
      this.navShow = index > 0
      this.arrowShow = index < 3
      this.$children[0].active(index)
    },
    onActive: function (index) {
      this.$children[1].scrollTo(index)
      this.navShow = index > 0
    }
  }
}
</script>

<style scoped lang="scss">
  .arrow{
    width:50px;
    height:50px;
    position: fixed;
    bottom:20px;
    left:50%;
    transform:translateX(-50%);
    z-index:9999;
    animation: transY 3s infinite;
    &-atom{
      width:20px;
      height:20px;
      border-top:1px solid white;
      border-right:1px solid white;
      border-bottom:none;
      border-left:none;
      transform:rotate(-225deg);
      margin-left:13px;
      &:nth-child(2){
        margin-top:-6px;
      }
    }
  }
  @keyframes transY {
    from{
      transform: translateY(-50px);
    }
    to{
      transform: translateY(0px);
    }
  }
</style>

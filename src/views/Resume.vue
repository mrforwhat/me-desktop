<template>
  <div class="resume">
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <nav-menu ref="nav" v-show="navShow" v-bind:navList="navList"  class="animated" @active="onActive"></nav-menu>
    </transition>
    <full-page ref="fullpage" @slide="onSlide"></full-page>
  </div>
</template>

<script>
import FullPage from '@/components/ui/FullPage'
import NavMenu from '@/components/ui/NavMenu'
let navList = [
  {name: '主页', active: false, index: 0},
  {name: '关于我', active: true, index: 1},
  {name: '项目', active: false, index: 2},
  {name: '经历', active: false, index: 3},
  {name: '联系我', active: false, index: 4}
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
      navList
    }
  },
  methods: {
    onSlide: function (index) {
      this.navShow = index > 0
      this.$children[0].active(index)
    },
    onActive: function (index) {
      this.$children[1].scrollTo(index)
      this.navShow = index > 0
    }
  }
}
</script>

<style scoped>

</style>

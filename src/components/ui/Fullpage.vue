<template>
  <div class="fullPage" ref="container" @mousewheel="scrollPage">
    <div class="fullPage-scroll" ref="scrollEl" :index="0">
      <div class="fullPage-slide" :style="{height:containerHeight+'px'}">
        <profile></profile>
      </div>
      <div class="fullPage-slide" :style="{height:containerHeight+'px'}">
        <about-me></about-me>
      </div>
      <div class="fullPage-slide" :style="{height:containerHeight+'px'}">3</div>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/resume/Profile'
import AboutMe from '@/components/resume/AboutMe'
import attribute from 'blear.core.attribute'

export default {
  name: 'Fullpage',
  components: {
    Profile,
    AboutMe
  },
  data: function () {
    return {
      containerHeight: window.innerHeight,
      index: 0,
      top: 0
    }
  },
  mounted: function () {
    this.containerHeight = this.$refs.container.offsetHeight
  },
  methods: {
    scrollPage: function (e) {
      let height = this.containerHeight
      let index = this.index
      let direction = e.deltaY > 0 ? 'down' : 'up'
      let scrollEl = this.$refs.scrollEl
      if (direction === 'down') {
        console.log('down')
        if (index < 2) {
          this.top = this.top - height
          this.index++
          attribute.style(scrollEl, 'transform', `translateY(${this.top}px)`)
        }
      } else {
        console.log('up')
        if (index > 0) {
          this.top = this.top + height
          this.index--
          attribute.style(scrollEl, 'transform', `translateY(${this.top}px)`)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .fullPage {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
    &-scroll {
      -webkit-transition: all ease 1s;
      -moz-transition: all ease 1s;
      -ms-transition: all ease 1s;
      -o-transition: all ease 1s;
      transition: all ease 1s;
    }
    &-slide {
      background: #f2f2f2;
      &:nth-child(1){
        background:orange;
      }
      &:nth-child(2){
        background:rgba(124,246,108,0.9);
      }
      &:nth-child(3){
        background:rgba(124,146,108,0.9);
      }
    }
  }
</style>

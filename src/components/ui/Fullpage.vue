<template>
  <div class="fullPage" ref="container" @mousewheel="scrollPage">
    <div class="fullPage-scroll" ref="scorllEl" :index="0">
      <div class="fullPage-slide" :style="{height:containerHeight}">
        <profile></profile>
      </div>
      <div class="fullPage-slide" :style="{height:containerHeight}">
        <about-me></about-me>
      </div>
      <div class="fullPage-slide" :style="{height:containerHeight}">3</div>
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
      containerHeight: window.innerHeight + 'px',
      index: 0
    }
  },
  mounted: function () {
    this.containerHeight = this.$refs.container.offsetHeight + 'px'
  },
  methods: {
    scrollPage: function (e) {
      let height = this.containerHeight
      let index = this.index
      let direction = e.deltaY > 0 ? 'down' : 'up'
      let scorllEl = this.$refs.scorllEl
      if (direction === 'down') {
        console.log('down')
        if (index < 2) {
          attribute.style(scorllEl, 'transform', `translateY(-${index * height + height})`)
        }
      } else {
        console.log('up')
        if (index > -1) {
          attribute.style(scorllEl, 'transform', `translateY(${index * height - height})`)
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
    }
  }
</style>

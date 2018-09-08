<template>
  <div class="fullPage" ref="container" @mousewheel="scrollPage">
    <div class="fullPage-scroll" ref="scrollEl" :index="0">
      <section class="fullPage-slide" :style="{height:containerHeight+'px'}">
        <profile></profile>
      </section>
      <section class="fullPage-slide" :style="{height:containerHeight+'px'}">
        <daily :index="index"></daily>
      </section>
      <section class="fullPage-slide" :style="{height:containerHeight+'px'}">
        <project :index="index"></project>
      </section>
      <section class="fullPage-slide" :style="{height:containerHeight+'px'}">
        <experience></experience>
      </section>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/resume/Profile'
import Daily from '@/components/resume/Daily'
import Project from '@/components/resume/Project'
import Experience from '@/components/resume/Experience'
import attribute from 'blear.core.attribute'

export default {
  name: 'Fullpage',
  components: {
    Experience,
    Profile,
    Project,
    Daily
  },
  props: ['activeIndex'],
  data: function () {
    return {
      containerHeight: window.innerHeight,
      index: 0, // 上下滚动时页面所在的位置
      top: 0,
      timer: 0 // 用于节流
    }
  },
  mounted: function () {
    this.containerHeight = this.$refs.container.offsetHeight
  },
  methods: {
    scrollPage: function (e) {
      let the = this
      if (!the.timer) {
        the.timer = setTimeout(function () {
          let height = the.containerHeight
          let index = the.index
          let direction = e.wheelDelta < 0 ? 'down' : 'up'
          let scrollEl = the.$refs.scrollEl
          if (direction === 'down') {
            if (index < 3) {
              the.top = the.top - height
              the.index++
              attribute.style(scrollEl, 'transform', `translateY(${the.top}px)`)
            }
          } else {
            if (index > 0) {
              the.top = the.top + height
              the.index--
              attribute.style(scrollEl, 'transform', `translateY(${the.top}px)`)
            }
          }
          the.timer = 0
          the.$emit('slide', the.index)
        }, 500)
      }
    },
    scrollTo: function (activeIndex) {
      let height = this.containerHeight
      let scrollEl = this.$refs.scrollEl
      this.index = activeIndex
      this.top = -activeIndex * height
      attribute.style(scrollEl, 'transform', `translateY(${this.top}px)`)
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
      transition: all ease 1.2s;
    }
    &-slide {
      background: #f2f2f2;
      &:nth-child(3){
        background:rgba(124,146,108,0.9);
      }
    }
  }
</style>

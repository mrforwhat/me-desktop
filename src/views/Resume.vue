<template>
  <div class="resume">
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <nav-menu ref="nav" v-show="navShow" class="animated"></nav-menu>
    </transition>
    <full-page ref="fullpage" @slide="onSlide"></full-page>
  </div>
</template>

<script>
import FullPage from '@/components/ui/FullPage'
import NavMenu from '@/components/ui/NavMenu'
export default {
  name: 'Resume',
  components: {
    FullPage,
    NavMenu
  },
  data: function () {
    return {
      navShow: false
    }
  },
  methods: {
    onSlide: function (index) {
      this.navShow = index > 0
    }
  }
}
</script>

<style scoped>

</style>

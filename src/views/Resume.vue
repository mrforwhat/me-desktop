<template>
  <div class="resume">
    <nav-menu ref="nav"></nav-menu>
    <full-page ref="fullpage"></full-page>
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
  }
}
</script>

<style scoped>

</style>

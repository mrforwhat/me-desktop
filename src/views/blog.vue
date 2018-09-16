<template>
  <div class="blog">
    <nav-menu v-bind:navList="navList"></nav-menu>
    <div class="blog-content">博客内容区</div>
  </div>
</template>

<script>
import NavMenu from '@/components/ui/NavMenu'
let navList = [
  {name: '主页', active: true, index: 0},
  {name: '文章', active: false, index: 1},
  {name: '分类', active: false, index: 2},
  {name: '标签', active: false, index: 3}
]
export default {
  name: 'blog',
  components: {
    NavMenu
  },
  data: function () {
    return {
      navList
    }
  }
}
</script>

<style scoped>

</style>

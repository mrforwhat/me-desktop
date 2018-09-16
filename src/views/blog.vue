<template>
  <div class="blog">
    <nav-menu v-bind:navList="navList"></nav-menu>
    <div class="blog-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/ui/NavMenu'

let navList = [
  {name: '主页', link: 'home', active: true, index: 0},
  {name: '文章', link: 'article', active: false, index: 1},
  {name: '分类', link: 'category', active: false, index: 2},
  {name: '标签', link: 'tag', active: false, index: 3}
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

<style scoped lang="scss">
  .blog {
    background: #333;
    &-content {
      width: 1000px;
      margin: 50px auto;
    }
  }
</style>

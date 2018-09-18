<template>
  <div class="blog">
    <nav-menu v-bind:navList="navList"></nav-menu>
    <div class="blog-content">
      <router-view></router-view>
    </div>
    <div class="blog-footer">
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/ui/NavMenu'
import MyFooter from '@/components/blog/MyFooter'
let navList = [
  {name: '主页', link: '/blog/home', active: true, index: 0},
  {name: '文章', link: '/blog/article', active: false, index: 1},
  {name: '分类', link: '/blog/category', active: false, index: 2},
  {name: '标签', link: '/blog/tag', active: false, index: 3}
]
export default {
  name: 'blog',
  components: {
    NavMenu,
    MyFooter
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
      margin: 25px auto 0;
      overflow:hidden;
    }
  }
</style>

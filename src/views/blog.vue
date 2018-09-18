<template>
  <div class="blog">
    <nav-menu ref="nav" v-bind:navList="navList"></nav-menu>
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
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.$refs.nav.active(to.meta.index)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    if (to.meta.hasOwnProperty('index')) {
      this.$refs.nav.active(to.meta.index)
    }
    next()
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

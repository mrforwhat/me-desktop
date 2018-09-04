<template>
  <nav>
    <ul class="nav clearfix">
      <li class="nav-item pull_left" v-for="item in navList" :key="item.index" >{{item.name}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data: function () {
    return {
      navList: [
        {name: '主页', active: false, index: 0},
        {name: '关于我', active: true, index: 1},
        {name: '经历', active: false, index: 2},
        {name: '项目', active: false, index: 3},
        {name: '联系我', active: false, index: 4}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    height: 70px;
    line-height: 70px;
    background: #232323;
    position:sticky;
    top:0;
    z-index:9999;
    border-bottom:1px solid #383838;
  }

  .nav {
    margin: 0 auto;
    width:70%;
    color:#fff;
    &-item{
      padding:0 30px;
    }
  }
</style>

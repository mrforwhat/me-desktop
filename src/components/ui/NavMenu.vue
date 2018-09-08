<template>
  <nav>
    <ul class="nav clearfix">
      <li class="nav-item pull_left" :class="{active:item.active}" v-for="item in navList" :key="item.index"
          @click="onActive(item)">
        {{item.name}}
      </li>
    </ul>
  </nav>
</template>

<script>
let navList = [
  {name: '主页', active: false, index: 0},
  {name: '关于我', active: true, index: 1},
  {name: '经历', active: false, index: 2},
  {name: '项目', active: false, index: 3},
  {name: '联系我', active: false, index: 4}
]
let lastItem = navList[1] || null
export default {
  name: 'NavMenu',
  data: function () {
    return {
      navList: navList
    }
  },
  methods: {
    onActive: function (item) {
      if (lastItem === item) {
        return false
      }
      item.active = true
      lastItem.active = false
      lastItem = item
      this.$emit('active', item.index)
    },
    active: function (index) {
      if (lastItem) {
        lastItem.active = false
      }
      this.navList[index].active = true
      lastItem = this.navList[index]
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    height: 70px;
    line-height: 70px;
    background: #232323;
    position: sticky;
    top: 0;
    z-index: 9999;
    border-bottom: 1px solid #383838;
  }

  .nav {
    margin: 0 auto;
    width: 70%;
    color: #fff;
    &-item {
      padding: 0 30px;
      &.active {
        color: #03A9F4;
      }
    }
  }
</style>

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
export default {
  name: 'NavMenu',
  props: ['navList'],
  data: function () {
    return {
    }
  },
  beforeMount: function () {
    let navList = this.navList
    this.lastItem = navList[0]
  },
  methods: {
    onActive: function (item) {
      if (this.lastItem === item) {
        return false
      }
      item.active = true
      this.lastItem.active = false
      this.lastItem = item
      this.$emit('active', item.index)
      if (item.link) {
        this.$router.push(item.link)
      }
    },
    active: function (index) {
      if (this.lastItem) {
        this.lastItem.active = false
      }
      this.navList[index].active = true
      this.lastItem = this.navList[index]
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

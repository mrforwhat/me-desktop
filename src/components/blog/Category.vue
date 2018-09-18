<template>
    <div class="category">
      <div class="category-body"></div>
      <div class="category-side">
        <Side :top10="top10" :life="life" :hot="hot" :player="player" ></Side>
      </div>
    </div>
</template>

<script>
import Side from '@/components/blog/Side'
export default {
  name: 'Category',
  components: {
    Side
  },
  data: function () {
    return {
      top10: false,
      life: true,
      hot: true,
      player: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../../static/css/module/variable';

  .category{
    display: flex;
    padding-bottom:20px;
    &-body {
      flex: none;
      width: 645px;
      border: 1px solid #111;
      border-radius: 6px;
      background: rgba(255, 255, 255, .9);
    }
    &-side {
      flex-grow: 1;
      margin-left: 25px;
      width: 330px;
    }
  }
</style>

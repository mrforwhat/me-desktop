<template>
  <div class="article">
    <div class="article-body">
      <article-sort></article-sort>
    </div>
    <div class="article-side">
      <Side :top10="top10" :life="life" :hot="hot" :player="player" ></Side>
    </div>
  </div>
</template>

<script>
import Side from '@/components/blog/Side'
import ArticleSort from '@/components/ui/ArticleSort'
export default {
  name: 'Article',
  components: {
    Side,
    ArticleSort
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

  .article {
    display: flex;
    &-body {
      flex: none;
      width: 645px;
      border: 1px solid #111;
      border-radius: 6px;
      background: rgba(255, 255, 255, .9);
      padding:30px 50px;
    }
    &-side {
      flex-grow: 1;
      margin-left: 25px;
      width: 330px;
    }
  }
</style>

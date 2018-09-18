<template>
    <div class="category">
      <div class="category-body">
        <h2 class="category-title text_center">分类-10</h2>
        <ul class="category-list">
          <li class="category-item">
            <a href="">Web</a>
            <span class="category-num">(5)</span>
            <ul class="category-list-child">
              <li class="category-item">
                <a href="">HTML</a>
                <span class="category-num">(1)</span>
              </li>
              <li class="category-item">
                <a href="">css</a>
                <span class="category-num">(1)</span>
              </li>
              <li class="category-item">
                <a href="">js</a>
                <span class="category-num">(2)</span>
              </li>
            </ul>
          </li>
          <li class="category-item">
            <a href="">框架</a>
            <span class="category-num">(2)</span>
            <ul class="category-list-child">
              <li class="category-item">
                <a href="">Vue</a>
                <span class="category-num">(1)</span>
              </li>
              <li class="category-item">
                <a href="">React</a>
                <span class="category-num">(1)</span>
              </li>
              <li class="category-item">
                <a href="">Koa</a>
                <span class="category-num">(2)</span>
              </li>
            </ul>
          </li>
          <li class="category-item">
            <a href="">笔记</a>
            <span class="category-num">(3)</span>
          </li>
          <li class="category-item">
            <a href="">i生活</a>
            <span class="category-num">(3)</span>
          </li>
        </ul>
      </div>
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
      padding: 0 50px;
      border: 1px solid #111;
      border-radius: 6px;
      background: rgba(255, 255, 255, .9);
    }
    &-side {
      flex-grow: 1;
      margin-left: 25px;
      width: 330px;
    }
    &-title{
      padding:30px;
    }
    &-list{
      padding-left:20px;
      padding-bottom:15px;
      &-child{
        padding-left:10px;
      }
    }
    &-item{
      padding-left:35px;
      line-height: 2.5;
      font-size:16px;
      position:relative;
      &:before{
        content:'';
        position:absolute;
        width:20px;
        height:20px;
        border-radius:50%;
        border:3px solid $info-color;
        left:0;
        top:8px;
      }
      &:hover:before{
        border:3px solid $warning-color;
      }
      a{
        color:#232323;
      }
    }
  }
</style>

<template>
    <div class="tag">
      <div class="tag-body">
        <h2 class="tag-title text_center">标签-12</h2>
        <div class="tag-row text_center">
          <a class="tag-item highlight" href="">笔记</a>
          <a class="tag-item" href="">html</a>
          <a class="tag-item" href="">css</a>
        </div>
        <div class="tag-row">
          <a class="tag-item" href="">Node</a>
          <a class="tag-item highlight" href="">js</a>
          <a class="tag-item" href="">express</a>
          <a class="tag-item" href="">mongoose</a>
        </div>
        <div class="tag-row">
          <a class="tag-item" href="">生活</a>
          <a class="tag-item highlight" href="">vue</a>
          <a class="tag-item" href="">中间件</a>
          <a class="tag-item highlight" href="">前端</a>
          <a class="tag-item" href="">nginx</a>
        </div>
      </div>
      <div class="tag-side">
        <Side :top10="top10" :life="life" :hot="hot" :player="player" ></Side>
      </div>
    </div>
</template>

<script>
import Side from '@/components/blog/Side'
export default {
  name: 'Tag',
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
  .tag{
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
    &-row{
      display: flex;
      padding:50px 20px;
    }
    &-item{
      flex-grow:1;
    }
    a{
      color:$info-color;
      display: inline-block;
      transition:all 5s;
    }
  }
  .highlight{
    font-size:26px;
    animation: scaleselfe 5s linear  alternate infinite;
  }
  @keyframes scaleselfe
  {
    from {transform:scale(1);}
    to {transform:scale(2);}
  }
</style>

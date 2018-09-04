<template>
  <div class="daily">
    <div class="daily-header">
      <p class="daily-title">我的日常工作</p>
      <p class="daily-tip">神圣的工作在每个人的日常事务里，理想的前途在于一点一滴做起。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Daily'
}
</script>

<style scoped lang="scss">
  .daily {
    height:100%;
    background:#232323;
    &-header {
      padding-top:180px;
      text-align: center;
    }
    &-title{
      font-size:38px;
      color:#fff;
    }
    &-tip{
      color:rgba(255,255,255,.7);
      font-size:16px;
    }
  }
</style>

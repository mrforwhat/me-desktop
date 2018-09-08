<template>
  <div class="experience">
    <div class="experience-header">
      <p class="experience-title">经历</p>
      <p class="experience-tip">时间是伟大的作者，它必将给每一个人书写完美的结局</p>
    </div>
    <div class="experience-content">
      <time-line></time-line>
    </div>
  </div>
</template>

<script>
import TimeLine from '@/components/ui/TimeLine'
export default {
  name: 'Experience',
  components: {
    TimeLine
  }
}
</script>

<style scoped lang="scss">
  .experience{
    background: #232323;
    height: 100%;
    &-header {
      padding-top: 140px;
      text-align: center;
    }
    &-title {
      font-size: 38px;
      color: rgba(255, 255, 255, .9);
      padding: 20px 0;
    }
    &-tip {
      color: #fff;
      font-size: 16px;
    }
    &-content {
      width: 1200px;
      padding-top: 60px;
      margin: 0 auto;
    }
  }
</style>

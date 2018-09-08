<template>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-panel">
        <div class="timeline-panel-header">
          <div class="timeline-panel-title">杭州北斗区块链科技有限公司</div>
          <div class="timeline-panel-date">2017.6-至今</div>
        </div>
        <div class="timeline-panel-content">前端工程师，官网、后台管理系统、微信公众号、webApp开发，与银行、商户渠道做产品技术对接</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-panel">
        <div class="timeline-panel-header">
          <div class="timeline-panel-title">中软国际（外派华为）</div>
          <div class="timeline-panel-date">2016.8-2017.5</div>
        </div>
        <div class="timeline-panel-content">前端工程师，前后端数据交互，公共组件封装</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-panel">
        <div class="timeline-panel-header">
          <div class="timeline-panel-title">西安美林数据股份有限公司</div>
          <div class="timeline-panel-date">2015.3-2016.4</div>
        </div>
        <div class="timeline-panel-content">软件工程师，管理平台模块开发、客户现场部署实施</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-panel">
        <div class="timeline-panel-header">
          <div class="timeline-panel-title">西安文理学院-计算机科学与技术</div>
          <div class="timeline-panel-date">2011.9-2015.6</div>
        </div>
        <div class="timeline-panel-content">自学ps、flash、div+css网页布局，考有CET4，Java2级证书</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine'
}
</script>

<style scoped lang="scss">
  $line-color: #797979;
  .timeline {
    &-item {
      margin: 0 0 25px 40px;
      position:relative;
      &:before{
        content:'';
        position:absolute;
        top:20px;
        width:1px;
        height:100%;
        left:-30px;
        background:$line-color;
      }
      &:after{
        content:'';
        position:absolute;
        left:-40px;
        border:2px solid #232323;
        top:0;
        width:20px;
        height:20px;
        background:#03A9F4;
        border-radius:50%;
      }
    }
    &-panel {
      border: 1px solid $line-color;
      border-radius: 5px;
      background: #232323;
      padding: 10px;
      position: relative;
      &-header {
        border-bottom: 1px solid $line-color;
      }
      &-title {
        font-size: 16px;
        color: #fff;
      }
      &-date {
        font-size: 12px;
        color: #a5a5a5;
        padding: 5px 0 10px;
      }
      &-content {
        padding: 10px 0;
        color: #888888;
      }
    }
  }
  .timeline-item:hover{
    .timeline-item:after{
      border:2px solid #fff;
    }
  }
</style>

<template>
  <div class="project flex">
    <div class="flex-container">
      <div class="project-header">
        <p class="project-title">项目</p>
        <p class="project-tip">一路打怪升级，不断武装自己</p>
      </div>
      <div class="project-content">
        <ul class="project-row">
          <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
            <li class="project-item service text_center animated" v-show="index===2">
              <span><i class="service-icon iconfont icon-app"></i></span>
              <div class="service-title">直银汇</div>
              <div class="service-desc">
                直银汇平台是一个对接正规银行理财产品的平台，主要为银行提供产品服务，其下对接各大渠道...
              </div>
            </li>
          </transition>
          <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
            <li class="project-item service text_center animated" v-show="index===2">
              <span><i class="service-icon iconfont icon-pc"></i></span>
              <div class="service-title">东方频道网</div>
              <div class="service-desc">
                东方频道网是上海东方网下的一个子频道网站，主要替东方网运营新闻资讯、理财产品等...
              </div>
            </li>
          </transition>
          <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <li class="project-item service text_center animated" v-show="index===2">
              <span><i class="service-icon iconfont icon-statistic"></i></span>
              <div class="service-title">智慧天玑</div>
              <div class="service-desc">
                采用无痕埋点采集技术，全面覆盖APP，H5，Web和小程序等多种平台，实时全量采集用户所有行为数据，提供全面的数据指标运营体系方便使用者查看产品及活动的整体情况，并且提供渠道分析，留存分析，用户分群和监控预警等分析工具使得运营流量价值最大化，从而为企业构建一站式智能流量分析平台。
              </div>
            </li>
          </transition>
          <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <li class="project-item service text_center animated" v-show="index===2">
              <span><i class="service-icon iconfont icon-H"></i></span>
              <div class="service-title">清心桐山</div>
              <div class="service-desc">
                清心桐山是福鼎的党建项目清心桐山是福鼎的党建项目清心桐山是福鼎的党建项目清心桐山是福鼎的党建项目
              </div>
            </li>
          </transition>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['index']
}
</script>

<style scoped lang="scss">
  .project {
    background: #03A9F4;
    height: 100%;
    &-header {
      padding-top: 100px;
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
    &-row {
      display: flex;
    }
    &-item {
      flex-grow: 1;
      width: 25%;
      margin: 0 20px;
      > span {
        display: inline-block;
        width: 90px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        border-bottom: 1px dashed #fff;
      }
    }
  }

  .service {
    color: #fff;
    &-icon {
      font-size: 30px;
    }
    &-title {
      margin: 35px 0 15px;
    }
    &-desc {
      text-align: left;
    }
  }
</style>

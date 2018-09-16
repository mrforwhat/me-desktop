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
                直银汇平台是一个对接正规银行理财产品的平台，主要为银行提供产品服务，其下服务于不同营销场景内的目标客群，每个渠道独立运营，适应不同场景下的个性化服务；数据从不同的商户系统反馈给核心系统，数据不断积累，进行大数据分析引导产品优化和创新工作。
              </div>
            </li>
          </transition>
          <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
            <li class="project-item service text_center animated" v-show="index===2">
              <span><i class="service-icon iconfont icon-pc"></i></span>
              <div class="service-title">智慧天玑</div>
              <div class="service-desc">
                采用无痕埋点采集技术，全面覆盖APP，H5，Web和小程序等多种平台，实时全量采集用户所有行为数据，提供全面的数据指标运营体系方便使用者查看产品及活动的整体情况，并且提供渠道分析，留存分析，用户分群和监控预警等分析工具使得运营流量价值最大化，从而为企业构建一站式智能流量分析平台。
              </div>
            </li>
          </transition>
          <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <li class="project-item service text_center animated" v-show="index===2">
              <span><i class="service-icon iconfont icon-statistic"></i></span>
              <div class="service-title">苍梧农信社</div>
              <div class="service-desc">
                服务于苍梧农信社，线上提供公务卡预约、贷款预约、大额取现预约、etc预约、pos收单预约和收银通预约等6大预约服务。另外系统内嵌数据统计、人员任命和外拓营销系统等功能。系统用户已权限主要分为管理员、业务员和普通用户，用户可在线预约办理业务。
              </div>
            </li>
          </transition>
          <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <li class="project-item service text_center animated" v-show="index===2">
              <span><i class="service-icon iconfont icon-H"></i></span>
              <div class="service-title">清新桐山</div>
              <div class="service-desc">
                以党建系统服务平台为基础，建设面向全系统基层党组织党员的“掌上党建”移动端产品。使上级党委能够通过平台的运作来进一步明确党支部工作目标，监督基层党支部的工作状态；基层党支部能够使用移动端工具来完成支部党务党建基本工作任务，同时也能创新支部工作和学习方式，推动党员履职尽责。
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
      text-align: justify;
    }
  }
</style>

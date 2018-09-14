<template>
  <div class="daily flex">
    <div class="flex-container">
      <div class="daily-header">
        <p class="daily-title">我的日常工作</p>
        <p class="daily-tip">神圣的工作在每个人的日常事务里，理想的前途在于一点一滴做起。</p>
      </div>
      <div class="daily-content clearfix">
        <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
          <div class="panel panel_duty pull_left animated" v-show="index===1">
            <p class="panel-title text_center">任务列表</p>
            <div class="panel-content">
              <ul class="todolist">
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  配合UCD、产品经理，高度还原视觉设计稿
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  公共组件封装，通用模块抽象
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  前后端数据交互
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  页面重构
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  性能优化
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  浏览器兼容性调试
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  ua适配
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  node中间件编写
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  总结、讨论、制定团队前端开发规范
                </li>
                <li class="todolist-item">
                  <i class="iconfont icon-yes"></i>
                  关注技术前沿
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
          <div class="panel panel_skill pull_right animated" v-show="index===1">
            <p class="panel-title text_center">技能魔方</p>
            <magic-cube></magic-cube>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import MagicCube from '../ui/MagicCube'

export default {
  name: 'Daily',
  components: {MagicCube},
  props: ['index']
}
</script>

<style scoped lang="scss">
  .daily {
    height: 100%;
    background: #232323;
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
      color: rgba(255, 255, 255, .7);
      font-size: 16px;
    }
    &-content {
      width: 1000px;
      padding-top: 60px;
      margin: 0 auto;
    }
  }

  .todolist {
    color: rgba(255, 255, 255, .9);
    &-item {
      font-size: 16px;
      line-height: 2;
    }
  }

  .panel {
    &-title {
      color: rgba(255, 255, 255, .9);
      font-size: 30px;
      padding-bottom: 10px;
    }
    &_duty {
      width: 475px;
      margin-right: 50px;
    }
    &_skill {
      width: 475px;
    }
  }

  .icon-yes {
    color: #00ffff;
    margin-right: 8px;
  }
</style>

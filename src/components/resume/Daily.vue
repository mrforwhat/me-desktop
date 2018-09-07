<template>
  <div class="daily">
    <div class="daily-header">
      <p class="daily-title">我的日常工作</p>
      <p class="daily-tip">神圣的工作在每个人的日常事务里，理想的前途在于一点一滴做起。</p>
    </div>
    <div class="daily-content clearfix">
      <div class="panel panel_duty pull_left">
        <p class="panel-title text_center">任务列表</p>
        <div class="panel-content">
          <ul class="todolist">
            <li class="todolist-item">
              <i class="iconfont icon-yes"></i>
              配合UCD、产品经理，高度还原视觉设计稿
            </li>
            <li class="todolist-item">
              <i class="iconfont icon-yes"></i>
              公共组件封装
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
          </ul>
        </div>
      </div>
      <div class="panel panel_skill pull_right">
        <p class="panel-title text_center">技能魔方</p>
        <div class="stage">
          <div>
            <div class="box box1">HTML5</div>
            <div class="box box2">CSS3</div>
            <div class="box box3">React</div>
            <div class="box box4">NodeJs</div>
            <div class="box box5">Jquery</div>
            <div class="box box6">Vue</div>
          </div>
          <div>
            <div class="bigbox bigbox1">HTML5</div>
            <div class="bigbox bigbox2">CSS3</div>
            <div class="bigbox bigbox3">React</div>
            <div class="bigbox bigbox4">NodeJs</div>
            <div class="bigbox bigbox5">Jquery</div>
            <div class="bigbox bigbox6">Vue</div>
          </div>
        </div>
      </div>
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
    height: 100%;
    background: #232323;
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

  .stage {
    position: relative;
    height: 400px;
    width: 80%;
    border: 1px solid red;
    margin-left: 10px;
    transform-style: preserve-3d;
    animation: magic 8s ease infinite;
  }

  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    margin-left: -100px;
    border: 1px solid green;
    width: 200px;
    height: 200px;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 700;
    line-height: 200px;
    text-align: center;
    opacity: 0.8;
  }

  .box1 {
    background: #2b669a;
    transform: rotateY(90deg) translateZ(-100px);
  }

  .box2 {
    background: #509a64;
    transform: rotateY(90deg) translateZ(100px);
  }

  .box3 {
    background: #9a5468;
    transform: rotateX(90deg) translateZ(-100px);
  }

  .box4 {
    background: #979a25;
    transform: rotateX(90deg) translateZ(100px);
  }

  .box5 {
    background: #97709a;
    transform: translateZ(-100px);
  }

  .box6 {
    background: #589a25;
    transform: translateZ(100px);
  }

  .bigbox {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -150px;
    margin-left: -150px;
    border: 1px solid green;
    width: 300px;
    height: 300px;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 700;
    line-height: 200px;
    text-align: center;
    opacity: 0.8;
  }

  .bigbox1 {
    background: rgba(255,255,255,.6);
    transform: rotateY(90deg) translateZ(-150px);
  }

  .bigbox2 {
    background: rgba(255,255,255,.6);
    transform: rotateY(90deg) translateZ(150px);
  }

  .bigbox3 {
    background: rgba(255,255,255,.6);
    transform: rotateX(90deg) translateZ(-150px);
  }

  .bigbox4 {
    background: rgba(255,255,255,.6);
    transform: rotateX(90deg) translateZ(150px);
  }

  .bigbox5 {
    background: rgba(255,255,255,.6);
    transform: translateZ(-150px);
  }

  .bigbox6 {
    background: rgba(255,255,255,.6);
    transform: translateZ(150px);
  }
  @keyframes magic {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }
</style>

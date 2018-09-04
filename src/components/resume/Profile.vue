<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-avatar"></div>
    </div>
    <div class="profile-content">
      <p class="profile-name">MrForwhat</p>
      <p class="profile-job">Web Front-end Developer</p>
      <transition name="slide-fade">
        <div v-show="show">
          <p class="profile-desc">行走于代码行之间，还原视觉设计</p>
          <p class="profile-desc">专注于标准，重视交互</p>
          <p class="profile-desc">热爱生活，崇尚创新，追求极致的用户体验</p>
        </div>
      </transition>
      <div class="profile-link">
        <div class="profile-link-item">
          <i class="iconfont icon-github"></i>
        </div>
        <div class="profile-link-item">
          <i class="iconfont icon-weixin"></i>
        </div>
        <div class="profile-link-item">
          <i class="iconfont icon-email"></i>
        </div>
        <div class="profile-link-item">
          <i class="iconfont icon-blog"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      desc: 'MrForwhat',
      show: false
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .profile {
    height: 100%;
    &-header {
      height: 35%;
      background: #0797d8;
      position: relative;
    }
    &-avatar {
      width: 150px;
      height: 150px;
      background-image: url("../../../static/img/170.png");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 50%;
      border: 4px solid rgba(255, 255, 255, .5);
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
    }
    &-content {
      background: #03A9F4;
      height: 65%;
      padding-top: 120px;
      text-align: center;
    }
    &-name {
      font-size: 26px;
      color: #fff;
    }
    &-job {
      margin: 10px 0 5px 0;
      font-size: 16px;
    }
    &-desc {
      padding: 5px 0;
      font-size: 14px;
      color: #fff;
      text-shadow: 1px 1px 1px;
    }
    &-link {
      margin-top: 50px;
      &-item {
        border: 1px solid #333;
        border-radius: 50%;
        width: 46px;
        height: 46px;
        line-height: 46px;
        display: inline-block;
        margin: 0 10px;
        opacity: 0.8;
        &:hover {
          background: #333;
          i {
            color: #fff;
          }
        }
      }
      i {
        font-size: 26px;
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 5s ease;
  }
  .slide-fade-leave-active {
    transition: all 5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
  }
</style>

<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-comment comment">
        <div class="footer-title">最新评论</div>
        <div class="comment-list">
          <div class="comment-item" v-for="(item,index) in commentList" :key="index">
            <div class="comment-pic" :style="{'background-image':'url('+item.avatar+')'}"></div>
            <div class="comment-detail">
              <p><span class="comment-user">{{item.username}}</span></p>
              <p>在<span class="comment-title">{{item.title}}</span>中评论：</p>
              <p class="txt_success">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  data: function () {
    return {
      commentList: [
        {
          avatar: '/static/img/default.jpeg',
          username: 'MrForwhat',
          title: 'centOs7下载、安装以及如何配置Nginx？',
          content: '内容实在，亲测可用'
        },
        {
          avatar: '/static/img/head1.jpg',
          username: '转角遇到bug',
          title: '新购买的阿里云，无法登陆远程服务器？',
          content: '我也碰到过'
        },
        {
          avatar: '/static/img/head2.jpg',
          username: '根号3不孤独',
          title: '新购买的阿里云服务器，外网无法访问？',
          content: '原来是因为安全组'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .footer {
    background: rgba(0, 0, 0, .4);
    &-title {
      color: #ccc;
      padding: 20px 0;
    }
    &-content {
      width: 1000px;
      margin: 0 auto;
      padding:10px 0;
    }
    &-comment {
    }
  }

  .comment {
    &-title {
      color:rgba(255,255,255,.7);
      padding:0 5px;
    }
    &-list {
    }
    &-item {
      position: relative;
      padding-left: 70px;
      margin: 5px 0;
      min-height: 75px;
    }
    &-pic {
      position: absolute;
      left: 0;
      top: 0;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background-size: 100% 100%;
    }
    &-detail {
      font-size: 12px;
      color: #797979;
      margin-left:10px;
      p{
        line-height: 1.5;
      }
    }
  }
</style>

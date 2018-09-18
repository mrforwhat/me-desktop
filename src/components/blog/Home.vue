<template>
  <div class="home">
    <div class="home-header">
      <div class="home-banner">
        <swiper></swiper>
      </div>
      <div class="home-card card aboutme">
        <div class="card-title">关于我</div>
        <div class="card-content">
          <p class="aboutme-detail">昵称：MrForwhat</p>
          <p class="aboutme-detail">职业：web前端攻城狮</p>
          <p class="aboutme-detail">兴趣：跑步、篮球、音乐</p>
          <p class="aboutme-detail">邮箱：497236467@qq.com</p>
        </div>
        <div class="card-footer">
          <ul class="aboutme-link clearfix">
            <li class="aboutme-link-item pull_left" title="简历">
              <a href="/">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-resume"></use>
              </svg>
              </a>
            </li>
            <li class="aboutme-link-item pull_left" title="主页">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-home"></use>
              </svg>
            </li>
            <li class="aboutme-link-item pull_left" title="邮箱">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mail"></use>
              </svg>
            </li>
            <li class="aboutme-link-item pull_left" title="github">
              <a href="https://github.com/mrforwhat/me-desktop">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-git"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-content">
      <div class="article home-body">
        <ul class="article-list">
          <li class="article-item" v-for="(item,index) in articleList" :key="index">
            <div class="card">
              <div class="card-title" @click="onDetail(item.id)">{{item.title}}</div>
              <div class="card-content">
                <div class="article-pic" @click="onDetail(item.id)" :style="{'background-image':'url('+item.pic+')'}">
                </div>
                <div class="article-desc">{{item.desc}}</div>
              </div>
              <div class="card-footer">
                <div class="article-date"><i class="iconfont icon-date"></i>{{item.date}}</div>
                <div class="article-action">
                  <span @click="onDetail(item.id)"><i class="iconfont icon-message"></i>{{item.comments}}</span>
                  <span><i class="iconfont icon-like"></i>{{item.favs}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-side">
        <Side :top10="top10" :life="life" :hot="hot" :player="player" ></Side>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/ui/Swiper'
import Side from './Side'

export default {
  name: 'Home',
  components: {
    Side,
    Swiper
  },
  data: function () {
    return {
      top10: true,
      life: true,
      hot: true,
      player: true,
      articleList: [
        {
          id: 1,
          title: '我希望我的爱情是这样的',
          desc: '我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，缝一颗掉了的纽扣。然后，我们一起在时光中变老',
          pic: '/static/img/article1.jpg',
          date: '2018-09-07',
          favs: 26,
          comments: 5
        },
        {
          id: 2,
          title: '我希望我的爱情是这样的',
          desc: '我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，缝一颗掉了的纽扣。然后，我们一起在时光中变老',
          pic: '/static/img/article2.jpg',
          date: '2018-09-07',
          favs: 26,
          comments: 5
        },
        {
          id: 3,
          title: '我希望我的爱情是这样的',
          desc: '我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，缝一颗掉了的纽扣。然后，我们一起在时光中变老',
          pic: '/static/img/article3.jpg',
          date: '2018-09-07',
          favs: 26,
          comments: 5
        },
        {
          id: 4,
          title: '我希望我的爱情是这样的',
          desc: '我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，缝一颗掉了的纽扣。然后，我们一起在时光中变老',
          pic: '/static/img/article3.jpg',
          date: '2018-09-07',
          favs: 26,
          comments: 5
        },
        {
          id: 5,
          title: '我希望我的爱情是这样的',
          desc: '我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，缝一颗掉了的纽扣。然后，我们一起在时光中变老',
          pic: '/static/img/article3.jpg',
          date: '2018-09-07',
          favs: 26,
          comments: 5
        }
      ]
    }
  },
  methods: {
    onDetail: function (id) {
      this.$router.push(`/blog/article/${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    &-header {
      display: flex;
    }
    &-banner {
      width: 620px;
      flex: none;
    }
    &-card {
      flex-grow: 1;
      margin-left: 20px;
    }
    &-content {
      display: flex;
      margin-top: 40px;
    }
    &-body {
      flex: none;
      width: 645px;
    }
    &-side {
      flex-grow: 1;
      margin-left: 25px;
      width:330px;
    }
  }

  .article {
    &-item {
      padding: 20px 0;
      border-right: 2px solid #111;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 44px;
        right: -7px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #111;
        border: 2px solid #333;
      }
      &:hover:after {
        border: 2px solid #eee;
      }
      & > .card {
        margin-right: 20px;
        position: relative;
        &:after {
          position: absolute;
          content: '';
          top: 20px;
          right: -10px;
          border-left: 10px solid #111;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
        }
      }
    }
    .card-content {
      display: flex;
      margin: 0 20px 20px 20px;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      font-size: 12px;
    }
    &-pic {
      flex: none;
      width: 160px;
      height: 120px;
      background-size: 100% 100%;
      margin-right: 20px;
      &:hover {
        opacity: 0.5;
        transition: all 0.6s;
      }
    }
    &-desc {
      flex-grow: 1;
      font-size: 14px;
    }
    .iconfont {
      margin-right: 5px;
    }
    span {
      margin: 0 4px;
    }
  }

  .aboutme {
    &-detail {
      padding: 5px 20px;
      font-size:14px;
    }
    .card-title{
      font-size:18px;
    }
    .card-footer{
      background:transparent;
    }
    &-link{
      margin:0 20px;
      &-item{
        width:55px;
        height:55px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px 12px;
        border-radius: 50%;
        transition:all 0.6s;
        box-shadow: 0px 1px 0px rgba(255,255,255,.1), inset 0px 1px 1px rgba(0,0,0,.7);
        &:nth-child(even){
          &:hover{
            transform:rotate(30deg);
          }
        }
        &:nth-child(odd){
          &:hover{
            transform:rotate(-30deg);
          }
        }
      }
    }
    svg{
      width:30px;
      height:30px;
    }
  }

</style>

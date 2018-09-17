<template>
    <div class="side">
      <div class="card top10">
        <div class="card-title">最新文章</div>
        <div class="card-content">
          <ul class="top10-list">
            <li class="top10-list-item txt_limit" v-for="(item,index) in top10List" :key="index">
              <span class="top10-key" :class="index<3?'txt_danger':''">{{index | IndexFormat}}</span>
              <span class="top10-val">{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="card life">
        <div class="card-title">说一说</div>
        <div class="card-content">
          <ul class="life-list">
            <li class="life-list-item" v-for="(item,index) in lifeList" :key="index">
              <div class="life-pic" :style="{'background-image':'url('+item.pic+')'}"></div>
              <div class="life-desc">
                <p class="life-title">{{item.title}}</p>
                <p class="life-feel">
                  <svg class="icon" aria-hidden="true" v-if="item.tag==='happy'">
                    <use xlink:href="#icon-happy"></use>
                  </svg>
                  <svg class="icon" aria-hidden="true" v-if="item.tag==='fendou'">
                    <use xlink:href="#icon-fendou"></use>
                  </svg>
                  <svg class="icon" aria-hidden="true" v-if="item.tag==='ganga'">
                    <use xlink:href="#icon-ganga"></use>
                  </svg>
                  {{item.feel}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card hot">
        <div class="card-title">热门点击</div>
        <div class="card-content">
          <ul class="hot-list">
            <li class="hot-list-item txt_limit" v-for="(item,index) in hotList" :key="index">
              <span class="hot-key">【{{item.tag}}】</span>
              <span class="hot-val">{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="card player">
        <div class="card-title">轻松一刻</div>
        <div class="card-content">
          <div class="player-album"></div>
          <div class="player-info">
            <p class="player-info-item">
               <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-music"></use>
                  </svg>
              <span class="player-info-val">等你下课</span>
            </p>
            <p class="player-info-item">
               <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-singer"></use>
                  </svg>
              <span class="player-info-val">周杰伦</span>
            </p>
            <p class="player-info-item">
               <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-album"></use>
                  </svg>
              <span class="player-info-val">等你下课</span>
            </p>
          </div>
        </div>
        <div class="player-panel">
          <audio src="http://fs.open.kugou.com/c634056378e8404c62555dcb1b597640/5b9f7864/G124/M00/15/08/HIcBAFpwy3CAVDr1AEIYchdgAok173.mp3"  controls></audio>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Side',
  data: function () {
    return {
      top10List: [
        {title: 'centOs下载、安装以及如何配置Nginx？'},
        {title: '新购买的阿里云，无法登陆远程服务器？'},
        {title: '新购买的阿里云服务器，外网无法访问？'},
        {title: 'SPA和SSR优缺点'},
        {title: 'vue封装简易轮播图'},
        {title: 'centOs下载、安装以及如何配置Nginx'},
        {title: 'centOs下载、安装以及如何配置Nginx'},
        {title: 'centOs下载、安装以及如何配置Nginx'},
        {title: 'centOs下载、安装以及如何配置Nginx'},
        {title: 'centOs下载、安装以及如何配置Nginx'}
      ],
      lifeList: [
        {
          title: '肆虐的青春里全靠浪，泡沫的年华里全凭吹',
          pic: '/static/img/life1.jpg',
          tag: 'happy',
          feel: '开心'
        },
        {
          title: '时间是伟大的作者，它必将给每一个人书写完美的答案',
          pic: '/static/img/life2.jpg',
          tag: 'fendou',
          feel: '励志'
        },
        {
          title: '既然选择了远方，便只顾风雨兼程',
          pic: '/static/img/life3.jpg',
          tag: 'ganga',
          feel: '伤不起'
        }
      ],
      hotList: [
        {
          title: 'genertator函数用法',
          tag: 'javascript'
        },
        {
          title: 'flex布局适合哪些场景及案例',
          tag: 'css'
        },
        {
          title: '杭州周边好玩的地方推荐',
          tag: '生活'
        },
        {
          title: 'nginx配置-一个端口映射多个域名',
          tag: '服务端'
        },
        {
          title: 'child_process对于前端自动化的作用',
          tag: 'nodeJs'
        }
      ]
    }
  },
  filters: {
    IndexFormat: function (val) {
      val++
      return val < 10 ? '0' + val : val
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../static/css/module/variable";
  .side{}
  .top10{
    margin-top:24px;
    padding-bottom:10px;
    &-list{
      &-item{
        padding:0 10px;
        line-height:2;
        font-size:14px;
        &:hover{
          .top10-val{
            transform:translateX(20px);
          }
        }
      }
    }
    &-key{
      width:20px;
      margin-right:10px;
    }
    &-val{
      display:inline-block;
      transition: all 0.6s;
    }
  }
  .life{
    margin-top:24px;
    &-list{
      &-item{
        position:relative;
        padding-left:90px;
        margin:10px;
        font-size:14px;
        min-height:60px;
      }
    }
    &-pic{
      position: absolute;
      left:0;
      top:0;
      width:80px;
      height:60px;
      background-size:100% 100%;
      transition:all 0.6s;
      &:hover{
        transform:scale(2);
        z-index:10;
      }
    }
    &-title{}
    &-feel{
      display: flex;
      align-items:center;
      font-size:12px;
      margin-top:4px;
      color:$warning-color;
    }
    svg{
      width:20px;
      height:20px;
      margin-right:5px;
    }
  }
  .hot{
    margin-top:24px;
    padding-bottom:10px;
    &-list{
      &-item{
        padding:0 10px;
        line-height:2;
        font-size:14px;
        &:hover{
          .hot-key{
            text-shadow:1px 1px 5px rgba(255,255,255,.5);
            transform:scale(1.2);
          }
        }
      }
    }
    &-key{
      margin-right:10px;
      display: inline-block;
      color:$info-color;
      min-width:85px;
      transition: all 0.6s;
    }
    &-val{
      display:inline-block;
    }
  }
  .player{
    margin-top:24px;
    padding-bottom:10px;
    .card-content{
      display: flex;
      align-items: center;
      margin:0 10px;
    }
    &-album{
      flex:none;
      width:90px;
      height:90px;
      background-image:url("/static/img/cd.png");
      background-size:100% 100%;
      margin-right:10px;
      animation: rotate 5s linear  infinite;
    }
    &-info{
      flex-grow:1;
      &-item{
        font-size:14px;
        line-height:2;
        display: flex;
        align-items: center;
      }
    }
    &-panel{
      margin-top:10px;
      text-align:center;
    }
    svg{
      width:20px;
      height:20px;
      margin-right:5px;
    }
  }
  @keyframes rotate
  {
    from {transform:rotate(0);}
    to {transform:rotate(360deg);}
  }
</style>

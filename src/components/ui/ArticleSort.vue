<template>
    <div class="article-sort">
      <div class="article-sort-title">文章 - 10</div>
      <div class="article-sort-list">
        <div class="article-sort-item month">
          <time>{{month}}</time>
        </div>
        <div class="article-sort-item" v-for="(item,index) in list" :key="index">
          <time>{{item.date}}</time>
          <a :href="'/blog/article/'+item.id">{{item.title}}</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ArticleSort',
  data: function () {
    return {
      title: '文章 - 10',
      month: '2018-09',
      list: [
        {
          date: '2018-09-02',
          title: 'centOs7下载、安装以及如何配置Nginx？',
          id: 1
        },
        {
          date: '2018-09-03',
          title: '新购买的阿里云，无法登陆远程服务器？',
          id: 2
        },
        {
          date: '2018-09-04',
          title: '新购买的阿里云服务器，外网无法访问？',
          id: 3
        },
        {
          date: '2018-09-05',
          title: 'SPA和SSR优缺点',
          id: 4
        },
        {
          date: '2018-09-06',
          title: 'vue封装简易轮播图',
          id: 5
        },
        {
          date: '2018-09-07',
          title: 'centOs7下载、安装以及如何配置Nginx？',
          id: 6
        },
        {
          date: '2018-09-08',
          title: 'centOs7下载、安装以及如何配置Nginx？',
          id: 7
        },
        {
          date: '2018-09-09',
          title: 'centOs7下载、安装以及如何配置Nginx？',
          id: 8
        },
        {
          date: '2018-09-10',
          title: 'centOs7下载、安装以及如何配置Nginx？',
          id: 9
        },
        {
          date: '2018-09-11',
          title: 'centOs7下载、安装以及如何配置Nginx？',
          id: 10
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../../static/css/module/variable';
  $sort-color:#49b1f5;
  .article-sort{
    &-title{
      padding-left:20px;
      padding-bottom:30px;
      font-size:20px;
      position:relative;
      border-left:2px solid $sort-color;
      &:before{
        content: '';
        position: absolute;
        background:#fff;
        left: -11px;
        top:0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border:2px solid $sort-color;
      }
      &:hover:before{
        border:2px solid $warning-color;
      }
    }
    &-list{
      border-left:2px solid $sort-color;
    }
    &-item{
      padding-left:20px;
      padding-bottom:20px;
      position:relative;
      font-size:16px;
      time{
        color:darkgray;
        margin-right:10px;
        font-size:14px;
      }
      a{
        color:#222;
      }
      &.month{
        time{
          font-size:18px;
        }
      }
      &:before{
        content: '';
        position: absolute;
        background:#fff;
        left: -8px;
        top:0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border:2px solid $sort-color;
      }
      &:hover:before{
        border:2px solid $warning-color;
      }
    }
  }

</style>

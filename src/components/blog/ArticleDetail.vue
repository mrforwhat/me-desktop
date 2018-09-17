<template>
  <div class="article">
    <div class="article-body">
      <div class="article-bread">
        <span class="article-bread-item">文章详情</span><span class="article-bread-item active">服务端</span>
      </div>
      <div class="article-header">
        <h2 class="article-title">centOs7下载、安装以及如何配置Nginx？</h2>
        <div class="article-meta">
          发布时间：2018-09-07 编辑：MrForwhat 阅读（25）
        </div>
      </div>
      <div class="article-content">
        <p>
          最近在阿里云服务器部署node项目时，饶了很多弯路，踩了好多坑，为了以后迁移服务器或者新手入门少走弯路，决定写下这篇套路文章。一：为加深
          自己对linux系统相关命令的掌握；二：为学习nginx扫扫盲
        </p>
        <p class="article-pic" :style="{'background-image':'url(/static/img/article1.jpg)'}"></p>
        <p>
          linux安装nginx分两种安装模式：1.下载压缩包、手动下载依赖；2.yum安装，一键到底。两种方式我都尝试过，最后决定还是用第一种方式，因为平时
          都在windows下操作，第一种安装后的结果更贴近平时使用习惯。
        </p>
        <h2>安装环境、依赖</h2>
        <p>
          <strong>一、gcc安装</strong>
        </p>
        <p>
          <code>yum install gcc-c++</code>
          编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装,已安装则忽略。
        </p>
        <p>
          <strong>二. PCRE pcre-devel 安装</strong>
        </p>
        <p>
          <code>yum install -y pcre pcre-devel</code>
          nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。
        </p>
        <p>
          <strong>三. zlib 安装</strong>
        </p>
        <p>
          <code>yum install -y zlib zlib-devel</code>
          zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。
        </p>
        <p>
          <strong>四. OpenSSL 安装</strong>
        </p>
        <p>
          <code>yum install -y openssl openssl-devel</code>
          OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
          nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。
        </p>
        <h2>下载压缩包、解压、安装</h2>
        <p>
          <code>wget -c https://nginx.org/download/nginx-1.15.3.tar.gz</code>
        </p>
        <p><code>tar -zxvf nginx-1.15.3.tar.gz</code></p>
        <p><code>cd nginx-1.15.3</code></p>
        <h2>配置、编译安装</h2>
        <p><code>./configure</code>默认配置</p>
        <p><code>make</code></p>
        <p><code>make install</code></p>
      </div>
    </div>
    <div class="article-side">
      <Side :top10="top10" :life="life" :hot="hot" :player="player" ></Side>
    </div>
  </div>
</template>

<script>
import Side from '@/components/blog/Side'

export default {
  name: 'ArticleDetail',
  components: {
    Side
  },
  data: function () {
    return {
      top10: true,
      life: true,
      hot: true,
      player: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../../static/css/module/variable';

  .article {
    display: flex;
    &-body {
      flex: none;
      width: 645px;
      border: 1px solid #111;
      border-radius: 6px;
      background: rgba(255, 255, 255, .9);
    }
    &-side {
      flex-grow: 1;
      margin-left: 25px;
      width: 330px;
    }
    &-bread {
      border-bottom: 3px solid $cyan-color;
      margin: 10px;
      padding: 10px 0;
      font-size: 14px;
      &-item {
        background: $cyan-color;
        padding: 11px;
        color: #fff;
        &.active {
          background: rgba($cyan-color, 0.5);
        }
      }
    }
    &-header {
      padding: 10px 20px;
    }
    &-title {
      text-align: center;
    }
    &-meta {
      margin: 20px;
      text-align: center;
      border: 1px dashed darkgray;
      padding: 10px;
      font-size: 12px;
    }
    &-content {
      margin: 0 40px;
      font-size: 16px;
    }
    p {
      text-indent: 32px;
      line-height: 1.5;
      padding: 5px 0;
    }
    &-pic {
      background-size: 100% 100%;
      height: 240px;
    }
  }
</style>

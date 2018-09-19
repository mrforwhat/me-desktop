import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/views/Resume'
import Blog from '@/views/Blog'
import Home from '@/components/blog/Home'
import Article from '@/components/blog/Article'
import ArticleDetail from '@/components/blog/ArticleDetail'
import Category from '@/components/blog/Category'
import Tag from '@/components/blog/Tag'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {index: 0}
        },
        {
          path: 'article',
          name: 'article',
          component: Article,
          meta: {index: 1}
        },
        {
          path: 'article/:id',
          name: 'articleDetail',
          component: ArticleDetail,
          meta: {index: 1}
        },
        {
          path: 'category',
          name: 'category',
          component: Category,
          meta: {index: 2}
        },
        {
          path: 'tag',
          name: 'tag',
          component: Tag,
          meta: {index: 3}
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/views/Resume'
import Blog from '@/views/Blog'
import Home from '@/components/blog/Home'
import Article from '@/components/blog/Article'
import Category from '@/components/blog/Category'
import Tag from '@/components/blog/Tag'
Vue.use(Router)

export default new Router({
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
          component: Home
        },
        {
          path: 'article',
          name: 'article',
          component: Article
        },
        {
          path: 'category',
          name: 'category',
          component: Category
        },
        {
          path: 'tag',
          name: 'tag',
          component: Tag
        }
      ]
    }
  ]
})

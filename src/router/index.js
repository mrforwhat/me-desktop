import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/views/Resume'
import Blog from '@/views/Blog'
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
      component: Blog
    }
  ]
})

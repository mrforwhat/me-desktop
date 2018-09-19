const api = require('../controller/article')
const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})

module.exports = (app) => {
  router.get('/article', api.articleList)
  router.get('/article/:id', api.articleList)
  app.use(router.routes())
    .use(router.allowedMethods())
}

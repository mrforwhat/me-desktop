const api = require('../controller/article')
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const router = new Router({
  prefix: '/api'
})

module.exports = (app) => {
  router.get('/article', api.articleList)
  router.get('/article/:id', api.articleList)
  router.put('/say', async (ctx, next) => {
    console.log(ctx.request.body.say + '-----' + typeof ctx.request.body.say)
    let json = {
      'saySomething': ctx.request.body.say
    }
    const p = path.resolve('src/assets', 'say.json')
    ctx.body = {
      json,
      p
    }
    try {
      fs.writeFile(p, JSON.stringify(json), (err) => {
        if (err) {
          console.log(new Error(err))
        }
        console.log('文件已保存！')
        ctx.body = {
          success: true,
          json
        }
      })
    } catch (e) {
      if (e) {
        ctx.body = {
          error: 'fail'
        }
        throw new Error(e)
      }
    }
  })
  app.use(router.routes())
    .use(router.allowedMethods())
}

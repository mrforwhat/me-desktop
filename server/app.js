const Koa = require('koa')
const Router = require('koa-router')
const json = require('koa-json')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const api = require('./routes/api')
const app = new Koa()
const router = new Router()

app.use(json())
app.use(logger())
app.use(bodyParser())

router.get('/404', async (ctx, next) => {
  ctx.body = '<h1>404</h1>'
})
api(app)
app.use(router.routes())
app.listen(3010, () => {
  console.log('server is running at http://localhost:3010')
})

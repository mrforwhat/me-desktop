const article = require('../model/article')

const articleList = async (ctx) => {
  const result = article.getList
  ctx.body = {
    success: true,
    result
  }
}

const articleDetail = async (ctx) => {
  const result = article.getDetail
  ctx.body = {
    success: true,
    result
  }
}

module.exports = {
  articleList,
  articleDetail
}

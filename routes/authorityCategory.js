const router = require('koa-router')()
const bll = require('./../pub/bll/authorityCategory')

router.prefix('/api/auth/cate')


router.post('/add', async (ctx, next) => {
  let result = await bll.add(ctx)
  ctx.body = result;
})


module.exports = router
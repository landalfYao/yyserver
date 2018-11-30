const router = require('koa-router')()
const userBll = require('./../pub/bll/user.js')

router.prefix('/api/user')


router.post('/get', async (ctx, next) => {
  let result = await userBll.getList(ctx)
  ctx.body = result;
})
router.post('/register', async (ctx, next) => {
  let result = await userBll.register(ctx)
  ctx.body = result;
})
router.post('/login', async (ctx, next) => {
  let result = await userBll.login(ctx)
  ctx.body = result;
})

module.exports = router
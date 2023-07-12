const router = require('koa-router')()

router.prefix('/vue2')

router.get('/car/list', function (ctx, next) {
  // ctx.request.query
  ctx.body = [
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '666沃尔沃'
    },
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:9004/static/img/rank-car.087ddd17.png',
      name: '沃尔沃'
    },
  ]
})

module.exports = router

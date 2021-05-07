const requset = require('request')

const option = {
  url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10'
}

function callback(err, res, body) {
  if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)
  if (err) return console.log('操作失敗', err)
  const objs = JSON.parse(body)
  for (const item of objs) {
    console.log(`${item.id}`.padEnd(4), item.name)
  }
}

requset(option, callback)

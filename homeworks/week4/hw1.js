const requset = require('request')

const option = {
  url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10'
}

function callback(err, res, body) {
  const objs = JSON.parse(body)
  for (const item of objs) {
    console.log(item.name)
  }
}

requset(option, callback)

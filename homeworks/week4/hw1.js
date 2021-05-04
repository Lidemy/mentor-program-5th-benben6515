const requset = require('request')

const option = {
  url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10'
}

function callback(err, res, body) {
  const obj = JSON.parse(body)
  for (const i in obj) {
    console.log(obj[i].name)
  }
}

requset(option, callback)

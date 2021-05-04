const requset = require('request')

const option = {
  url: 'https://lidemy-book-store.herokuapp.com/books'
}

function callback(err, res, body) {
  const obj = JSON.parse(body)
  for (let i = 0; i < 10; i++) {
    console.log(obj[i].name)
  }
}

requset(option, callback)

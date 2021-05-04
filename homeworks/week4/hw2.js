const requset = require('request')
const process = require('process')

const act = process.argv[2]
const str1 = process.argv[3]
const str2 = process.argv[4]

if (act === 'list') {
  const option = {
    url: 'https://lidemy-book-store.herokuapp.com/books'
  }

  requset(option, (err, res, body) => {
    const obj = JSON.parse(body)

    for (let i = 0; i < obj.length; i++) {
      console.log(obj[i])
    }
  })
}

if (act === 'read') {
  const option = {
    url: 'https://lidemy-book-store.herokuapp.com/books'
  }

  requset(option, (err, res, body) => {
    const obj = JSON.parse(body)

    for (const item of obj) {
      item.id === Number(str1) && console.log(item.name)
    }
  })
}

if (act === 'create') {
  const option = {
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: {
      name: str1
    }
  }

  requset.post(option, (err, res, body) => {
    const obj = JSON.parse(body)

    console.log(obj)
  })
}

if (act === 'delete') {
  console.log(str1)
  const option = {
    url: `https://lidemy-book-store.herokuapp.com/books/${str1}`
  }

  requset.delete(option, (err, res, body) => {
    const obj = JSON.parse(body)

    console.log(obj)
  })
}

if (act === 'update') {
  console.log(str1)
  const option = {
    url: `https://lidemy-book-store.herokuapp.com/books/${str1}`,
    form: {
      name: str2
    }
  }

  requset.patch(option, (err, res, body) => {
    const obj = JSON.parse(body)

    console.log(obj)
  })
}

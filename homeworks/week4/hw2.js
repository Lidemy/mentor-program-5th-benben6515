const requset = require('request')
const process = require('process')

const API = 'https://lidemy-book-store.herokuapp.com/books'

const [, , act, str1, str2] = process.argv

switch (act) {
  case 'list':
    handleList()
    break
  case 'read':
    handleRead()
    break
  case 'create':
    handleCreate()
    break
  case 'delete':
    handleDlete()
    break
  case 'update':
    handleUpdate()
    break
  default:
    console.log('command error')
}

function handleList() {
  const option = {
    url: `${API}?_limit=20`
  }

  requset(option, (err, res, body) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)
    if (err) return console.log('操作失敗', err)
    const objs = JSON.parse(body)

    for (const i of objs) {
      console.log(`${i.id}`.padEnd(4), i.name)
    }
  })
}

function handleRead() {
  const option = {
    url: API
  }

  requset(option, (err, res, body) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)
    if (err) return console.log('操作失敗', err)
    const objs = JSON.parse(body)

    for (const item of objs) {
      if (item.id === Number(str1)) return console.log(item.name)
    }
    return console.log('no this id of books!')
  })
}

function handleCreate() {
  if (str1 === undefined) return console.log('input can not be empty!')
  const option = {
    url: API,
    form: {
      name: str1
    }
  }

  requset.post(option, (err, res, body) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)
    if (err) return console.log('操作失敗', err)
    const objs = JSON.parse(body)

    console.log(objs)
  })
}

function handleDlete() {
  const option = {
    url: `${API}/${str1}`
  }

  requset.delete(option, (err, res, body) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)
    if (err) return console.log('操作失敗', err)
    const objs = JSON.parse(body)

    console.log(objs, '刪除成功')
  })
}

function handleUpdate() {
  if (str1 === undefined || str2 === undefined) return console.log('id or name can not be empty!')
  const option = {
    url: `${API}/${str1}`,
    form: {
      name: str2
    }
  }

  requset.patch(option, (err, res, body) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)
    if (err) return console.log('操作失敗', err)
    const objs = JSON.parse(body)

    console.log(objs)
  })
}

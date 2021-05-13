/*
Problem :
https://github.com/Lidemy/mentor-program-5th/tree/master/homeworks/week4#%E8%B6%85%E7%B4%9A%E6%8C%91%E6%88%B0%E9%A1%8C

Doc. :
https://nodejs.org/api/https.html#https_https_request_url_options_callback

Ref. :
https://nodejs.dev/learn/making-http-requests-with-nodejs
*/

const https = require('https')
const process = require('process')

const [, , act, str1, str2] = process.argv

switch (act) {
  case 'list':
    handleList()
    break
  case 'read':
    handleRead()
    break
  case 'delete':
    handleDelete()
    break
  case 'create':
    handleCreate()
    break
  case 'update':
    handleUpdate()
    break
  default:
    console.log(`Command ${act} does not exist!`)
}

function handleList() {
  const options = {
    hostname: 'lidemy-book-store.herokuapp.com',
    port: 443,
    path: '/books',
    method: 'GET'
  }

  const req = https.request(options, (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)

    res.on('data', (d) => {
      let objs = {}
      try {
        objs = JSON.parse(d)
      } catch (e) {
        console.log(e)
      }

      for (const i in objs) {
        console.log(`${objs[i].id}`.padEnd(4), objs[i].name)
      }
    })
  })

  req.on('error', (e) => {
    console.error('操作失敗', e)
  })
  req.end()
}

function handleRead() {
  const options = {
    hostname: 'lidemy-book-store.herokuapp.com',
    port: 443,
    path: '/books',
    method: 'GET'
  }

  const req = https.request(options, (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)

    res.on('data', (d) => {
      let objs = {}
      try {
        objs = JSON.parse(d)
      } catch (e) {
        console.log(e)
      }

      for (const item of objs) {
        item.id === Number(str1) && console.log(item.name)
      }
    })
  })

  req.on('error', (e) => {
    console.error('操作失敗', e)
  })
  req.end()
}

function handleCreate() {
  // 將書名轉成 JSON 格式
  const data = JSON.stringify({ name: str1 })
  const options = {
    hostname: 'lidemy-book-store.herokuapp.com',
    port: 443,
    path: '/books',
    method: 'POST',
    // 必須附帶的 header parameters
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  }

  const req = https.request(options, (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)

    res.on('data', (d) => {
      let objs = {}
      try {
        objs = JSON.parse(d)
      } catch (e) {
        console.log(e)
      }

      console.log(`新增成功， id: ${objs.id}, name: ${objs.name}`)
    })
  })

  req.on('error', (e) => {
    console.error('操作失敗', e)
  })

  // 將 data 寫入
  req.write(data)
  req.end()
}

function handleDelete() {
  const options = {
    hostname: 'lidemy-book-store.herokuapp.com',
    port: 443,
    path: `/books/${str1}`,
    method: 'DELETE'
  }

  const req = https.request(options, (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)

    res.on('data', () => {
      console.log(`刪除成功， id: ${str1}`)
    })
  })

  req.on('error', (e) => {
    console.error('操作失敗', e)
  })

  req.end()
}

function handleUpdate() {
  // 將新書名轉成 JSON 格式
  const data = JSON.stringify({ name: str2 })
  const options = {
    hostname: 'lidemy-book-store.herokuapp.com',
    port: 443,
    path: `/books/${str1}`,
    method: 'PATCH',
    // 必須附帶的 header parameters
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  }

  const req = https.request(options, (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log('stausCode', res.statusCode)

    res.on('data', (d) => {
      let objs = {}
      try {
        objs = JSON.parse(d)
      } catch (e) {
        console.log(e)
      }

      console.log(`修改成功， id: ${objs.id}, name: ${objs.name}`)
    })
  })

  req.on('error', (e) => {
    console.error('操作失敗', e)
  })

  // 將 data 寫入
  req.write(data)
  req.end()
}

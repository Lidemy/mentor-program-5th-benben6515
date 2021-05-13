/*
Problem :
https://github.com/Lidemy/mentor-program-5th/tree/master/homeworks/week4#%E8%B6%85%E7%B4%9A%E6%8C%91%E6%88%B0%E9%A1%8C

Doc. :
https://dev.twitch.tv/docs/v5
https://github.com/request/request#custom-http-headers

Ref. :
https://github.com/Lidemy/mentor-program-5th-rockyooooooo/pull/14/files ( 感謝 @allenliao 同學支援 )
*/

const request = require('request')

const process = require('process')

const game = process.argv[2]

const LIMIT = 100
const TOTAL = 200

// 用來放所有實況主的 array
let allList = []

function allRequest(limit, offset, total) {
  // 將 URL 附帶 headers & query parameters
  const options = {
    url: 'https://api.twitch.tv/kraken/streams',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'cy5f8bwxxn4n5vgcjdlkamp5d9rdbz'
    },
    qs: {
      game,
      offset,
      limit
    }
  }

  // 呼叫 request套件，發送 REQUEST
  request(options, (err, res, body) => {
    // 錯誤處理
    if (res.statusCode < 200 || res.statusCode >= 300) return console.log(res.statusCode)
    if (err) return console.log(`error : ${err}`)
    let objs = {}
    try {
      objs = JSON.parse(body)
    } catch (err) {
      console.log(`error: ${err}`)
    }

    // 取出需要的資料，放入 allList
    const { streams } = objs
    for (const i in streams) {
      const { channel } = streams[i]
      const id = channel._id
      const name = channel.display_name

      allList.push([id, name])
    }

    // 如果 allList 沒有 200 個，就繼續遞迴搜尋
    if (allList.length < 200) {
      offset += limit
      return allRequest(limit, offset, total)
    }

    // 如果 allList 有 200 個就印出來
    allList = allList.slice(0, 200)
    console.table(allList)
  })
}

// 呼叫所有的 request
allRequest(LIMIT, 0, TOTAL)

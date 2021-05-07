const request = require('request')

const process = require('process')

const str = process.argv[2]

const options = {
  url: `https://restcountries.eu/rest/v2/name/${str}`
}

function callback(err, res, body) {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    const objs = JSON.parse(body)

    for (let i = 0; i < objs.length; i++) {
      const { name, capital } = objs[i]
      const currencies = objs[i].currencies[0].code
      const callingCodes = objs[i].callingCodes[0]

      const output = `國家：${name} \n首都：${capital} \n貨幣：${currencies} \n國碼：${callingCodes}`

      console.log(output)
      if (i === objs.length - 1) return
      console.log('================')
    }
  } else {
    console.log('「找不到國家資訊」。')
  }
}

request(options, callback)

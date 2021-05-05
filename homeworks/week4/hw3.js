const request = require('request')

const process = require('process')

const str = process.argv[2]

const options = {
  url: `https://restcountries.eu/rest/v2/name/${str}`
}

function callback(err, res, body) {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    const obj = JSON.parse(body)

    const { name, capital } = obj[0]
    const currencies = obj[0].currencies[0].code
    const callingCodes = obj[0].callingCodes[0]

    const output = `
      國家：${name}
      首都：${capital}
      貨幣：${currencies}
      國碼：${callingCodes}
    `

    console.log(output)
  } else {
    console.log('「找不到國家資訊」。')
  }
}

request(options, callback)

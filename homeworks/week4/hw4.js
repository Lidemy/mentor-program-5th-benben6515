const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'cy5f8bwxxn4n5vgcjdlkamp5d9rdbz'
  }
}

function callback(err, res, body) {
  const obj = JSON.parse(body)
  const { top } = obj

  for (const i in top) {
    const viewers = top[i].viewers.toString().padEnd(8)
    const game = top[i].game.name

    console.log(viewers, game)
  }
}

request(options, callback)

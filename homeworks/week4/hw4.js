const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'cy5f8bwxxn4n5vgcjdlkamp5d9rdbz'
  }
}

function callback(err, res, body) {
  const objs = JSON.parse(body)
  const { top } = objs

  for (const item of top) {
    const viewers = item.viewers.toString().padEnd(8)
    const game = item.game.name

    console.log(viewers, game)
  }
}

request(options, callback)

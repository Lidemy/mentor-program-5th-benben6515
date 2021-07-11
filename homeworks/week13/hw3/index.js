const btns = document.querySelector('.btns')
const more = document.querySelector('.more')
let dataArray = []
let offset = 0
let game = ''


// build function ---------------------
async function getStreams(game, offset) {
  if (offset === 0) dataArray = []
  const url = 'https://api.twitch.tv/kraken/streams/'
  let params = '?client_id=cy5f8bwxxn4n5vgcjdlkamp5d9rdbz'
  params += `&limit=20&offset=${offset}&game=${game}`

  await fetch(url + params, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json'
    }
  })
  .then(res => {
    let data
    try {
      data = res.json()
    } catch(err) {
      console.log(err)
    }
    return data
  })
  .then(json => {
    let { streams } = json
    for (let i = 0; i < streams.length; i++) {
      let obj = {}
      let { channel , preview, viewers} = streams[i]
      obj.imageURL = preview.medium
      obj.logoURL = channel.logo
      obj.name = channel.display_name
      obj.title = channel.description
      obj.viewers = viewers
  
      dataArray.push(obj)
    }
    render(dataArray, offset)
  })
  .catch( err => console.log('err', err))
}

async function getTop() {
  const url = 'https://api.twitch.tv/kraken/games/top/'
  let params = '?client_id=cy5f8bwxxn4n5vgcjdlkamp5d9rdbz'
  params += `&limit=5`

  await fetch(url + params, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json'
    }
  })
  .then(res => {
    let data
    try {
      data = res.json()
    } catch(err) {
      console.log(err)
    }
    return data
  })
  .then(json => {
    let { top } = json
    for (let i = 0; i < top.length; i++) {
      let topGame = top[i].game.name
      let div = document.createElement('div')
      if (i === 0) {
        game = topGame
        // init
        document.querySelector('.section__title').innerText = game
        getStreams(game, offset)
  
        div.innerHTML = `
        <input type="radio" name="game" id="game${i}" checked>
        <label for="game${i}">
          <div class="btn">${topGame}</div>
        </label>`
      } else {
        div.innerHTML = `
          <input type="radio" name="game" id="game${i}">
          <label for="game${i}">
            <div class="btn">${topGame}</div>
          </label>`
      }
      btns.appendChild(div)
    }
  })
}

function render(arr, offset) {
  let sectionWrapper = document.querySelector('.section__wrapper')
  if (offset === 0 ) sectionWrapper.innerHTML = ''

  for (let i = offset; i < arr.length; i++) {
    let div = document.createElement('div')
    div.classList.add('section__item')
    div.innerHTML = `
    <div class="section__item__top">
      <img class="section__item__image" src="${arr[i].imageURL}" alt="screen image">
    </div>
    <div class="section__item__bottom">
      <div class="section__item__avatar">
        <img class="avatar" src="${arr[i].logoURL}" alt="avatar image">
      </div>
      <div class="section__item__bottom__right">
        <div class="section__item__title">${arr[i].title}</div>
        <div class="section__item__name">${arr[i].name}</div>
        <div class="section__item__viewers">viewers : ${arr[i].viewers}</div>
      </div>
    </div>`
    sectionWrapper.appendChild(div)
  }
  if (arr.length - offset < 20) {
    document.querySelector('.more').classList.add('hide')
  } else {
    document.querySelector('.more').classList.remove('hide')
  }
}


// events ---------------------
more.addEventListener('click', e => {
  console.log('click!')
  offset += 20
  getStreams(game, offset)
})

btns.addEventListener('click', e => {
  let _this = e.target
  if (_this.classList.contains('btn')) {
    game = _this.innerText
    offset = 0
    document.querySelector('.section__title').innerText = game
    document.querySelector('.section__wrapper').innerHTML = 'almost there ...'

    getStreams(game, offset)
  }
})


// init ---------------------
getTop()
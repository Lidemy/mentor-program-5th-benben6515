const db = require('../models/index.js')

const { Prize } = db

const controllerPrize = {
  index: (req, res) => {
    Prize.findAll().then((prizes) => {
      res.render('index', { prizes })
    })
  },

  backstage: (req, res) => {
    const { username } = req.session
    if (username) {
      Prize.findAll().then((prizes) => {
        res.render('backstage', { prizes })
      })
    } else {
      res.render('/')
    }
  },

  prizeFindAll: (cb) => {
    Prize.findAll().then((prizes) => {
      const arr = []
      let sum = 0
      for (let i = 0; i < prizes; i++) {
        const { weight } = prizes
        arr.push(sum += weight)
      }
    })
  },

  prizeGet: (req, res) => {
    Prize.findAll().then((prizes) => {
      const arr = [0]
      let sum = 0
      for (let i = 0; i < prizes.length; i++) {
        const { weight } = prizes[i]
        arr.push(sum += Number(weight))
      }
      const randomNum = Math.floor(Math.random() * arr[arr.length - 1])
      for (let i = 1; i < arr.length; i++) {
        if (randomNum >= arr[i - 1] && randomNum <= arr[i]) {
          return res.render('prizeGet', { prize: prizes[i - 1] })
        }
      }
    })
  },

  prizeRandom: (req, res) => {
    Prize.findAll().then((prizes) => {
      const arr = [0]
      let sum = 0
      for (let i = 0; i < prizes.length; i++) {
        const { weight } = prizes[i]
        arr.push(sum += Number(weight))
      }
      const randomNum = Math.floor(Math.random() * arr[arr.length - 1])
      for (let i = 1; i < arr.length; i++) {
        if (randomNum >= arr[i - 1] && randomNum <= arr[i]) {
          return res.send(prizes[i - 1])
        }
      }
    })
  },

  prizeAdd: (req, res) => {
    res.render('prizeAdd')
  },

  prizeAddHandle: (req, res) => {
    const { username } = req.session
    const { title } = req.body
    const { url } = req.body
    const { weight } = req.body
    const { content } = req.body
    if (!username ||
      !title ||
      !url ||
      !weight ||
      !content) {
      return res.redirect('/prizeAdd')
    }
    Prize.create({
      title,
      content,
      url,
      weight
    }).then(() => {
      res.redirect('/backstage')
    }).catch((err) => {
      console.log(err)
      res.redirect('/backstage')
    })
  },

  prizeUpdate: (req, res) => {
    Prize.findOne({
      where: {
        id: req.params.id
      }
    }).then((prize) => {
      res.render('prizeUpdate', { prize })
    })
  },

  prizeUpdateHandle: (req, res) => {
    const { title, content, url, weight } = req.body
    if (!title || !content || !url || !weight) {
      return res.redirect('backstage')
    }
    Prize.findOne({
      where: {
        id: req.params.id
      }
    }).then((prize) => {
      prize.update({
        title,
        content,
        url,
        weight
      })
    }).then(() => {
      res.redirect('/backstage')
    }).catch(() => {
      res.redirect('../backstage')
    })
  },

  prizeDelete: (req, res) => {
    Prize.findOne({
      where: {
        id: req.params.id
      }
    }).then((prize) => {
      prize.destroy()
    }).then(() => {
      res.redirect('../backstage')
    }).catch((err) => {
      console.log(err)
      res.redirect('../backstage')
    })
  }

}

module.exports = controllerPrize

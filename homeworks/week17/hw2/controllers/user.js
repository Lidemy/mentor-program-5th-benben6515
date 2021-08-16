const moduleUser = require('../models/user.js')

const controllerUser = {
  login: (req, res) => {
    res.render('login')
  },

  loginHandle: (req, res, next) => {
    moduleUser.get((err, user) => {
      const { username, password } = req.body
      if (!username || !password) {
        req.flash('error', '請填入必要資訊')
        return next()
      }
      if (username === user.username && password === user.password) {
        req.session.username = username
        res.redirect('/')
      } else {
        req.flash('error', '帳號或密碼錯誤')
        res.redirect('/login')
      }
    })
  },

  logout: (req, res, next) => {
    req.session.destroy()
    res.redirect('/')
  }
}

module.exports = controllerUser

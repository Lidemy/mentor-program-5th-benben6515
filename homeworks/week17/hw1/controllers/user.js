const modelUser = require('../models/user.js')
// const bcrypt = require('bcrypt')
// const saltRounds = 10

const controllerUser = {

  login: (req, res) => {
    res.render('user/login')
  },

  loginHandle: (req, res, next) => {
    modelUser.get((err, user) => {
      const { username, password } = req.body
      if (!username || !password) {
        req.flash('errorMessage', '請填入必要資訊')
        return next()
      }
      if (username === user.username && password === user.password) {
        req.session.username = username
        res.redirect('/')
      } else {
        req.flash('errorMessage', '帳號或密碼錯誤')
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

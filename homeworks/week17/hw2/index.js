const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

const app = express()
const port = 5003

const controllerPrize = require('./controllers/prize.js')
const controllerUser = require('./controllers/user.js')

// setting
app.set('view engine', 'ejs')
function redirectBack(req, res) {
  res.redirect('back')
}

// middle wave
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(flash())
app.use((req, res, next) => {
  res.locals.username = req.session.username
  res.locals.error = req.flash('error')
  return next()
})

// user route -------------------
app.get('/login', controllerUser.login)
app.post('/login', controllerUser.loginHandle, redirectBack)
app.get('/logout', controllerUser.logout)

// backstage route --------------------
app.get('/backstage', controllerPrize.backstage)

// Random API
app.get('/prizeRandom', controllerPrize.prizeRandom)

// CRUD route ------------
app.get('/', controllerPrize.index)
app.get('/prizeGet', controllerPrize.prizeGet)

app.get('/prizeAdd', controllerPrize.prizeAdd)
app.post('/prizeAdd', controllerPrize.prizeAddHandle)

app.get('/prizeUpdate/:id', controllerPrize.prizeUpdate)
app.post('/prizeUpdate/:id', controllerPrize.prizeUpdateHandle)

app.get('/prizeDelete/:id', controllerPrize.prizeDelete)

app.listen(port, () => {
  console.log(`app listening on ${port}`)
})

const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

const app = express()
const port = process.env.PORT || 5001

const controllerUser = require('./controllers/user.js')
const controllerPost = require('./controllers/post.js')

function redirectBack(req, res) {
  res.redirect('back')
}

// setting
app.set('view engine', 'ejs')

// middle wave
app.use(express.static('public'))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash())
app.use((req, res, next) => {
  res.locals.username = req.session.username
  res.locals.errorMessage = req.flash('errorMessage')
  return next()
})

// router -----------------------------
app.get('/login', controllerUser.login)
app.post('/login', controllerUser.loginHandle, redirectBack)
app.get('/logout', controllerUser.logout)

// post read
app.get('/', controllerPost.index)
app.get('/post/:id', controllerPost.postGet)

// router CRUD
app.get('/list', controllerPost.list)
app.get('/postAdd', controllerPost.postAdd)
app.post('/postAdd', controllerPost.postAddHandle)
app.get('/postUpdate/:id', controllerPost.postUpdate)
app.post('/postUpdate/:id', controllerPost.postUpdateHandle)
app.get('/postDelete/:id', controllerPost.postDelete)

// 404 not found
app.get('*', (req, res) => {
  res.render('error')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

const user = {
  username: 'admin',
  password: 'admin'
}

const moduleUser = {
  get: (cb) => cb(null, user)
}

module.exports = moduleUser

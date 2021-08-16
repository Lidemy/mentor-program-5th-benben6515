const user = {
  username: 'admin',
  password: 'admin'
}

const modelUser = {
  get: (cb) => {
    cb(null, user)
  }
}

module.exports = modelUser

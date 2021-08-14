const db = require('../models')

const { Post } = db

const controllerPost = {
  index: (req, res) => {
    Post.findAll().then((posts) => {
      posts.forEach((e) => {
        const date = e.createdAt.toString().slice(0, 15)
        e.date = date
      })
      res.render('index', { data: posts })
    })
  },

  postGet: (req, res) => {
    const { id } = req.params
    Post.findOne({
      where: {
        id
      }
    }).then((post) => {
      const date = post.createdAt.toString().slice(0, 15)
      post.date = date
      res.render('post', { data: post })
    }).catch((err) => res.status(501).send('User- query promise was rejected. Handle according to specific case.'))
  },

  postAdd: (req, res) => {
    res.render('postAdd')
  },

  postAddHandle: (req, res) => {
    const { username } = req.session
    const { content } = req.body
    const { title } = req.body
    if (!username || !content) {
      return res.redirect('/')
    }
    Post.create({
      title,
      content
    }).then(() => {
      res.redirect('/')
    })
  },

  postDelete: (req, res) => {
    const { id } = req.params
    Post.findOne({
      where: {
        id
      }
    }).then((post) => {
      post.destroy()
    }).then(() => {
      res.redirect('/')
    }).catch(() => {
      res.redirect('/')
    })
  },

  postUpdate: (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      }
    }).then((post) => {
      res.render('postUpdate', { post })
    })
  },

  postUpdateHandle: (req, res) => {
    const { username } = req.session
    const { title, content } = req.body
    if (!username || !content || !title) {
      return res.redirect('/')
    }
    Post.findOne({
      where: {
        id: req.params.id
      }
    }).then((post) => post.update({
      title,
      content
    })).then(() => {
      res.redirect('/')
    }).catch((err) => res.status(501).send('User- query promise was rejected. Handle according to specific case.'))
  },

  list: (req, res) => {
    Post.findAll().then((posts) => {
      posts.forEach((e) => {
        const date = e.createdAt.toString().slice(0, 15)
        e.date = date
      })
      res.render('list', { data: posts })
    })
  }

}

module.exports = controllerPost

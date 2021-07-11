import { getComments, addComments } from './api'
import { renderComment, appendStyle } from './util'
import { cssTemplate , getForm, getMoreBtn} from './template'
import $ from 'jquery'


export function init(options) {
  let siteKey = options.siteKey
  let apiUrl = options.apiUrl
  let containerElement = null
  let lastId = null

  let loadMoreClassName = `${siteKey}-load-more`
  let commentsClassName = `${siteKey}-comments`
  let commentsSelector = `.${commentsClassName}`
  let formClassName = `${siteKey}-add-comment-form`
  let formSelector = `.${formClassName}`

  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentsClassName))

  appendStyle(cssTemplate)

  getNewComments()

  $(commentsSelector).on('click', '.' + loadMoreClassName, () => {
    getNewComments()
  })

  $(formSelector).submit(e => {
    e.preventDefault()
    const nicknameDOM = $(`${formSelector} input[name=nickname]`)
    const contentDOM = $(`${formSelector} textarea[name=content]`)

    if (
      !$(nicknameDOM).val() ||
      !$(contentDOM).val()
    ) return
    $('button[type=submit]').hide()

    const commentData = {
      site_key: siteKey,
      nickname: nicknameDOM.val(),
      content: contentDOM.val()
    }
    addComments(apiUrl, siteKey, commentData, data => {
      if (!data) {
        alert(data.message)
        return
      }
      nicknameDOM.val('')
      contentDOM.val('')
      const commentDOM = $(commentsSelector)

      renderComment(commentDOM, commentData, true)
      alert('訊息 : 留言成功！')
      $('button[type=submit]').show()
    })
  })

  function getNewComments() {
    const commentDOM = $(commentsSelector)
    $('.' + loadMoreClassName).remove()
    getComments(apiUrl, siteKey , lastId, data => {
      if (!data.ok) {
        alert(data.message)
        return
      }

      const comments = data.discussions
      for (let comment of comments) {
        renderComment(commentDOM, comment)
      }
      lastId = comments[comments.length - 1].id
      if (comments.length === 5) {
        let html = getMoreBtn(loadMoreClassName)
        $(commentsSelector).append(html);
      }
    })
  }
}


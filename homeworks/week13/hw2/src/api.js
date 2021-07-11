import $ from 'jquery'

export function getComments(apiUrl, site_key, before, cb) {
  let URL = `${apiUrl}/api_comments.php`
  URL += `?site_key=${site_key}`
  if (before) URL += `&before=${before}`
  $.ajax({
    url: URL,
  }).done( data => {
    cb(data)
  })
}

export function addComments(apiUrl,site_key, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_comments_add.php`,
    data
  }).done( data => {
    cb(data)
  })
}
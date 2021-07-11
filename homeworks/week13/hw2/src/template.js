export const cssTemplate = '.card { margin: 12px 0px}'
export function getForm(className, commentsClassName) {
  return `
    <div>
      <form class="${className}">
        <div class="form-group">
          <label>暱稱</label>
          <small class="form-text text-muted">也迎歡暱名留言唷 ~~~ </small>
          <input name="nickname" type="text" class="form-control" />
          <label>留言</label>
          <textarea name="content" class="form-control" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">送出</button>
      </form>
      <hr>
      <div class="${commentsClassName}">
      </div>
    </div>
  `
}

export function getMoreBtn(className) {
  return `<button type="submit" class="btn btn-primary btn-more ${className}">載入更多</button>`
}

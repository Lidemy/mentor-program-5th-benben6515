function escape(unsafe) {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

export function renderComment(dom, comment, isPrepend) {
	const html = `
		<div class="card">
			<h5 class="card-header">${escape(comment.nickname)}</h5>
			<div class="card-body">
				<p class="card-text">${escape(comment.content)}</p>
			</div>
		</div>
	`
	if (isPrepend) {
		dom.prepend(html)
		return 
	}
	dom.append(html)
}

export function appendStyle(cssTemplate) {
	const styleElement = document.createElement('style')
	styleElement.type = 'text/css'
	styleElement.appendChild(document.createTextNode(cssTemplate))
	document.head.appendChild(styleElement)
}
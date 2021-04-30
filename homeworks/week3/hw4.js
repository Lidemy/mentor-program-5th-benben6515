// eslint-disable-next-line
function solve(lines) {
  const arr = lines[0].split('')

  const reArr = []
  arr.forEach((e) => reArr.unshift(e))

  console.log((arr.join('') === reArr.join('')) ? 'True' : 'False')
}

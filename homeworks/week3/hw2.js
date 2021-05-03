// eslint-disable-next-line
function solve(lines) {
  const n = lines[0].split(' ').map(Number)[0]
  const m = lines[0].split(' ').map(Number)[1]

  function isNarcissistic(num) {
    const arr = num.toString().split('')
    const sum = arr.reduce((acc, cur) => acc + cur ** arr.length, 0)
    return sum === num
  }

  for (let i = n; i < m; i++) {
    if (isNarcissistic(i)) console.log(i)
  }
}

// eslint-disable-next-line
function solve(lines) {
  const n = Number(lines[0])

  for (let i = 1; i < n + 1; i++) {
    let s = ''
    for (let j = 0; j < n; j++) {
      s += '*'
    }
    console.log(s)
  }
}

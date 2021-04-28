// eslint-disable-next-line
function solve(lines) {
  const arr = []
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]))
  }

  for (let i = 0; i < arr.length; i++) {
    let isPrime = true
    arr[i] === 1 && (isPrime = false)
    for (let j = 2; j < arr[i] - 1; j++) {
      arr[i] % j === 0 && (isPrime = false)
    }
    console.log(isPrime ? 'Prime' : 'Composite')
  }
}

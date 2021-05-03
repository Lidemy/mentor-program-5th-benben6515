// eslint-disable-next-line
function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}

function isPrime(n) {
  if (n === 1) return false
  for (let j = 2; j < Math.ceil(Math.sqrt(n)); j++) {
    if (n % j === 0) return false
  }
  return true
}

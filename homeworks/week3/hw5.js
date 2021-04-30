// eslint-disable-next-line
function solve(lines) {
  for (let i = 0; i < lines[0]; i++) {
    const arr = lines[i + 1].split(' ')

    if (BigInt(arr[0]) === BigInt(arr[1])) {
      console.log('DRAW')
    } else if (arr[2] === '1') {
      console.log((BigInt(arr[0]) > BigInt(arr[1])) ? 'A' : 'B')
    } else {
      console.log((BigInt(arr[0]) < BigInt(arr[1])) ? 'A' : 'B')
    }
  }
}

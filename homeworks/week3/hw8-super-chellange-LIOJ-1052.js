// 過程可參考 : https://hackmd.io/VEjiIM_SQjO-OnQ2YibtmQ?view
// eslint-disable-next-line
function solve(lines) {
  // 取得最大數量、最大重量、物品數量
  let maxN = lines[0].split(' ').map(Number)[0]
  const maxW = lines[0].split(' ').map(Number)[1]
  const n = lines.length - 1
  if (n < maxN) { maxN = n }

  // 所有物品，過濾大於最大重量的物品
  const item = []
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].split(' ').map(Number)[0] <= maxW) {
      item.push(lines[i].split(' ').map(Number))
    }
  }

  // 所有子集合
  const subset = [[]]

  // 總和物件 { 'weight1' : value1, 'weight2' : value2, ... }
  const sumObj = {}

  // 產生可能子集合 & 加總物件
  for (let i = 0; i < item.length; i++) {
    const n = subset.length
    for (let j = 0; j < n; j++) {
      // 累加當前物品重量，如果超過數量就跳過
      const temp = subset[j].concat([i])
      if (temp.length > maxN) continue

      // 累加當前物品重量，如果超過重量就跳過
      const weight = temp.reduce((acc, cur) => acc + item[cur][0], 0)
      if (weight > maxW) continue

      // 累加當前物品價值，如果少於當前重量的價值就跳過
      const value = temp.reduce((acc, cur) => acc + item[cur][1], 0)
      if (value < sumObj[weight]) continue

      // 設定最大價值
      sumObj[weight] = value

      // 如果前面 3 個 if 篩選都過 => 加入子集，這就是我要的子集
      subset.push(temp)
    }
  }

  // debug 用
  // console.log(sumObj)    // 可以看到所有重量的最高價錢，很療癒(?)

  // 輸出 max value
  console.log(Math.max(...(Object.values(sumObj))))
}

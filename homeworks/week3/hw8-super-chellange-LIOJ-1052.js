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
  const sumArr = {}

  // 產生可能子集合 & 加總物件
  for (let i = 0; i < item.length; i++) {
    const n = subset.length
    for (let j = 0; j < n; j++) {
      // 迭代產生子集
      const temp = subset[j].concat([i])
      if (temp.length > maxN) continue
      subset.push(temp)

      // 累加當前物品重量
      const weight = temp.reduce((acc, cur) => acc + item[cur][0], 0)

      // 如果超過重量就刪除當前子集
      if (weight > maxW) {
        subset.pop()
        continue
      }

      // 累加當前物品價值
      const value = temp.reduce((acc, cur) => acc + item[cur][1], 0)

      // 檢查當前 sumArr 物件裡有沒有一樣的 key (weight)
      if (Object.prototype.hasOwnProperty.call(sumArr, weight)) {
        // 如果等重的物品，價值高於原本物件的就更新價值，如果沒有就刪除子集
        if (sumArr[weight] < value) {
          sumArr[weight] = value
        } else {
          subset.pop()
          continue
        }

      // 如果沒有一樣的 key (weight) 就加入
      } else {
        sumArr[weight] = value
      }
    }
  }

  // debug 用
  // console.log(sumArr)    // 可以看到所有重量的最高價錢

  // 輸出 max value
  console.log(Math.max(...(Object.values(sumArr))))
}

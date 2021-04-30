// eslint-disable-next-line
function solve(lines) {
  const maze = []
  const queue = []
  const path = []

  // 輸入迷宮 maze
  for (let i = 1; i < lines.length; i++) {
    maze.push(lines[i].split(''))
  }

  // 在迷宮上下都加入圍牆
  maze.unshift(Array(maze[0].length).fill('#'))
  maze.push(Array(maze[0].length).fill('#'))

  // 設置起點 [i, j]
  const i = 1
  const j = 0

  // 放入 Queue 檢查
  queue.push([i, j])
  while (queue.length) {
    const [i, j] = queue[0]

    // 終止條件 : 當 [i, j] 等於出口時，但因為迷宮最後面多了一排，所以 i 是的部分是 maze.length - 2
    if (i === maze.length - 2 && j === maze[0].length - 1) {
      break
    }

    // 如果未尋訪過，將 maze[i][j] 設為 i + j 步數，因為起點在 (1, 0) 所以要 - 1
    if (maze[i][j] === '.') {
      maze[i][j] = `${i + j - 1}`
    }

    // 將尋訪過的點從 Queue 取出，放入 path 路徑
    queue.shift()
    path.push([i, j])

    // 如果當前位置 [i, j] 有路可以走 ( 上、下、左、右 ) 並且不在 queue 裡面就加進 queue 並加入步數
    if (maze[i - 1][j] === '.' && !isInArr(queue, i - 1, j)) {
      queue.push([i - 1, j])
      maze[i - 1][j] = `${Number(maze[i][j]) + 1}`
    }
    if (maze[i + 1][j] === '.' && !isInArr(queue, i + 1, j)) {
      queue.push([i + 1, j])
      maze[i + 1][j] = `${Number(maze[i][j]) + 1}`
    }
    if (maze[i][j - 1] === '.' && !isInArr(queue, i, j - 1)) {
      queue.push([i, j - 1])
      maze[i][j - 1] = `${Number(maze[i][j]) + 1}`
    }
    if (maze[i][j + 1] === '.' && !isInArr(queue, i, j + 1)) {
      queue.push([i, j + 1])
      maze[i][j + 1] = `${Number(maze[i][j]) + 1}`
    }
    // degbug 用
    // console.log(maze)
    // console.log(queue)
    // console.log(path)
  }
  // 輸出迷宮終點的步數
  console.log(maze[maze.length - 2][maze[0].length - 1])
}

// 輔助 function 檢查 [i, j] 是否有在 arr 裡
function isInArr(arr, i, j) {
  for (let n = 0; n < arr.length; n++) {
    if (arr[n][0] === i && arr[n][1] === j) {
      return true
    }
  }
  return false
}

// eslint-disable-next-line
function solve(lines) {
  const maze = []
  const queue = []
  const path = []

  // 輸入迷宮 maze
  for (let i = 1; i < lines.length; i++) {
    maze.push(lines[i].split(''))
  }

  // 設置起點 [i, j]
  const i = 0
  const j = 0

  // 放入 Queue 檢查
  queue.push([i, j])
  while (queue.length) {
    const [i, j] = queue[0]

    // 終止條件 : 當 [i, j] 等於右下角出口時
    if (i === maze.length - 1 && j === maze[0].length - 1) {
      break
    }

    // 如果未尋訪過，將 maze[i][j] 設為 i + j 步數
    if (maze[i][j] === '.') {
      maze[i][j] = `${i + j}`
    }

    // 將尋訪過的點從 Queue 取出，放入 path 路徑
    queue.shift()
    path.push([i, j])

    searchWay(i - 1, j, maze, maze[i][j], queue)
    searchWay(i + 1, j, maze, maze[i][j], queue)
    searchWay(i, j - 1, maze, maze[i][j], queue)
    searchWay(i, j + 1, maze, maze[i][j], queue)

    // degbug 用
    // console.log(maze)// 打開可以看到整個路徑
    // console.log(queue)
    // console.log(path)
  }
  // 輸出迷宮終點的步數
  console.log(maze[maze.length - 1][maze[0].length - 1])
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

// 如果當前位置 [i, j] 有路可以走 ( 上、下、左、右 ) 並且不在 queue 裡面就加進 queue 並加入步數
function searchWay(x, y, maze, step, queue) {
  // 如果超出邊際值返回
  if (x < 0 || x > maze.length - 1) return
  if (y < 0 || y > maze[0].length - 1) return

  if (maze[x][y] === '.' && !isInArr(queue, x, y)) {
    queue.push([x, y])
    maze[x][y] = `${Number(step) + 1}`
  }
}

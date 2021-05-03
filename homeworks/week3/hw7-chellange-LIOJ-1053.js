// 過程可參考 : https://hackmd.io/VEjiIM_SQjO-OnQ2YibtmQ?view
// eslint-disable-next-line
function solve(lines) {
  const maze = []
  const queue = []

  // 輸入迷宮 maze
  for (let i = 1; i < lines.length; i++) {
    maze.push(lines[i].split(''))
  }

  // 將起點 [0 , 0] 放入 Queue
  queue.push([0, 0])
  while (queue.length) {
    const [i, j] = queue[0]

    // 終止條件 : 當 [i, j] 等於右下角出口時
    if (i === maze.length - 1 && j === maze[0].length - 1) break

    // 如果未尋訪過，將 maze[i][j] 設為 i + j 步數，表示已尋訪
    if (maze[i][j] === '.') {
      maze[i][j] = `${i + j}`
    }

    // 將尋訪過的點從 Queue 取出
    queue.shift()

    searchWay(i - 1, j, maze, maze[i][j], queue)
    searchWay(i + 1, j, maze, maze[i][j], queue)
    searchWay(i, j - 1, maze, maze[i][j], queue)
    searchWay(i, j + 1, maze, maze[i][j], queue)

    // degbug 用
    // console.log(maze)    // 打開可以看到整個路徑，很療癒XD
    // console.log(queue)
  }
  // 輸出迷宮終點的步數
  console.log(maze[maze.length - 1][maze[0].length - 1])
}

// 輔助 function searchWay
// 如果當前位置 [i, j] 有路可以走 ( 上、下、左、右 ) 就加進 queue 並加入步數
function searchWay(x, y, maze, step, queue) {
  // 如果超出邊際值返回
  if (x < 0 || x > maze.length - 1) return
  if (y < 0 || y > maze[0].length - 1) return

  if (maze[x][y] === '.') {
    queue.push([x, y])
    maze[x][y] = `${Number(step) + 1}`
  }
}

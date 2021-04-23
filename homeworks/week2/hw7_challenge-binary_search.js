// Binary search
function search(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  let i = Math.floor((start + end)/2);

  while(start <= end){
    // console.log(start, i, end);    // degbug 用
    if(arr[start] === n) return start;
    if(arr[end] === n) return end;
    if(arr[i] === n) return i;
    if(arr[i] < n){
      start = i + 1;
      end--;
    }else{
      end = i - 1;
      start++;
    }
    i = Math.floor((start + end)/2);
  }
  return -1
}

// test data
console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));
console.log(search([1, 3, 10, 14, 39], 0));
console.log(search([1, 3, 10, 14, 39], 1));
console.log(search([1, 3, 10, 14, 39], 39));
// 以下 test data 跑兩次以下迴圈就出來了，可以用上面的console.log()看看，優化完成。
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 1));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 6));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 7));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 8));
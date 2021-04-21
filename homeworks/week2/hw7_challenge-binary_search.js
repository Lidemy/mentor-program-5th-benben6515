// Binary search
function search(arr, n) {
  let start = 0;
  let end = arr.length;
  let i = Math.floor(start + end);

  while(start <= end){
    if(arr[start] === n) return start;
    if(arr[end] === n) return end;
    if(arr[i] === n) return i;
    if(arr[i] < n){
      start = i + 1;
    }else{
      end = i - 1;
    }
    i = Math.floor(start + end);
  }
  return -1
}

// test data
console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));
console.log(search([1, 3, 10, 14, 39], 0));
console.log(search([1, 3, 10, 14, 39], 1));
console.log(search([1, 3, 10, 14, 39], 39));
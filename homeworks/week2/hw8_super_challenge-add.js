// 此為正式版，可以用大數輸入，範例的只要超過 2147483648 就會 overflow
// 另有無符號版 : hw8_super_challenge-add_symbol_free.js

// 檔案裏面沒有任何 "+-*/", ">>", "<<", "^"，除了這行註解。
function add(a, b){

    // 取得 a, b 兩數，轉成二進位 => 轉成矩陣 => 最後反轉，方便進位計算 => 對應成數字
    let Aarr = a.toString(2).split("").reverse().map(Number);
    let Barr = b.toString(2).split("").reverse().map(Number);
    // 計算二進位用的矩陣 acc
    let acc = [0];

    // 確保 a 是較大的位數
    if(Aarr.length <  Barr.length) return add(b, a)
    for(let i = Barr.length; i < Aarr.length; i = add1(i)){
        Barr[i] = 0;
    }

    // 開始計算
    for(let i = 0; i < Aarr.length; i = add1(i)){
        // idx 為 i 的加 1
        let idx = add1(i);
        acc[idx] = 0;
        // 如果 acc 有進位的狀況
        if (acc[i] === 1){
            if ((Aarr[i] & Barr[i]) === 1){
                acc[idx] = 1;
                acc[i] = 1;
            }else if ((Aarr[i] | Barr[i]) === 0){
                acc[i] = 1;
            }else {
                acc[idx] = 1;
                acc[i] = 0;
            }
        // 如果 acc 沒有進位狀況
        } else { 
            if ((Aarr[i] & Barr[i]) === 1){
                acc[idx] = 1;
                acc[i] = 0;
            }else if ((Aarr[i] | Barr[i]) === 0){
                acc[i] = 0;
            }else {
                acc[i] = 1;
            }
        }
        // debug 用
        // console.log(i, idx);
        // console.log((Aarr[i] & Barr[i]));
        // console.log(acc);
    }

    // 將 acc 轉回 10 進位並回傳
    return parseInt((acc.reverse().join("")),2)
}

// 加一 function ，Ex : 111 => 1000,    110101 => 110110
// 邏輯:        加 1 後面補 0  ^  ，     加 1 後面補 0 ^
function add1(num){
    let arr = num.toString(2).split("").reverse().map(Number);
    if (arr.every(e => e === 1)) {
        arr = arr.map(e => e = 0);
        arr.push(1);
    }else{
        let n = arr.indexOf(0);
        let arr2 = arr.slice(0,n);
        if (arr2.every(e => e === 1)) {
            arr2 = arr2.map(e => e = 0)
        }
        arr[n] = 1;
        arr = arr2.concat(arr.slice(n));
    }
    return parseInt((arr.reverse().join("")),2)
}

// test data
console.log(add(1, 1));
console.log(add(2, 6));
console.log(add(0, 0));
console.log(add(100, 100));
console.log(add(200, 100));
console.log(add(100, 200));
console.log(add(100000000000000000, 100000000000000000));
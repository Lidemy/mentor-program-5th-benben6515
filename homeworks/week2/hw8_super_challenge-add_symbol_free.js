// 此為無符號版本，效能有限，建議 input 在 10000 以下
// 另有正式版 : hw8_super_challenge-add_symbol_free.js

// 檔案裏面沒有任何 "+-*/", ">>", "<<", "^", "&", "|"，除了這行註解。
function add(a, b){
	if(a <  b) return add(b, a)
	for(let i = 0; i < b; i = add1(i)) {
		a = add1(a);
	}
	return a
}

// 加一 function ，111 => 1000,    110101 => 110110
// 邏輯:   加 1 後面補 0  ^  ，     加 1 後面補 0 ^
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

// test datadata
console.log(add(1, 1));
console.log(add(2, 6));
console.log(add(0, 0));
console.log(add(200, 100));
console.log(add(100, 200));
console.log(add(10000, 10000));
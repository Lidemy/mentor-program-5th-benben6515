function join(arr, concatStr) {
    let returnStr = arr[0];
    for(let i = 1; i < arr.length; i++){
        returnStr += concatStr;
        returnStr += arr[i];
    }
    return returnStr
}

function repeat(str, times) {
    let returnStr = '';
    for(let i = 0; i < times; i++){
        returnStr += str;
    }
    return returnStr
}

// test data
console.log(join(["a", "b", "c"], '!'));
console.log(repeat('a', 5));

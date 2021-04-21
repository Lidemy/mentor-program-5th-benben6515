function capitalize(str) {
    arr = str.split('');
    if(arr[0] >= 'a' && arr[0] <= 'z'){
        arr.splice(0,1,String.fromCharCode(arr[0].charCodeAt(0) - 32));
    }
    return arr.join('')
}

// test data
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));

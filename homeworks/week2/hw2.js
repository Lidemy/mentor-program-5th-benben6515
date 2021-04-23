function capitalize(str) {
    if(str[0] >= 'a' && str[0] <= 'z'){
        str[0] = str[0].toUpperCase();
    }
    return str
}

// test data
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));

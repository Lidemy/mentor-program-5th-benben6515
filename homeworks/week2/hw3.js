function reverse(str) {
    arr = str.split('');
    let reverseArr = [];
    for(let i = arr.length; i > 0; i--){
        reverseArr.push(arr[i-1]);
    }
    console.log(reverseArr.join(''));
}

// test data
reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');
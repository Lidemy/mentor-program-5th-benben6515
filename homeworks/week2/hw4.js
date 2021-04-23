function printFactor(n) {
    for(let i = 1; i <= n; i++){
        // 如果 n % i === 0 就印出
        (n % i) || console.log(i);
    }
}

// test data
printFactor(10);

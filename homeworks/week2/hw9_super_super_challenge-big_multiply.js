
function multiply(a, b) {
    // 取得 a, b => 轉成陣列 => 反轉，方便計算用
    let Aarr = a.split("").reverse();
    let Barr = b.split("").reverse();
    // Carr 為最後 return 的陣列
    let Carr = [];
    //  acc 為累加用陣列
    let acc = [];

    // 將 acc 累加陣列，每項都設為 0 
    // a * b 最長長度為 : a.length + b.length
    for(let i = 0; i < Aarr.length + Barr.length; i++){
        acc[i] = 0;
    }

    // 分別累加 A * B
    for(let i = 0; i < Aarr.length; i++){
        for (let j = 0; j < Barr.length; j++){
            let num = Aarr[i] * Barr[j];
            acc[i+j+1] += Math.floor(num / 10);
            acc[i+j] += num % 10;
        }
    }

    // 將 acc 轉換成 Carr 陣列
    let n = acc.length
    for(let i = 0; i < n; i++){
        let num = acc[i];
        Carr.push(num % 10);
        acc[i+1] += Math.floor(num / 10);
    }
    
    // 去掉前面多的 0
    if (!Carr[Carr.length-1]){
        Carr.pop();
    }

    return Carr.reverse().join("");
}

// test data
console.log(multiply('99999999999999999999999', '9'));
console.log(multiply('9', '9999999999999999999999999999'));
console.log(multiply('3', '5'));
console.log(multiply('1', '1'));
console.log(multiply('0', '0'));
console.log(multiply('1', '0'));
console.log(multiply('1000000000000000000000000000', '1000000000000000000000000000'));
console.log(multiply('124902814902890825902840917490127902791247902479027210970941724092174091274902749012740921759037590347438758957283947234273942304239403274093275902375902374092410937290371093719023729103790123','1239128192048129048129021830918209318239018239018239018249082490182490182903182390128390128903182309812093812093820938190380192381029380192381092380192380123802913810381203'))
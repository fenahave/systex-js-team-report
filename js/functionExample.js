/**
 * 陳述句範例
 */
{
    var a = 3;
    if (a === 3) {
        console.log('Hello');
        return console.log('aaaa')
    }
}

/**
 * 表達式範例 錯誤的寫法
 */
{
    var a = 3;
    const b = if (a === 3) {
        console.log('Hello');
    }
}


/**
 * 表達示範例 正確寫法
 */
{
    var a = 3;
    const b = (a === 3) 
        ? console.log('Hello') 
        : null;
}

/** 
 * IIFE範例1(印出function本身)
 * function expression
 */
var iife1Print = function (user) {
    console.log('helloWorld, ' + user);
}
console.log(iife1Print);

/**
 * IIFE範例2 (在建立時立即執行function)
 */
var iife2ImmediatelyRun = function (name) {
    console.log('Welcome ' + name);
}();
console.log(iife2ImmediatelyRun);

/**
 * IIFE範例3 (在建立時立即執行function，並附帶參數)
 */
var iife3ImmediatelyRun  = function (name) {
    console.log('Welcome ' + name);
}('Guest');
console.log(iife3ImmediatelyRun);

/**
 * IIFE範例4 (立即執行範例)
 */
var iife4ImmediatelyRun = function(name) {
    return('Welcome ' + name);
}('Guest'); // 立即執行，並回傳字串
console.log(iife4ImmediatelyRun()); // 所以這邊會報錯


/**
 * IIFE範例5 (印出原始碼)
 */
var iife5PrintCode = function(name) {
    return('Welcome ' + name);
};
console.log(iife5PrintCode);

/**
 * IIFE深度應用範例1
 */
(function(name) {
    return('Welcome, ' + name);
})('Guest');

/**
 * IIFE深度應用範例2
 */
({
    name: 'Guest',
    interest: 'Web'
})

/**
 * 高階函式的範例1
 */
{
    var numbers = [2, 4, 6, 8, 10];
    const evenNumber = (item) => item % 4 === 0;
    const newNumbers = numbers.filter(evenNumber); // 將function直接放入參數內使用
    console.log(newNumbers); // [4, 8]
}

/**
 * 高階函式的範例2
 */
{
    var numbers = [2, 4, 6, 8, 10];
    const newNumbers2 = numbers.filter(function (item) { // 將function直接放入參數內使用
        return item % 5 === 0;
    });
    console.log(newNumbers2); // [5, 10]
}


/**
 * 
 */
const test1 = () => {
    // function expression
    var helloWorld = function (name) {
        console.log('Welcome, ' + name);
    }
    console.log(helloWorld);
}

//  button1
document.getElementById("button1").addEventListener("click",function() {
    let value = document.getElementById("input2").value;
    console.log(value);
})

// button2
document.getElementById("button2").addEventListener("click",function() {
    let value = document.getElementById("input2").value;
    console.log(value);
})
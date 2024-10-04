/** 
 * IIFE範例1(印出function本身)
 * function expression
 */
var helloWorld = function(user) {
  console.log('helloWorld, ' + user);
}

/**
 * IIFE範例2 (在建立時立即執行function)
 */
var sayWelcomeIIFEs = function(name) {
  console.log('Welcome ' + name);
}();

/**
 * IIFE範例3 (在建立時立即執行function，並附帶參數)
 */
 var sayWelcomeIIFEs = function(name) {
  console.log('Welcome ' + name);
}('PJCHEN');


const numbers = [1, 2, 3, 4, 5];
        const evenNumber = (item) => item % 2 === 0;
        const newNumebers = numbers.filter(evenNumber);
        console.log(newNumebers); // [2, 4]


/**
 * 
 */
const test1 = () => {
  // function expression
  var helloWorld = function(name) {
    console.log('Welcome, ' + name);
  }
  console.log(helloWorld);
}


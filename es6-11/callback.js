'use strict';

//자바스크립트는 동기적 언어이다.
//hoisting이 된 이후부터 차례로 실행된다.
//hoisting이란? var, function 선언 등이 자동으로 가장 위로 올라가는 현상

console.log('1');
setTimeout(function() {
    console.log('2');
}, 1000);
console.log('3');

//이렇게 하면 1, 3, 2 순서로 출력된다.

// Synchronous Callback
function printImmediately(print) {
    print();
}

printImmediately(()=>{console.log('hi')});

// Asynchronous Callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('hi'), 1000);


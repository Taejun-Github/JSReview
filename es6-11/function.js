function showMessage(message, from='a') {
    console.log(`${message} by ${from}`);
    //이렇게 하면 디폴트 값을 함수에 지정할 수 있다.
}

function printAll(...args) {
    for(let i=0; i < args.length; i++) {
        console.log(args[i]);
    }
}

args.forEach((arg) => console.log(arg));

const print = function() {
    console.log('print');
}

const printAgain = print;
printAgain();
//이렇게 해서 함수를 부를 수 있다.

//함수를 선언할 때 변수에 담으면 선언 전에 호출할 수 없지만 function(){}으로 선언하면 호이스팅되기 때문에 선언 전에 호출 가능하다.

function randomQuiz(answer, printYes, printNo) {
    if(answer === 'a') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes');
}

const printNo = function() {
    console.log('no');
}

randomQuiz('b', printYes, printNo);
randomQuiz('a', printYes, printNo);

const simplePrint = () => console.log('simplePrint');


//IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log("IIFE");
})();


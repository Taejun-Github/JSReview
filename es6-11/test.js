let a = document.getElementById("test");

function test(test, func1, func2) {
    if(test == 'a') {
        func1();
    } else {
        func2();
    }
}

function func1() {
    alert("!");
}
function func2() {
    alert("!!");
}

test('a', func1, func2);
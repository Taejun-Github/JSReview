function book() {
    var point = 123;
    function show() {
        var title = "JS책";
        //getPoint();
        //this.bookAmount
    };
    function getPoint() {
        return point;
    };
    show();
};

book();

var point = 100;
function getPoint() {
    var point = 200;
    return point;
};
var result = getPoint();
console.log(result);

/*
show 실행 콘텍스트(EC): {
    렉시컬 환경 컴포넌트(LEC): {
        환경 레코드(ER): {
            선언적 환경 레코드(DER): {
                title: "JS책"
            },
            오브젝트 환경 레코드(OER): {}{}
        },
        외부 렉시컬 환경 참조(OLER): {
            point: 123,
            getPoint: function(){}
        }
    },
    변수 환경 컴포넌트(VEC): {},
    this 바인딩 컴포넌트(TBC): {
        글로벌 오브젝트(window)
    }
}

sports = {
    arguments: {},
    caller: {},
    length: 0,
    name: "sports",
    prototype: {
        constructor: sports
        __proto__: Object.prototype
    },
    __proto__:Function.prototype
}
*/

function book(one, two) {
    return one + "." + two;
}

var getBook = function(title) {
    return title;
}

function book() {
    console.log(title);
    console.log(readBook);
    console.log(getBook);
    debugger;
    var title = "JS책";
    function getBook() {
        return title;
    };
    var readBook = function(){};
    getBook();
};
book();

let result = book();
console.log(result);

function book() {
    return "호이스팅";
}


function get(){
    return arguments;
}
console.log(get('a','b'));

var get = function(one) {
    return one;
};
get(77, 100);

function book() {
    var point = 123;
    function get() {
        console.log(point);
    };
    get();
};
book();

var value = 100;
function book() {
    var point = 200;
    return value;
};
book();

function book() {
    var point = 100;
    function add() {point += 200;};
    function get() { return point;};
}

function book() {
    var point = 100;
    function add(param) {
        point += param;
    } ;
    var get = function() {
        return point;
    };
    add(200);
    log(get());
};
book();

function music(title) {
    var musicTitle = title;
}
music('음악');

/*
실행 콘텍스트(EC): {
    렉시컬 환경 컴포넌트(LEC): {
        환경 레코드(ER): {
            point: 100
        },
        외부 렉시컬 환경 참조(OLER): {
            title: "책",
            getTitle: function() {}
        }
    }
}

실행 콘텍스트(EC): {
    렉시컬 환경 컴포넌트(LEC): {},
    변수 환경 컴포넌트(VEC): {},
    this 바인딩 컴포넌트(TBC): {}
}
*/

var base = 200;
function getPoint(bonus) {
    var point = 100;
    return point + base + bonus;
};
log(getPoint(70));

/**
 실행 콘텍스트(EC): {
     렉시컬 환경 컴포넌트(LEC) = {
         환경 레코드(ER): {
             선언적 환경 레코드(DER): {
                 point: 123
             },
             오브젝트 환경 레코드(OER): {}
         },
         외부 렉시컬 환경 참조(OLER): {
             base: 200
         }
     },
     변수 환경 컴포넌트(VEC): {},
     this 바인딩 컴포넌트(TBC): {}
 }
 */
/**
 실행 콘텍스트(EC): {
     글로벌 환경(GE): {
         환경 레코드(ER): {
             오브젝트 환경 레코드: 글로벌 오브젝트
         },
         외부 렉시컬 환경 참조(OLER): null
     }
 }
 */

 let obj = {point: 100};
 obj.getPoint = function() {
     return this.point;
 }
 obj.getPoint();
 /*
 실행 콘텍스트: {
     렉시컬 환경 컴포넌트 : {
         환경 레코드(ER): {
             선언적 환경 레코드(DER): {},
             오브젝트 환경 레코드(OER): {}
         },
         외부 렉시컬 환경 참조: {}
     },
     변수 환경 컴포넌트: {},
     this 바인딩 컴포넌트(TBC) : {
         point: 100,
         getPoint: function() {}
     }
 }
 */

 function one() {
     two();
     console.log(1);
 }

 function two() {
     three();
     console.log(2);
 }

 function three() {
     console.log(3);
 }
 
 one();

 var obj = {};
 obj.getTotal = function(one, two) {
     return one + two;
 }
 log(obj.getTotal(11, 22, 77));

 var obj = {};
 obj.getTotal = function(one, two) {
     var one;
     log(one + two);
     //33이 출력된다.
     two = 77;
     log("two: " + two);
     //77이 출력된다.
 }
 obj.getTotal(11, 22);
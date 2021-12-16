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

 function Book(point) {
     this.point = point;
 };
 Book.prototype.getPoint = function() {
     return this.point + 200;
 };
 var obj = new Book(100);
 log(obj.point);
 log(obj.getPoint());

 function Book(point) {
     this.point = point;
 }
 Book.prototype.getPoint = function() {
     return this.point;
 }
 var obj = new Book(10);

 /**
  Book 인스턴스 : {
      point: 10,
      __proto__ = {
          constructor: Book,
          getPoint: function() {},
          __proto__:Object
      }
  }
  */

  var Book = function(){}
  var result = 
  Book === Book.prototype.constructor;
  log("1: ", result);

  var obj = new Book();
  log("2: ", Book === obj.constructor);
  log("3: ", typeof Book);
  log("4: ", typeof obj);

  function Book(title) {
      this.title = title;
  }
  Book.prototype.getTitle = function() {
      return this.title;
  }
  function Point(title) {
      Book.call(this, title);
  }
  Point.prototype = Object.create(Book.prototype, {});
  var obj = new Point("자바스크립트");
  log(obj.getTitle());


  class Book{
      constructor(title) {
          this.title = title;
      }

      getTitle() {
          return this.title;
      }
  }

  class Point extends Book {
      constructor(title) { 
          super(title);
      }
  }
  const obj = new Point("자바스크립트");
  log(obj.getTitle());

  function Book(){};
  Book.prototype = {
      constructor: Book,
      setPoint: function() {}
  }
  var obj = new Book();
  log(obj.constructor);

  function Book(point) {
      this.ponit = point;
  }
  Book.prototype.getPoint = function() {
      return this.point;
  }
  var obj = new Book(100);
  obj.getPoint();

  /**
   obj: {
       point: 100,
       __proto__ = {
           constructor: Book,
           getPoinst: function() {},
           __proto__:Object
       }
   }
   */

   function Book() {
       log("1: " , this.point);
   }

   Book.prototype.getPoint = function() {
       this.setPoint();
       log("2: " , this.point); 
   }
   Book.prototype.setPoint = function() {
       this.point = 100;
   }
   var obj = new Book(); //undefined 출력
   obj.getPoint(); //100 출력


function Book(point) {
    this.point = point;
}
Book.prototype.getPoint = function() {
    return this.point;
}
var obj = new Book(100);
log(obj.getPoint()); // 100 출력
log(Book.prototype.getPoint()); //undefined 출력

function Book() {
    this.point = 100;
}
var obj = new Book();
log(obj.getPoint);
Book.prototype.getPoint = function() {
    return this.point;
}
var result = obj.getPoint();
log(result)

/**
 obj 인스턴스 = {
     point: 100,
     getPoint: function(){},
     __proto__: {
         getPoint: function(){}
     }
 }
 */

 function Book(point) {
     this.point = point;
 }
 Book.prototype.getPoint = function() {
     return 100;
 }

 var obj = new Book(200);

 obj.getPoint = function() {
     return this.point;
 }
 log(obj.getPoint());


log(this === window); //true 출력

var value = 100;
log(this.value); //100이 출력
// 1. var value = 100; value는 글로벌 변수이다. 2.this.value; this가 글로벌 오브젝트를 참조하므로
// this.value 형태로 글로벌 변수를 사용 가능하다.

var value = 100;
log(window.value)
//100이 출력된다. 1.window.value 2. window가 글로벌 오브젝트를 참조하므로 window.value 형태로 글로벌 변수를 사용할 수 있다.

this.value = 100;
log(window.value); //100 출력
//1. this.value = 100;
//2. this가 글로벌 오브젝트를 참조하므로 글로벌 오브젝트에 설정된다.
//3. window가 글로벌 오브젝트를 참조하므로 value를 사용할 수 있다.
//4. window 오브젝트와 같이 다른 오브젝트를 마치 내 것처럼 사용하는 것을 Host 오브젝트라고 한다.


window.onload = function() {
    log(this === window); // true 출력
}
//1. true가 출력된 것은 값과 타입이 같다는 것
//2. this가 window를 참조하는 것은 window.onload = function(){...}에서 onload()가 window의 핸들러 함수이기 때문이다.

window.onload = function() {
    this.value = 100;
    log(window.value); //100 출력
}
//1. this.value = 100;
//2. this가 window 오브젝트를 참조하므로 window 오브젝트에 설정된다.

window.onload = function() {
    var value = 100;
    log(this.value);
    //undefined 출력
}
//1. var value = 100; value는 핸들러 함수의 지역 변수
//2. this.value; this가 window 오브젝트를 참조하므로 this.value로 지역 변수에 접근할 수 없다.
//value는 onload 함수 안에 설정된 것인데 this는 window 객체 안에 존재하기 때문이다.


function book() {
    'use strict';
    return this;
};
var result = book();
log(result); //undefined 출력
//1. 호출하는 book() 함수 앞에 오브젝트를 작성하지 않으면 
//2. return this에서 undefined 반환
//3. this 바인딩 컴포넌트에 undefined가 설정된다는 뜻이다.

function book() {
    'user strict';
    return this;
}
var obj = window.book();
log(obj === window); //true 반환
//1. 호출하는 book() 함수 앞에 window 오브젝트를 작성한다.
//2. book() 함수가 글로벌 함수이므로 호출되며 return this에서 window 오브젝트 반환

var book = {
    point: 100,
    member: {
        point: 200,
        get: function() {
            log(this === book.member);
            log(this.point);
        }
    }
};
book.member.get();//실행 결과는 true, 200이다.

var book = {
    value: 123,
    get: function() {
        var value = 456;
        log(this === window);
        log(this.value);
    }
};
var fn = book.get;
fn();

//실행 결과가 true, undefined가 나온다.

function getTitle() {
    log("HTML책");
};

var book = function() {
    function getTitle() {
        log("JS책");
    };
    this.getTitle();
    getTitle();
};
book(); //HTML책, JS책이 출력

var book = {};
book.Point = function(point) {
    this.point = point;
}
book.Point.prototype.getPoint = function() {
    log(this.point);
}
var obj = new book.Point(100);
obj.getPoint();

'use strict';
var value = 100;
function get(param) {
    return param + this.value;
};
var result = get.call(this, 20);
log(result);

var get = function(value) {
    return this.base * this.rate + value;
}
var value = {base: 20, rate: 30};
var result = get.call(value, 50);
log(result);

function get() {
    return this.valueOf();
}

var result = get.call(123);
log(result);

var book = {
    value: 123,
    point: {
        value: 456,
        get: function() {
            log(this.value);
        }
    }
};

book.point.get.call(book);
book.point.get.call(book.point);

var obj = {0: 10, 1: 20, 2: 30};
var data = [4,5,6];

function get() {
    for(k=0; k<arguments.length; k++) {
        log(arguments[k] + this[k]);
    };
};
get.apply(obj. data);

var obj = {value: 100};
var data = [5,6,7];

function callback(element, index, data) {
    return element + this.value;
};
function get(data) {
    return data.map(callback, obj);
}
var result = get(data);
log(result);

var book = {
    point: 123,
    get:function() {
        return this.point;
    }
};

var obj = book.get.bind(book);
log(typeof obj);
var result = obj();
log(result);

var book = {
    get: function() {
        return Array.prototype.slice.call(arguments);
    }
};
var obj = book.get.bind(this, 10, 20);
var result = obj(30, 40);
log(result);

var book = {
    myPoint: 100,
    setEvent: function() {
        var node = document.getElementById("point");
        node.onclick = this.show.bind(book, node);
    },
    show: function(node, event) {
        log(node.textContent);
        log(this.myPoint);
    }
}
book.setEvent();

var origin = {member : 100};
var dup = origin;
dup.member = 200;
log(origin.member);
//1. origin 오브젝트를 dup 변수에 할당한 후 dup.member에 200을 설정하면 origin.member 값이 연동되어 바뀐다.
//2. 오브젝트를 할당하면 값을 공유하기 때문이다.

var origin = [1,2,3];
var dup = origin;
dup[1] = 200;
log(origin);

var origin = {member : 100};
var dup = {};
for(var name in origin) {
    dup[name] = origin[name];
};
dup.member = 200;
log(origin.member);
log(dum.member);

var book = {
    member: {name: 100},
    point: {value: 200}
};

function show(param) {
    for(var type in param) {
        typeof param[type] == "object" ? show(param[type]) : log(type + ".", param[type]);
    }
};
show(book);

var total = (1 + 2);
log(total);
//(1+2) 형태에서 소괄호()는 그룹핑 연산자이며 1 + 2는 표현식이다
//그룹핑 연산자는 소괄호 안의 표현식을 평가하고 평가 결과를 반환한다.
//소괄호와 표현식 평가가 키포인트이다.

var value = function() {
    return 100;
};
log(value());
//1. 함수 표현식으로 엔진이 function 키워드를 만나면 function 오브젝트를 생성하여 value 변수에 할당한다.
//2. value 변수를 선언하지 않으면 함수 이름이 없으므로 문법 에러. 함수 표현식도, 함수 선언문도 아니기 때문이다.
//3. value()처럼 function 끝에 소괄호()를 첨부하면 함수로 호출된다. 이 때, 소괄호()는 그룹핑 연산자가 아닌 함수 호출이다.

var value = function() {
    return 100;
}();
log(value);
//1. 함수 끝에 소괄호를 첨부한 형태
//2. function 키워드를 만나 function 오브젝트 생성
//3. 소괄호가 있으므로 함수 호출
//4. 함수에서 반환한 100을 value 변수에 할당한다.
//소괄호를 만들면 function 오브젝트를 value 변수에 할당하지 않고 즉시 실행해서 return한다.

var value = (function() {
    return 100;
}());
log(value);
//1. 소괄호 안에 함수 작성
//2. 소괄호는 그룹핑 연산자
//3. 그룹핑 연산자이므로 소괄호 안의 표현식을 평가한다.
//4. 표현식이 함수이므로 function 오브젝트를 생성한다.
//5. function 끝에 소괄호가 있으므로 함수를 실행한다.

(function(){
    log(100);
}());
/*
1. 그룹핑 연산자를 작성하지 않으면 함수 이름이 없으므로 문법 에러이다.
2. 하지만 그룹핑 연산자를 작성하면 표현식에 function을 작성한 것이므로 문법 에러가 발생하지 않는다.
즉, (1 + 2)에서 1 + 2 대신에 함수를 작성한 것이다.
3. 표현식과 표현식 평가 결과는 평가 결과가 반환할 때까지 메모리에 저장하고 평가 결과를 반환하면 지워진다.
4. (1 + 2)의 결과가 메모리에 저장된다면 매우 많은 메모리가 필요할 것이다.
5. funciion(){}(); 코드로 만든 오브젝트도 메모리에 저장되지 않으며 실행 결과도 메모리에 저장되지 않는다.
6. 따라서 저장해야 할 것이 있다면 표현식 밖의 변수, 프로퍼티에 저장해야 한다.
7. 저장할 필요가 없는 1회성 코드이면서 엔진이 function 키워드를 만나는 시점에 즉시 실행해야 한다면
8. 그룹핑 연산자 안에 표현식으로 작성한다
9. 무명 함수는 그룹핑 연산자 안의 코드를 한번만 사용한다.
*/

/*
실행 콘텍스트: {
    렉시컬 환경 컴포넌트: {
        환경 레코드: {
            선언적 환경 레코드: {},
            오브젝트 환경 레코드: {}
        },
        외부 렉시컬 환경 참조: {}
    }
}
*/

function book() {
    var point = 100;
    var getPoint = function(param) {
        point = point + param;
        return point;
    };
    return getPoint;
};
var obj = book();
log(obj(200));

/*
실행 콘텍스트 = {
    렉시컬 환경 컴포넌트 = {
        환경 레코드: {
            선언적 환경 레코드: {},
            오브젝트 환경 레코드: {}
        },
        외부 렉시컬 환경 참조: {[[scope]]}
    },
    변수 환경 컴포넌트 = {Same}
    this 바인딩 컴포넌트: {}
}

렉시컬 환경 컴포넌트 = {
    환경 레코드: {
        선언적 환경 레코드: {},
    },
    외부 렉시컬 환경 참조: {
        point: 100
    }
}

렉시컬 환경 컴포넌트 = {
    환경 레코드: {
        선언적 환경 레코드: {
            param: 200
        },
    },
    외부 렉시컬 환경 참조: {
        point: 100
    }
}
*/

var book = (function(){
    var point = 100;
    function getPoint(param) {
        return point + param;
    };
    return getPoint;
}());
log(book(200));
'use strict'
//자바스크립트는 ES6 이후로 클래스가 도입되었다.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //이렇게 메소드를 정의한다.
    speak() {
        console.log(`${this.name}`);
    }

    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

class Experiment {
    publicField = 2;
    #privateField = 0;
    //외부에서 접근 불가하다.
}

const experiment = new Experiment();

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
//static 함수는 객체를 생성하고 호출하는 것이 아니라 클래스 이름으로 호출한다.


class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.hegith;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw() {
        super.draw();
        //이렇게 부모의 메서드를 그대로 사용할 수 있다.
    }
    getArea() {
        return (this.width * this.height) / 2;
        //이렇게 함수 오버라이딩dl 가능하다.
    }
}

const rectangle = new Rectangle(29, 29, 'blue');
const triangle = new Triangle(10, 10, 'red');

rectangle.draw();
triangle.draw();

console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Object);
//모든 클래스는 Object 클래스를 상속한다.


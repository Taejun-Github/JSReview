const obj1 = {};
const obj2 = new Object();
//이런 방식으로 객체 생성 가능하다.

console.log(ellie.name);
console.log(ellie['name']);
//이 두가지 방식이 가능하다.

function printValue(obj, key) {
    console.log(obj.key);
    //이렇게 하는 것이 이 경우는 불가능하다.
    console.log(obj[key]);
    //이 경우에는 밑의 경우만 가능하다.
}

function makePerson(name, age) {
    return {
        name: name,
        age: age
    }
}
//이렇게 객체를 반환하는 함수를 만들 수 있다.

function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this; 이것이 생략되어 있다.
}
//이런식으로 클래스처럼 함수를 만들어 객체를 반환시킬 수 있다. 이런 함수를 constructor function 이라고 한디.

//for..in과 for..of의 차이는?

console.clear(); //이러면 콘솔 비우기 가능

for(key in ellie) {
    console.log(key);
}

const array = [1,2,3,4,5];
for(let i=0; i < array.length; i++) {
    console.log(i);
}
for(value of array) {
    console.log(value);
}
//for of는 객체가 아니라 배열과 같은 iterable한 객체에 사용한다


for(key in ellie) {
    console.log(key);
    //ellie 객체 안에 있는 모든 키들을 출력한다.
}

// for in 은 객체 순환이고 for of는 배열 순환이다.

const user = {name: 'ellie', age: '20'};
const user2 = user;

const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
//이런식으로도 복사가 가능하다.

const user4 = {};
Object.assign(user4, user);
//assign으로도 복사가 가능하다.

const fruit1 = {color:'red'};
const fruit2 = {color: 'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);
//이렇게 하면 뒤의 값으로 앞의 값을 덮어씌운다.
//만약에 fruit2 뒤에 fruit3을 더 쓰면 fruit3의 값으로 덮어씌워진다.




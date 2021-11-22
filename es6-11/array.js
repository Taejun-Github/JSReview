'use strict';

//Array
const arr1 = new Array();
const arr2 = [];


fruits = ['banana','apple','grape'];
fruits.array.forEach((element, index, fruits) => {
    console.log(element);
});
//이렇게 반복문을 대체할 수 있다. 
//element, index, array 순으로 들어올 수 있다. 

fruit.push('berry', 'pear');
//뒤에서부터 데이터 넣기

fruit.pop();
//뒤에서부터 데이터 빼기

fruit.unshift('orange');
//앞에서부터 데이터 넣기

fruit.shift();
//맨 앞에 있는 요소 제거하기

//자료구조에 의하면 unshift와 shift는 pop, push에 비해 더 느리다.

fruits.splice(1, 1);
//인덱스 1부터 하나를 지운다.
fruits.splice(1);
//인덱스 1부터 전부 지운다.
fruits.splice(1,1,'melon','lemon');
//인덱스 1부터 하나를 지우고 그 자리에 뒤에 열거한 요소를 넣는다.

fruits.join();
//이렇게 하면 배열을 string으로 변환할 수 있다.
fruits.join('.');
//이렇게 구분자를 넣을 수도 있다.

//split을 쓰면 반대로 할 수 있다.

//reverse를 쓰면 순서 반대로 하기 가능

//find()를 사용하면 배열에서 값을 찾을 수 있다.
class Student {
    constructor(grade, no, boolean, score) {
        this.grade = grade;
        this.no = no;
        this.boolean = boolean;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 19, false, 80),
    new Student('C', 27, true, 90),
    new Student('D', 43, true, 77),
    new Student('E', 33, false, 88)
];

const result = students.find(function(student, index) {
    if(student.score > 90) {
        return true;
    } else {
        return false;
    }
    // return student.score === 90;
    //이렇게 해도 된다.
});

//filter()도 마찬가지로 콜백함수를 전달한다.

const result2 = students.filter((student) => student.boolean);
//이렇게 하면 true인 요소만으로 배열이 만들어진다. 

const result3 = students.map((student)=> student.score);
//이렇게 하면 score만으로 새로 배열을 만들 수 있다.

const result4 = students.some((student) => student.score < 80);
//true false 값을 반환한다. 하나라도 만족하면 true가 반환된다.

const result5 = student.some((student) => student.score < 60);
//이것은 모든 것을 만족해야 true가 반환된다.

const result6 = student.reduce((prev, curr)=> {
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
    //이렇게 하면 0부터 시작해서 순차적으로 score를 누적할 수 있다.
}, 0);
//원하는 시작점부터 모든 배열을 돌면서 값을 누적한다.


const stringarray = students.map((student)=> student.score).filter((score) => score >= 50).join();
//이렇게 하면 50점 이상인 것을 문자열로 

const result7 = students.map((student)=> student.score).sort((a,b)=> b-a).join();
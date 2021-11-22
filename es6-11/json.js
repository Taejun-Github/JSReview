//1. Object to JSON
JSON.stringify(Object);

//2. JSON to Object
JSON.parse(JSON);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: 10,
    symbol: Symbol('id'),
    birthDate: new Data(),
    jump: () =>{
        console.log(`color is ${color}`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);
json2 = JSON.stringify(rabbit, ['name', 'color']);
//이렇게 하면 name, color 프로퍼티만 json 문자열로 만들 수 있다. 

json3 = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
    //키가 name일 때 ellie를 대입하고 나머지 키는 값을 그대로 대입한다. 
});
//이렇게 하면 모든 키와 밸류가 콜백함수에 전달된다.


const obj = JSON.parse(json);
//이렇게 하면 json 문자열을 자바스크립트 객체로 변환할 수 있다. 
obj.jump();
//이렇게 함수는 사용할 수 없다. json 문자열에서 객체로 serialize 할 때, 함수는 복원되지 않음
//처음에 stringify할 때 함수를 json문자열로 변환하지 않으므로 포함되지 않는다. 

obj.birthDate;
//이것은 string 으로 반환된다.
rabbit.birthDate.getDate();
//따라서 이렇게 얻는 것이 복원된 객체에서는 불가능하다. 

const obj2 = JSON.parse(json, (key,value) => {
    return key ==='birthData' ? new Data(value) : value;
    //이런식으로 복원시키려면 따로 함수를 만들어서 사용해야 한다. 
})
//Shorthand property name

{
  const ellie1 = {
    name: "Ellie",
    age: "18",
  };

  const name = "Ellie";
  const age = "18";

  const ellie2 = {
    name: name,
    age: age,
  };
  //이렇게 하면 변수가 가리키고 있는 값이 value로 들어오게 된다.

  const ellie3 = {
    name,
    age,
  };
  //key와 value가 동일하면 이렇게 하나로만 작성할 수 있다.

  console.log(ellie1, ellie2, ellie3);
}

// Destructuring Assignment

{
  //object
  const student = {
    name: "Anna",
    level: 1,
  };

  //기존에 Object의 key와 value에 접근했던 방법은?
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  //Destructuring Assignment에 의한 방법
  {
    const { name, level } = student;
    console.log(name, level);
    //이렇게 하면 student 객체에 있는 key와 value들이 각각 할당된다.

    const { name: studentName, level: studentLevel } = student;
    //이렇게 하면 기존의 값을 읽는 것이 아니라 새로운 값으로 정의할 수 있다.
    console.log(studentName, studentLevel);
  }

  //배열

  const animals = ["dog", "cow"];

  //기존 방식으로 배열에 접근하려면?
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  //Destructuring Assignment에 의한 방법
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

//Spread Syntax

{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  //array copy
  const arrayCopy = [...array];
  //이렇게 하면 간단하게 배열을 복사할 수 있다. 참고로 이것은 얕은복사이다.
  //따라서 한 요소의 값을 변경하면 복사한 모든 곳에서 그 값이 변경된다.
  obj1.key = "newKey"; //이렇게 할 시에는 arrayCopy, arrayCopy2에서 obj1의 값이 변경되어 있다.

  const arrayCopy2 = [...array, { key: "key3" }];
  //이렇게 하면 새로운 요소를 추가할 수도 있다.

  const obj3 = { ...obj1 };
  console.log(obj3);
  //이렇게 하면 object도 같은 방식으로 얕은복사할 수 있다.

  const fruits1 = ["apple", "strawberry"];
  const fruits2 = ["banana", "kiwi"];

  const fruits = [...fruits1, ...fruits2];
  //이렇게 배열을 합칠 수 있다.

  const dog1 = { dog1: "문재인" };
  const dog2 = { dog2: "이재명" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
  //object도 마찬가지로 이렇게 합칠 수 있다.
  //만약 키가 같은 Object를 병합하면? 뒤에 있는 키가 앞의 키를 덮어씌우게 된다
}

//default parameters

{
  //기존에는 default 메시지를 나타내기 위해서 이렇게 했다.
  function printMessage(message) {
    if (message == null) {
      message = "default message";
    }
    console.log(message);
  }

  printMessage("hi");
  printMessage();
}

{
  //이렇게 디폴트 메시지를 받도록 함수를 만들 수 있다.
  function printMessage(message = "default message") {
    console.log(message);
  }

  printMessage("hi");
  printMessage();
}

//Terary Operator
{
  const isCat = true;
  {
    let component;
    if (isCat) {
      component = "dog";
    } else {
      component = "cat";
    }
    console.log(component);
  }

  {
    //삼항연산자이다.
    const component = isCat ? "dog" : "cat";
    console.log(component);
    console.log(isCat ? "dog" : "cat");
  }
}

//Template Literals
{
  const weather = "sunny";
  const temperature = "16";

  console.log(
    "Today weather is" + weather + "and temperature is " + temperature
  );
  console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}

//Optional Chaining(ES11)

{
  const person1 = {
    name: "Ellie",
    job: {
      title: "s/w engineer",
      manager: {
        name: "Bob",
      },
    },
  };

  const person2 = {
    name: "bob",
  };
  //한 객체는 job이 있고 다른 객체는 job이 없는데 person.job.manager.name을 호출하는 함수를 만든다면?
  //person2에는 쓸 수가 없다. 그렇다면 모두에게 쓰일 수 있는 함수는 어떻게 만들까?

  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
    //이렇게 사용할 수 있다.
  }

  //optional chaning으로 개선할 수 있다.
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
      //person에 job이 있으면, 그리고 manager가 있으면 name을 출력한다는 뜻이다.
      printManager(person1);
      printManager(person2);
    }
  }
}

//Nullish Coalescing Operator(ES11)
{
  {
    const name = "Ellie";
    const userName = name || "Guest";
    console.log(userName);
    //JS에서 false는? false, '', 0, null, undefined 모두 false에 해당한다.
    //그러므로 name || 'Guest'는 name이 false. 즉 빈칸일때면 'Guest'가 입력된다.
  }
  {
      const name = null;
      const userName = name || 'Guest';
      console.log(userName);
  }
  //그런데 이 방법은 문제점을 가지고 있다. 어떤 문제점? 문자열이 비어있는 경우에도 false로 간주되어 자동으로 guest가 할당되는 문제점.
  //그리고 숫자가 0이 대입된 경우에도 마찬가지이다.
}

{
    const name='';
    const userName = name ?? 'Guest'; //name에 아무런 값이 없을 때만(빈칸도 없을 때) Guest를 이용한다는 뜻이다.
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined'; //num에 0도 없어야 undefined를 쓴다.
    console.log(message);
    //
}
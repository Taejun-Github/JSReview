"use strict";

//1. Producer
// when new Promise is created, the executor runs automatically

const promise = new Promise((resolve, reject) => {
  console.log("doing something...");
  setTimeout(() => {
    resolve("return value");
    //성공시에 실행되는 함수가 resolve이다.
    // rejuct(new Error('no network'));
  }, 2000);
});
// promise를 생성하는 순간 안에 있는 함수가 실행된다.

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("마지막에 무조건 호출된다");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
  // 콜백함수에 1을 대입하는 것에 해당
});

fetchNumber
  .then((num) => num * 2)
  // fetchNumber는 콜백함수에 1을 대입하는 것이므로 1 => 1 * 2 가 수행된 것이다.
  // resolve에서 전달된 값이 num에 대입되어서 콜백함수로 전달된다.
  .then((num) => num * 3)
  // 첫번째로 완료된 값인 2에다가 해당 콜백함수를 수행한다.
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
// then은 값을 직접 전달해도 되고 다른 promise를 전달해도 된다.

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("hen"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => egg`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fry`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

// 어떻게 이해하면 될까? promise에 있는 resolve와 reject는 then에 대입되는 콜백함수이다.
// promise의 resolve에 담긴 값이 then 이후의 콜백함수에 인자로 전달된다.
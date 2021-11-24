//async & await
//clear style of using promise

"use strict";

function fetchUser() {
  //do network request in 10 secs...
  return new Promise((resolve, reject) => {
    resolve("ellie");
  });
}

const user = fetchUser().then((user) => {
  console.log(user);
});
console.log(user);

async function fetchUser2() {
  return "ellie";
}

// async를 함수 앞에 써주면 자동으로 promise가 된다.

// await은 async가 붙은 함수에서만 쓸 수 있다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "a";
}

async function getBanana(){
    await delay(5000);
    return 'b';
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();

    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
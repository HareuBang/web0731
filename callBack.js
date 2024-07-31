function callback() {
  console.log('콜백 함수가 호출')
}

// setTimeout(callback, 1000);
callback();
console.log('작업을 수행함')

// function getUsers() {
//   let users = [];
//   setTimeout (() => {
//     users = [
//       {name:"kim", email: "kim@gmail.com"},
//       {name:"Lee", email: "Lee@gmail.com"},
//       {name:"park", email: "park@gmail.com"},
//     ]
//   })
//   return users;
// }

// function findUser(name) {
//   const users = getUsers();
//   const user = users.find(user => users.name === name);
//   return user;
// }

function getUsers(callback) {
  setTimeout (() => {
    callback([
      {name:"Kim", email: "kim@gmail.com"},
      {name:"Lee", email: "Lee@gmail.com"},
      {name:"park", email: "park@gmail.com"},
    ]);
  })
}

function findUser(name, callback) {
  getUsers(users => {
    const user = users.find(user => user.name === name);
    callback(user.email);
  })
}

// let user = findUser("kim");
// console.log(user);

let user = findUser("Kim", user => {
  console.log(user);
})
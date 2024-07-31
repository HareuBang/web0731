async function sayHello() {
  return "안녕";
}
sayHello()
  .then(console.log);

class Greeter {
  async sayHello() {
    return "안녕 Class"
  }
}
const greeter = new Greeter()
greeter.sayHello().then(console.log)

async function sayHello() {
  return Promise.resolve("안녕")
}
sayHello().then(console.log);
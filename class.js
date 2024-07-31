// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function() {
//     return Math.PI = this.radius ** 2;
//   }
// }

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function() {
  return Math.PI = this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(circle1.getArea === circle2.getArea);

console.log(circle1 instanceof Circle);
console.log(circle2 instanceof Circle);

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
  static sayHello() {
    console.log('Hello');
  }
}

const me = new Person('Park');
me.sayHi();
Person.sayHello();
console.log(me.name);

const Human = (function () {
  function Human(name) {
    this.name = name;
  }

  Human.prototype.sayHi = function() {
    console.log('Hi ' + this.name);
  }

  Human.sayHello = function() {
    console.log('Hello!');
  }
  return Human;
}());
const you = new Human('Kim');
console.log(you.name);
you.sayHi();
Human.sayHello();

class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    console.log(`프로토타입 this ${this}`)
    return this.width * this.height;
  }

  static area(width, height) {
    console.log(`static this ${this}`)
    return width * height
  }
}
const square = new Square(10, 10);
console.log(square.area());

console.log(Square.area(10, 10));

class Bird {
  #name = '';
  thisWhat = this;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name.trim();
  }
  get thisWahtInfo() {
    return this;
  }
}
const bird = new Bird('Bird');
console.log(bird.name)
console.log(bird.thisWahtInfo);

class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
const myCar = new Car('벤츠', 4, true);
console.log(myCar)

class Base {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi! ${this.name}. how are you doing?`; 
  }
}

class Derived extends Base {
  sayHi(){
    return `${super.sayHi}`
  }
}

const derived = new Derived('Lee');
console.log(derived.sayHi());
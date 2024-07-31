class Sequence {
  constructor(from=0, to=Infinity, interval=1) {
    this.from = from;
    this.to = to;
    this.interval = interval;
  }

  *[Symbol.iterator]() {
    let num = this.from;
    while(num <= this.to){
      yield num;
      num += this.interval;
    }
  }
}

function* generateIterables(...iterables) {
  for(let iterator of iterables)
    yield* iterator;
}

let generator = generateIterables("abc", [1, 2, 3, [4, 5]], new Sequence(2, 10, 2));
let arr = [...generator];
console.log(arr);

let evenNumbers = new Sequence(2, 10, 2);
// console.log(...evenNumbers);

let generator2 = evenNumbers[Symbol.iterator]()
console.log(generator2);
let result = generator2.next()
console.log(result);
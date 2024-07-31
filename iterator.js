class Sequence {
  constructor(from=0, to=Infinity, interval=1) {
    this.from = from;
    this.to = to;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let next = this.from;

    return {
      next: () => {
        if(next <= this.to) {
          let result = { value: next, done: false};
          next += this.interval;
          return result;
        }
        return {value: undefined, done: true};
      }
    }
  }
}

let evenNumbers = new Sequence(2, 10, 3);

// let arr = [...evenNumbers];
// console.log(arr);

let iterator = evenNumbers[Symbol.iterator]();
console.log(`iterator ${iterator}`);
let result = iterator.next();
console.log(result);

// 1. generator와 마찬가지로 .next()를 사용하지 않고 ...evenNumbers를 사용하면 출력이 된다.
// 2. generator에는 .next()를 정의하지 않았는 데 .next()를 사용하기에 iterator에도 .next를 주석 처리했는 데 Error가 걸린다. generator에만 .next()를 사용할 수 있는 이유는? (아마 p.245 generator도 순회할 수 있는 객체이기 때문에 [Symbol.iterator]()를 호출하면 이터레이터를 가져올 수 있고 사용할 수 있다. -> generator의 .next()도 재정의 할 수 있을까?)
// 3. 2.에 대한 내가 생각한 답에 의하면 굳이 class Sequence를 작성하지 않아도 사용할 수 있는 데 클래스를 만들어서 사용하는 이유는 뭘까? -> 활용법이 궁금함.(클래스로 만들어서 사용하는 이유는 나에게 맞는 코드로 변경할 수 있기 때문이라는 건 알고 활용법이 궁금하다.);
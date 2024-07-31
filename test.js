// 1.
// const one = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "A");
// })
// const two = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "B");
// })
// let promises = [one, two];

// Promise.all(promises)
// .then(results => {
//   console.log(`${ results} 완료`);
// })

// 2.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

const promise2 = (number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(number * 10);
  }, 1500);
});

promise1
  .then(result => {
    console.log(`promise1이 반환한 숫자: ${result}`);
    return promise2(result);
  })
  .then(result => {
    console.log(`promise2가 반환한 값: ${result}`);
  })
  .catch(error => {
    console.error('에러:', error.message);
  });

// 3.
// 제너레이터를 사용하여 여러 비동기 작업을 순차적으로 실행하는 함수를 작성하세요. 각 작업은 2초 후에 완료된다고 가정하고, 작업이 완료될 때마다 그 결과를 출력해야 합니다. 제네레이터는 작업이 완료될때마다 다음 작업을 실행해야 합니다.
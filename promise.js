const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000))
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000))
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("실패"), 3000))
let promises = [p1, p2, p3]

// Promise.all(promises)
// .then(results => {
//   const total = results.reduce((s, r) => {
//     console.log(`s: ${s} r: ${r}`);
//     return s + r;
//   })
//   console.log(`결과: ${results}`)
//   console.log(`합계: ${total}`)
// })

Promise.allSettled(promises)
.then(results => {
  const fulfilledResults = results
    .filter(result => result.status === "fulfilled")
    .map(result => result.value);
  const total = fulfilledResults.reduce((s, r) => {
    console.log(`s: ${s} r: ${r}`);
    return s + r;
  })
  console.log(`결과: ${fulfilledResults}`)
  console.log(`합계: ${total}`)
})
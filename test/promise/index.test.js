const MyPromise = require('../../index/promise');

// let promise = new MyPromise((resolve, reject) => {
//   resolve('成功')
//   // reject('失败')
// })
// let promise2 = new MyPromise((resolve, reject) => {
//   resolve('成功')
//   // reject('失败')
// })
// let logs = []
// promise.then(val => {console.log(val), logs.push(val)})
// promise2.then(() => {}, val => {logs.push(val)})
test('手写实现简易版promise', () => {
  let promise = new MyPromise((resolve, reject) => {
    resolve('成功')
    // reject('失败')
  })
  let promise2 = new MyPromise((resolve, reject) => {
    // resolve('成功')
    reject('失败')
  })
  let logs = []
  promise.then(val => {console.log(val), logs.push(val)})
  promise2.then(() => {}, val => {logs.push(val)})
  expect(logs).toBe(['成功', '失败']);
});
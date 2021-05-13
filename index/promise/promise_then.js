
const MyPromise = require('./index')
let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 2000)
  // reject('失败')
  // throw new Error('err')
  // resolve('成功')
})
promise.then(val => {
  // throw new Error('then方法错误')
  setTimeout(() => {
    console.log(val)
    return 'aaa'
  },2000)
}, err => console.log('3333', err.message, 'erer'))
.then(value => console.log(value, '99999'), e => {
  console.log(e.message, 'then方法错误');
})

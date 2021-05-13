/**
 * 1、new Promise() Promise是一个类
 * 2、new Promise(() => {}) 传递的执行器会被立即执行
 * 3、new Promise((resolve, reject) => {}) 有三个状态
 * 4、{resolve(); reject()}  resolve 和 reject 函数是用来更改状态的：resolve: fulfilled,reject: rejected
 *  */ 

/**
 * let promise = new Promise((resolve, reject) => {})
 * promise.then(() => {},() => {})
 * 1、then方法内部做的事情就是判断状态，如果状态是成功，则调用成功的回调，失败则调用失败的回调。
 *    then方法是被定义在原型对象中的.
 * 2、then成功后有一个参数，是成功后的值，失败也一样。
 */

/**
 * 实现then方法的链式调用
 * 1、实现then方法的链式调用
 * 2、下一个then方法的接收值是上一个then方法的返回值。
 */
/**
 * then方法中如果返回了自己，应该报错
 *
const p1 = promise.then(val => {
  console.log(val)
  return p1
})
p1.then(res => {
  console.log(res, '成功')
}, e => {
  console.log('错误', e.message)
})  
 */  
/**
 * 错误捕获：在执行器执行过程中，then执行中
 * 如果发生错误，应该捕获到错误
 */
const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败
class MyPromise {
  constructor (executor) {
    // executor执行器代表回调函数，应立即执行
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }
  // promise状态
  status = PENDING
  // 成功后的值
  value = undefined
  // 失败后的值
  reason = undefined
  // 成功回调，数组用于当有多个调用时
  successCallback = []
  // 失败回调
  failCallback = []
  // 定义成箭头函数是为了 this指向MyPromise
  resolve = value => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return
    // 将状态更改为成功
    this.status = FULFILLED
    // 保存成功之后的值
    this.value = value
    // this.successCallback && this.successCallback(this.value);
    while(this.successCallback.length) {
      this.successCallback.shift()()
    }
  }
  reject = value => {
    if (this.status !== PENDING) return
    // 将状态更改为失败
    this.status = REJECTED
    // 保存失败后的值
    this.reason = value
    // this.failCallback && this.failCallback()
    while(this.failCallback.length) {
      this.failCallback.shift()()
    }
  }
  then (successCallback, failCallback) {
    let promise2 = new MyPromise((resolve, reject ) => {
      // 判断状态
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = successCallback(this.value)
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值，直接调用resolve
            // 如果是promise对象 查看promise对象的返回结果
            // 再根据promise对象的返回结果 决定调用resolve 还是调用reject
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            return reject(e)
          }
        },0)
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason)
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值，直接调用resolve
            // 如果是promise对象 查看promise对象的返回结果
            // 再根据promise对象的返回结果 决定调用resolve 还是调用reject
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            return reject(e)
          }
        },0)
      } else {
        // 等待
        // 将成功回调和失败回调存储起来,异步时可用
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value)
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值，直接调用resolve
              // 如果是promise对象 查看promise对象的返回结果
              // 再根据promise对象的返回结果 决定调用resolve 还是调用reject
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              return reject(e)
            }
          },0)
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason)
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值，直接调用resolve
              // 如果是promise对象 查看promise对象的返回结果
              // 再根据promise对象的返回结果 决定调用resolve 还是调用reject
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              return reject(e)
            }
          },0) 
        });
      }
    })
    return promise2;
  }
}

function resolvePromise (promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) {
    // Promise 对象
    // x.then(value => resolve(value), value => reject(value))
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x)
  }
}

module.exports = MyPromise
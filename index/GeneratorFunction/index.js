// Generator函数，在function后面加一个星号
function * foo () {
  console.log('zce')
  return 100
}

const result = foo()
console.log(result)
// Object [Generator] {} // 打印了一个生成器对象，原型上有next()方法
console.log(result.next())
// zce
// { value: 100, done: true }

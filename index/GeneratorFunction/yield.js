function * foo () {
  console.log('111')
  yield 100
  console.log('222')
  yield 200
  console.log('333')
  yield 300
}
const gernerator = foo()
console.log(gernerator.next()) // 111 { value: 100, done: false }
console.log(gernerator.next()) // 222 { value: 200, done: false }
console.log(gernerator.next()) // 333{ value: 300, done: false }
console.log(gernerator.next()) // { value: undefined, done: true }
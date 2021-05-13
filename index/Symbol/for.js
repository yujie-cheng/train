// for方法维护了一个全局的注册表
const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2) // true
// 内置Symbol常量
let obj = {
  [Symbol.toStringTag]: 'XObject'
}
console.log(obj.toString()) // [object XObject]
obj = {
  [Symbol()]: 'symbol value',
  foo: 'normal value'
}
for (var key in obj) {
  console.log(key)
}
// 通过Object.keys也无法获取
console.log(Object.keys(obj)) // [ 'foo' ]
// 转换成JSON字符串，Symbol属性也会被忽略掉
console.log(JSON.stringify(obj)) // {"foo":"normal value"}
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol() ]
let obj2 = { foo: 123, zre: 234 }
for (let i of obj2) {
  console.log(i)
}
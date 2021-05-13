const s = Symbol()
console.log(s) // Symbol()
console.log(typeof s) // symbol
// 每个都是唯一的
console.log(Symbol() === Symbol()) // false
// 传入字符串作为描述文本，可用于区分Symbol
console.log(Symbol('foo')) // Symbol(foo)
// ES2015开始，可使用Symbol类型的值作为属性名，避免对象属性名产生的问题
const obj = { [Symbol()]: '123'}
obj[Symbol()] = '456'
console.log(obj) // { [Symbol()]: '123', [Symbol()]: '456' }
// 使用Symbol实现对象的私有成员
// a.js=============内部文件
const name = Symbol()
const person = {
  [name]: 'zce',
  say () {
    console.log(this[name])
  }
}
// b.js================外部文件，无法创建相同的Symbol，所以无法访问
person.say() // zce

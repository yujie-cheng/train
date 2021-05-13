// 案例一：发号器
function * createIdMaker () {
  let id = 1
  while(true) {
    yield id++
  }
}
const idMaker = createIdMaker()
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)
// 1 2 3 4 5

const obj = {
  store: ['foo', 'bar', 'baz'],
  time: ['12:00', '13:00', '14:00'],
  learn: ['语文', '数学', '英语'],
  [Symbol.iterator]: function * () {
    const all = [...this.store, ...this.time, ...this.learn]
    for (const item of all) {
      yield item
    }
  }
}
for (const item of obj) {
  console.log(item)
}
// foo bar baz 12:00 13:00 14:00 语文 数学 英语
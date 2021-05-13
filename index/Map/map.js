const m = new Map()
const tom = { name: 'tom' }
// 使用set方法存数据，此处的键可以是任意类型的数据
m.set(tom, 98)
console.log(m) // Map(1) { { name: 'tom' } => 98 }
// 用get方法获取数据
console.log(m.get(tom)) // 98
// has 方法判断某个键是否存在
// delete 方法删除
// clear方法清空
m.forEach((value,key) => {
  console.log(value, key) // 98 { name: 'tom' }
})
m.set('foo', '123')
m.set('bar', '345')
for (let item of m) {
  console.log(item) // [ { name: 'tom' }, 98 ]
                    // [ 'foo', '123' ]
                    // [ 'bar', '345' ]
}
const s = new Set()
// 通过add方法添加成员，会返回集合对象本身，所以可以链式调用，
// 如果在这个过程中添加了重复的值，那么这个值就会被忽略掉。
s.add(1).add(2).add(3).add(2)
console.log(s) // Set(3) { 1, 2, 3 }
// 可以使用forEach方法遍历
s.forEach( i => console.log(i)) // 1  2  3
// 或者使用for...of方法遍历每一个成员。
for (let i of s) {
  console.log(i)  // 1  2  3
}
// 使用size遍历整个集合的长度
console.log(s.size) // 3
// 使用has方法判断集合中是否有这个成员，返回boolean值
console.log(s.has(100)) // false 
// delete方法可以删除里面的某个值，返回boolean值
console.log(s.delete(3)) // true
// clear方法可清除集合里面的全部内容。
s.clear()
console.log(s) // Set(0) {}

// 最常用于数组去重
const arr = [1,2,1,3,4,1]
const result = new Set(arr)
console.log(result) // Set(4) { 1, 2, 3, 4 }
// 可以使用Array.from或者...方法把它转化成数组
console.log(Array.from(result)) // [ 1, 2, 3, 4 ] 
console.log([...result]) // [ 1, 2, 3, 4 ] 
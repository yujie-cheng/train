// obj实现iterable接口
const obj = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          value: 'zce',
          done: true
        }
      }
    }
  }
}
for (const item of obj) {
  console.log('循环体') // 没报错，但此处也没有被执行，因为next()中的done方法为true，表示循环已经结束。
}
// 在obj里面添加一些数组
const obj = {
  store: ['foo', 'bar', 'baz'],
  [Symbol.iterator]: function () {
    let index = 0
    const self = this
    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index ++
        return result
      }
    }
  }
}
for (const item of obj) {
  console.log('循环体', item)
}
// 循环体 foo
// 循环体 bar
// 循环体 baz
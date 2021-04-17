const { commonDeepClone } = require('../../index/deep_clone');

test('手写实现简易版深拷贝：obj2.a.b = 1', () => {
  const obj1 = {a: {b: 1},c: {d: Symbol(1)}};
  const obj2 = commonDeepClone(obj1);
  console.log(obj2);
  obj1.a.b = 2;
  obj1.c.d = Symbol(2);
  console.log(obj2, 'number 2');
  console.log(Object.getOwnPropertyNames(obj1.c), 'number 1');
  expect(obj2.a.b).toBe(1);
});
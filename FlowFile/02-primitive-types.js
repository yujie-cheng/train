/**
 * 原始类型
 * @flow
 */
const a: string = 'foo'
const b: number = Infinity // NaN //100
const c: boolean = false
const d: null = null
const e: void = undefined
const f: symbol = Symbol()
/**
 * 数组类型
 * Array：需要泛型参数去表示数组里面每一个元素的类型。用<>指定
 * 基本类型[]：基本数据类型加上方括号
 * [基本类型，基本类型...]：固定长度数组(元祖)
 */
const arr1: Array<number> = [123,23,34]
const arr2: number[] = [123,23,34]
const arr3: [string, number] = ['123', 234]
/**
 * 对象类型
 * 可以固定键名和值类型，在键名后添加问号让这个属性可选。
 * {[键类型]: 值类型}：同样的设置，可以添加多个键值对，初始化可以没值。
 */
const obj1: { foo: string, bar: number} = { foo: '123', bar: 123}
const obj2: { foo?: string, bar: number} = { bar: 123}
const obj3: {[string]: number} = {}
obj3.key1 = 1
obj3.key2 = 2
/**
 * 函数类型
 * 当函数的参数是回调函数时，可以指定传参类型和返回参数类型
 */
function func (callback: (string, number) => void) {
  callback('string', 100)
}
func((str, n) => {
  // str => string
  // n =>number
})
/**
 * 特殊类型
 * 字面量类型：限制变量必须是某个值或多个值之一
 * 通过type关键字去统一定义变量类型
 * maybe类型，类型前加一个问号，还可以接收null或undefined
 */
const aa: 'foo' = 'foo'
const bb: 'foo' | 'warning' | 'danger' = 'danger'
const cc: string | number = ''
type stringOrNumber = string | number
const dd: stringOrNumber = 'null'
const gender: ?number = null // nu mber | null | undefined
/*
*Mixed：接收任意类型的值，强类型--需要通过类型判断才能调用相应类型方法
*Any：接收任意类型的参数，弱类型--依旧会进行隐式转换以及变量的类型转换
*/
function passMixed (value: mixed) {
  if (typeof value === 'string') {
    value.substr(1)
  }
}
passMixed('string')
passMixed(100)
// .....
function passAny (value: any) {

}
passAny('string')
passAny(100)
/**
 * 运行环境API
 */
const element: HTMLElement | null = document.getElementById('app')
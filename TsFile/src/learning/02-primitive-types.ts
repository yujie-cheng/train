/**
 * 原始数据类型: 在非严格模式下默认允许为空：null或者undefined
 */
const a: string = 'foobar'
const b: number = 13 // NaN Infinity
const c: boolean = true // false
// const d: string = null
// const e: void = null // null，严格模式下只能为undefined
const f: null = null
const g: undefined = undefined
const h: symbol = Symbol() // 如果报错查看tsconfig配置文件target值是否为es2015之前的版本

// @flow
function sum (a: number, b: number) {
	return a + b
}
sum(100, 100)
// sum('100', '100')
// 函数参数
function square (n: number) {
  return n * n
}
// 函数返回值
function foo (): number {
  return 100
}
// 函数没有返回值的时候写void
function foo2(): void {

}
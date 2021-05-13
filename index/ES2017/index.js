const p1 = {
  firstName: 'lei',
  lastName: 'wang',
  get fullName () {
    return this.firstName+ ' ' + this.lastName
  }
}
console.log(p1.fullName) // lei wang
const p2 = Object.assign({}, p1)
p2.firstName = 'zce'
console.log(p2) // { firstName: 'zce', lastName: 'wang', fullName: 'lei wang' }
// 解决办法
const descroptors = Object.getOwnPropertyDescriptors(p1)
console.log(descroptors)
/**
 * {
  firstName: {
    value: 'lei',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'wang',
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {
    get: [Function: get fullName],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
 */
const p3 = Object.defineProperties({}, descroptors)
p3.firstName = 'zce'
console.log(p3.fullName) // zce wang
const books = {
  html: 5,
  css: 16,
  javascript: 128
}
for (const [name, count] of Object.entries(books)) {
  console.log(`${name.padEnd(16, '-')}|${count.toString().padStart(3,'0')}`)
}
/*
html------------|005
css-------------|016
javascript------|128
*/
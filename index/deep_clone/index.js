// 手写实现JSON.stingify的深拷贝
function commonDeepClone (obj) {
  let cloneObj = {};
  for (let index in obj) {
    let item = obj[index];
    if (item !== null && typeof item === "object") {
      cloneObj[index] = commonDeepClone(item)
    } else {
      cloneObj[index] = item
    }
  }
  return cloneObj
}

// 手写实现深度深拷贝
function deepClone (obj) {

}

module.exports = {
commonDeepClone,
deepClone
};
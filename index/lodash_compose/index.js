const flowRight = function (...args) {
  const arguments = args.reverse()
  return function (values) {
    return arguments[0]()
  }
}
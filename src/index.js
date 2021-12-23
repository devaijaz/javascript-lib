export const composeFn = function (...functions) {
  return function (initialValue = 0) {
    return [...functions].reduce(function (accumulator, nextFunc) {
      return accumulator.then(nextFunc);
    }, Promise.resolve(initialValue))
  }
}


var likaorou = {
  chunk: function (array, size = 1) {
    let result = []
    if (array.length < size) {
      result.push(array)
      return result
    } else {
      let count = []
      for (let i = 0; i <= array.length; i++) {
        if (count.length == size) {
          result.push(count)
          count = []
        } else {
          count.push(array[i])
        }
      }
      if (count.length !== 0) {
        result.push(count)
      }
      return result
    }
  },
  compact: function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 0 || array[i] == undefined || array[i] == '' || array[i] == false || array[i] == null || array[i] !== array[i]) {
        continue
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  drop: function (array, n = 1) {
    let result = []
    for (let i = n; i < array.length; i++) {
      result.push(array[i])
    }
    array = result
    return array
  },
  dropRight: function (array, n = 1) {
    let result = []
    for (let i = 0; i + n < array.length; i++) {
      result.push(array[i])
    }
    return array = result
  },
  dropRightWhile: function () { },
  dropWhile: function () { },
  fill: function () { },
  findIndex: function () { },
  findLastIndex: function () { },
  flatten: function () { },
  flattenDeep: function () { },
  flattenDepth: function () { },
  compact: function () { },
  compact: function () { },
  compact: function () { },
  compact: function () { },
  compact: function () { },
  compact: function () { },
  compact: function () { },
  compact: function () { },


}
var likaorou = {
  chunk: function (array, size = 1) {
    let result = []
    if (array.length < size) {
      result.push(array)
      return result
    } else {
      let count = []
      for (let i = 0; i < array.length; i++) {
        if (count.length == size) {
          result.push(count)
          count = []
          i--
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
  x: function () { },
  x: function () { },
  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  x: function () { },
  x: function () { },
  flatten: function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let len = array[i].length
        let count = array[i]
        for (let c = 0; c < len; c++) {
          result.push(count[c])
        }
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  flattenDeep: function (array) {
    let result = []
    let count = []
    let len = 0
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        len = array[i].length
        count = this.flattenDeep(array[i])
      } else {
        result.push(array[i])
      }
      if (result.length + len <= array.length + len) {
        let c = result.length
        for (let i = 0; i < count.length; i++) {
          result[i + c] = count[i]
        }
      }
    }
    return result
  },
  x: function (array, depth = 1) {
  },
  fromPairs: function (pairs) {
    let obj = {}
    for (let i = 0; i < pairs.length; i++) {
      if (pairs[i].length !== 0) {
        obj[pairs[i][0]] = pairs[i][1]
      }
    }
    return obj
  },
  head: function (array) {
    if (array.length !== 0) {
      return array[0]
    } else {
      return undefined
    }
  },
  indexOf: function (array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
  },
  initial: function (array) {
    if (array.length == 0) {
      return array
    } else {
      let result = []
      for (let i = 0; i < array.length - 1; i++) {
        result.push(array[i])
      }
      return result
    }
  },
  x: function () { },
  x: function () { },
  x: function () { },


}
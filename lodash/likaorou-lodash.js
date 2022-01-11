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
  flattenDeep: function (array) { //递归，
    let result = []
    let count = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        count = this.flattenDeep(array[i])
        if (result.length <= array.length) {
          let c = result.length
          for (let i = 0; i < count.length; i++) {
            result[i + c] = count[i]
          }
        }
      } else {
        result.push(array[i])
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
  join: function (array, separator = ',') {
    let str = ''
    for (let i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        str = str + array[i]
      } else {
        str = str + array[i] + separator
      }
    }
    return str
  },
  last: function (array) {
    return array[array.length - 1]
  },
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (value == array[i]) {
        return i
      }
    }
  },
  reverse: function (array) {
    let left = 0
    let right = array.length - 1
    while (left < right) {
      let count = array[left] + array[right]
      array[left] = count - array[left]
      array[right] = count - array[left]
      left++
      right--
    }
    return array
  },
  uniq: function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let count = 0
      for (let c = i; c >= 0; c--) {
        if (array[i] == array[c]) {
          count++
        }
      }
      if (count <= 1) {
        result.push(array[i])
      }
    }
    return result
  },
  x: function () { },
  without: function (array, values) {
    let count = []
    let result = []
    count.push(...arguments)
    for (let i = 0; i < array.length; i++) {
      if (array[i] in count) {
        continue
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  zip: function (arrays) {
    let count = []
    let result = []
    count.push(...arguments)  //展开运算符是对每一个元素操作，不能所有元素一次操作
    let min = count[0].length
    for (i in count) {        //for in 遍历的数组是序列号，所以最好遍历对象
      if (count[i].length < min) {
        min = i.length
      }
    }
    for (let i = 0; i < min; i++) {
      let count1 = []
      for (let c = 0; c < count.length; c++) {
        count1.push(count[c][i])
      }
      result.push(count1)
    }
    return result
  },
  x: function () { },
  x: function () { },

  x: function () { },

}
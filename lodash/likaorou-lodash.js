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
  difference: function (array, value) {  //优化
    let result = []
    let count = {}
    for (key in value) {
      count[value[key]] = 1
    }
    for (key in array) {
      if (!(array[key] in count)) {
        result.push(array[key])
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
        result.push(...array[i])
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
        count = flattenDeep(array[i])
        result.push(...count)
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  flattenDepth: function (array, depth = 1) {
    if (depth == 0) {
      return array
    }
    let result = []
    let count = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        count = flattenDepth(array[i], depth - 1)
        result.push(...count)
      } else {
        result.push(array[i])
      }
    }
    return result
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
  intersection: function (arrays) {   //优化
    let array = arguments[0]
    let value = arguments[1]
    let result = []
    let count = {}
    for (key in value) {
      count[value[key]] = 1
    }
    for (key in array) {
      if (array[key] in count) {
        result.push(array[key])
      }
    }
    return result
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
    return -1
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
  uniqBy: function (array, iteratee) {    //有问题
    if (typeof iteratee == 'function') {
      let result = [array[0]]
      for (let i = 1; i < array.length; i++) {
        let count = iteratee(array[i])
        for (let j = 0; j < result.length; j++) {
          if (count == iteratee(array[j])) {
            break
          } else if (j == result.length - 1) {
            result.push(array[i])
          }
        }
      }
      return result
    }
    if (typeof iteratee == 'string') {
      let result = [array[0]]
      for (let i = 1; i < array.length; i++) {
        let count = array[i][iteratee]
        for (let j = 0; j < result.length; j++) {
          if (count == array[j][iteratee]) {
            break
          } else if (j == result.length - 1) {
            result.push(array[i])
          }
        }
      }
      return result
    }
    return array[0]
  },
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
  x: function () { },
  forEach: function (collection, iteratee) { // 有问题
    if (Array.isArray(collection)) {
      /* for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i])
      } */
      return collection
    } else if (typeof collection == 'object') {
      /* for (key in collection) {
        iteratee(collection[key], key)
      } */
      return collection
    }
  },
  x: function () { },
  x: function () { },
  x: function () { },
  x: function () { },
  x: function () { },
  x: function () { },
  x: function () { },
  sample: function (collection) {
    if (Array.isArray(collection)) {
      let index = Math.floor(Math.random() * collection.length)
      return collection[index]
    } else if (typeof collection == 'object') {
      let count = []
      for (key in collection) {
        count.push([key, collection[key]])
      }
      let index = Math.floor(Math.random() * count.length)
      return count[index][1]
    }
  },
  isBoolean: function (value) {
    if (value === true || value === false) {
      return true
    } else if (typeof value == 'object') {
      if (value == true || value == false) {
        return true
      }
    }
    return false
  },
  size: function (collection) {
    if (typeof collection == 'string' || Array.isArray(collection)) {
      return collection.length
    } else if (typeof collection == 'object') {
      let count = []
      for (key in collection) {  //...展开运算符的运用。
        count.push(key)
      }
      return count.length
    }
  },
  isNaN: function (value) {
    if (value !== value) {
      return true
    }
    if (typeof value == 'object') {
      return value.toString() == '' + NaN
    }
    return false
  },
  isNumber: function (value) {
    if (typeof value == 'number') {
      return true
    }
    return false
  },
  toArray: function (value) {
    if (Array.isArray(value)) {
      return value
    }
    if (typeof value == 'object') {
      let result = []
      for (key in value) {
        result.push(value[key])
      }
      return result
    }
    if (typeof value == 'string') {
      let result = []
      for (let i = 0; i < value.length; i++) {
        result.push(value[i])
      }
      return result
    }
    return []
  },
  ceil: function (number, precision = 0) {
    if (precision == 0) {
      if (number % 1 !== 0) {
        return number - number % 1 + 1
      } else {
        return number
      }
    }
    if (precision > 0) {
      if (number % 1 !== 0) {
        let count = number % 1
        if (count < (1 / 10 ** precision)) {
          number = number + 1 / 10 ** precision - count
          return number
        } else if (count % (1 / 10 ** precision) == 0) {
          return number
        } else {
          number = number - count
          return count - count % (1 / 10 ** precision) + (1 / 10 ** precision) + number
        }
      } else {
        return number
      }
    }
    if (precision < 0) {
      precision = -precision
      if (number % (10 ** precision) !== 0) {
        return number - number % (10 ** precision) + (10 ** precision)
      } else {
        return number
      }
    }
  },
  max: function (array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
      }
    }
    return max
  },
  sum: function (array) {
    let result = 0
    for (i in array) {
      result += array[i]
    }
    return result
  },
  repeat: function (string = '', n = 1) {
    if (n < 1) {
      return ''
    } else {
      let result = ''
      while (n > 0) {
        result += string
        n--
        if (n == 0) {
          return result
        }
      }
    }
  },
  range: function ({ start = 0, end, step = 1 }) {  //形参实参问题  
    let count = []
    let result = []
    count.push(...arguments)
    if (count.length == 1) {
      start = 0
      end = count[0]
      step = 1
    }
    if (count.length == 2) {
      start = count[0]
      end = count[1]
      step = 1
    }
    if (count.length == 3) {
      start = count[0]
      end = count[1]
      step = count[2]
    }
    if (step < 0) {
      step = -step
    }
    while (start == end) {
      return result
    }
    while (start > end) {
      if (step == 0) {
        result.push(start)
        end--
      } else {
        result.push(start)
        start -= step
      }

    }
    while (start < end) {
      if (step == 0) {
        result.push(start)
        end--
      } else {
        result.push(start)
        start += step
      }
    }
    return result
  },
  concat: function (array, values) {
    let count = []
    let result = []
    count.push(...arguments)
    result.push(...array)
    for (var i = 1; i < count.length; i++) {
      if (Array.isArray(count[i])) {
        result.push(...count[i])
      } else {
        result.push(count[i])
      }
    }
    return result
  },
  x: function () { },
  x: function () { },
  x: function () { },


}
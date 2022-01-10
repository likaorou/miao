var likaorou = {
  chunk: function (array, size = 1) {
    let result = []
    if (array.length < size) {
      result.push(array)
      return result
    } else {
      let count = 0
      let countArray = []
      for (let i = 0; i <= array.length; i++) {
        if (count < size && i < array.length) {
          countArray.push(array[i])
          count++
        } else if (count == size) {
          result.push(countArray)
          countArray = []
          count = 0
          i--
        } else if (i == array.length) {
          result.push(countArray)
          countArray = []
          count = 0
        }
      }
      return result
    }
  },
}
function theBeatlesPlay(mArray, iArray) {
  var array = []
  
  var idx = 0
  for (idx = 0; idx < mArray; idx++) {
    array.push(`${mArray[idx]} plays ${iArray[idx]}`)
    return array
  }
}
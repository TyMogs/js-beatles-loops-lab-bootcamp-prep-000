function theBeatlesPlay(mArray, iArray) {
  var array = []
  
  for (var idx = 0; idx < mArray; idx++) {
    array.push(`${mArray[idx]} plays ${iArray[idx]}`)
  }
  return array
}
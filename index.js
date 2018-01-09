function theBeatlesPlay(musicians, instruments) {
  var whatTheyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    whatTheyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whatTheyPlay;
}

function johnLennonFacts(facts) {
  var result = [];
  var factsNew = []
  var i = 0;
  while (i < facts.length) {
    result.push(`${facts[i]}!!!`)
    i++
  }
  return factsNew
}
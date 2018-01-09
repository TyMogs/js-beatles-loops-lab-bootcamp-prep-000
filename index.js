function theBeatlesPlay(musicians, instruments) {
  var whatTheyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    whatTheyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whatTheyPlay;
}

function johnLennonFacts(facts) {
  var factsNew = []
  var i = 0;
  while (i < facts.length) {
    factsNew.push(`${facts[i]}!!!`)
    i++
  }
  return factsNew
}

function iLoveTheBeatles(n) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    n++
  } while ()
}
function theBeatlesPlay(musicians, instruments) {
  var whatTheyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    whatTheyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whatTheyPlay;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i].push("!!!")
    i++
  }
  return facts
}
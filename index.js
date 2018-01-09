function theBeatlesPlay(musicians, instruments) {
  var whatTheyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    whatTheyPlay.push(`${musicians[i]} plays ${iinstrument[i]}`)
  }
  return whatTheyPlay;
}

/* +'use strict';
 +
 +function theBeatlesPlay(musicians, instruments) {
 +  var phrases = [];
 +  for (var i = 0; i < musicians.length; i++) {
 +    phrases.push(musicians[i] + " plays " + instruments[i]);
 +  }
 +  return phrases;
 +} */
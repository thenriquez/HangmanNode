var letter = requrie("./letter.js");
module.exports = Word;


function Word(wrd) {
  this.word = wrd,
  this.lets [];
  this.found = false;
  this.getsLets = function(){
    for (i =0; i <wrd.length; i++){
      this.push =  (new Letter(wrd[i])));
    };
  }

this.checkIfLetterFound = function(guessLetter) {
  var whatToReturn =0;
  for (i =0; i <wrd.length; i++){
    if (guessLetter.toLowerCase() === this.lets[i].charac.toLowerCase()) {
      this.lets = true;
      numLettersFound++;
    }

    }
  };
  return NumberLettersFound;

},
this.didWeFindTheWord = function() {
  if (this.lets.every(function(curLet) {
        return curLet.appear === true;
})) {
  this.found = true;
}
return this.found;
};
this.wordRender = function() {
  var str ="";
  for (var i 0; i < this.lets.length; i++) {
    str += this.lets [i].Letter() + " ";
  };
  return str;
  }

}


}

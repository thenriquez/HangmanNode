var prompt = requrie("promt");
var Word = requrie("./word.js");
var hangedMan = requrie("./hangedmwn.js");

promt.start();
var game = {
  wordBank: ["Mustang", "Camaro"
    "Gtr", "StingRay", "Viper", "Charger", "Telsa" , "Rcf" , ""
  ]
  guessRemaining: 7,
  currentWrd: null,
  startGame: function(wrd)
  {
    var wrdIdx = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = new Word(this.wordBank[wrdIdx]);
    this.currentWrd.getsLets();
    console.log(this.currentWrd.wordRender());
    this.keepPromptingUser();

  },
  keepPromptingUser: function()
  {
    var self = this;
    promt.get(['guessLetter'], function(err, result)
      {
        if (result.guessLetter.length > 1)
        {
          console.log("You Only get to pick one letter!")
          self.keepPromptingUser();
        }
        else
        {
          console.log(hangedMan[self.guessRemaining]);
          console.log("you guess right!!")
          if (self.currentWrd.didWeFindTheWord() === true)
          {
            console.log(hangedMan[self.guessRemaining]);
            console.log("You win!")
            console.log("The word was" + self.currentWrd.word);
            return 1;

          }
        }
        console.log(hangedMan[self.guessRemaining]);
        console.log("Guesses remaining: " + self.guessRemaining);
        console.log(self.currentWrd.wordRender());
        if (self.guessRemaining > 0 && self.currentWrd.found === false)
        {
          self.keepPromptingUser();
        }
        else if (self.guessRemaining === 0)
        {
          console.log("Game Over.");
          console.log("The word was " + self.currentWrd.word);
        }
        else
        {
          console.log(self.currentWrd.wordRender());


        }
      }
    });
}
};

//starting the game initially
game.startGame();

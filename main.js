var words = [
  'car',
  'air',
  'fish',
  'life',
  'candy',
  'firework',
  'television',
  'basketball',
  'football',
  'watercooler',
  'computer',
  'hangman',
  'elephant',
  'mathematic',
  'radio',
  'keyboard',
];
var word = words[Math.floor(Math.random() * words.length)];
var answerarray = [];
for (var i = 0; i < word.length; i++) {
  answerarray[i] = '_';
}
var remainingletters = word.length;

var remaininglives = 6;

while (remainingletters > 0) {
  if (remaininglives < 1) {
    alert('Out of lives, you lose');
  } else {
    alert('Remaining lives: ' + remaininglives);
    alert(answerarray.join(' '));
    var guess = prompt('Guess a letter!');
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert('Please enter a single letter.');
    } else {
      var guessedRightOnce = false;

      for (var j = 0; j < word.length; j++) {
        if (answerarray[j] === '_') {
          if (word[j] === guess) {
            guessedRightOnce = true;
            answerarray[j] = guess;
            remainingletters--;
          }
        }
      }

      if (!guessedRightOnce) {
        remaininglives--;
      }
    }
  }
}
alert(answerarray.join(' '));
alert('Good job, the answer was ' + word);

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

var imgcounter = 0;

document.getElementById('answer').innerHTML = answerarray.join(' ');

document.getElementById('remaininglives').innerHTML =
  'Remaining lives: ' + remaininglives;

document.getElementById('submitbtn').addEventListener('click', function () {
  if (remainingletters > 0) {
    if (remaininglives - 1 < 1) {
      document.getElementById('losemessage').innerHTML = 'You lose';
    } else {
      document.getElementById('remaininglives').innerHTML =
        'Remaining lives: ' + remaininglives;
      document.getElementById('answer').innerHTML = answerarray.join(' ');
      var guess = document.getElementById('guessinput').value;

      var guessedRightOnce = false;

      for (var j = 0; j < word.length; j++) {
        if (answerarray[j] === '_') {
          if (word[j] === guess) {
            guessedRightOnce = true;
            answerarray[j] = guess;
            remainingletters--;
            document.getElementById('answer').innerHTML = answerarray.join(' ');
            if (remainingletters === 0) {
              document.getElementById('losemessage').innerHTML =
                'Good Job! The answer was: ' + word;
            }
          }
        }
      }
    }
  }

  if (!guessedRightOnce && remaininglives !== 0) {
    remaininglives--;

    document.getElementById('remaininglives').innerHTML =
      'Remaining lives: ' + remaininglives;

    document
      .getElementById('picturediv')
      .children.item(imgcounter).style.display = 'block';

    if (imgcounter > 0) {
      document
        .getElementById('picturediv')
        .children.item(imgcounter - 1).style.display = 'none';
    }

    imgcounter++;
  }
});

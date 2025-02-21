'use strict';
let secretNo = getRandom();
let score = 20;
let hightScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNo) {
    displaySuccess();
  } else if (guess > secretNo) {
    checkScore('📈 Too high!');
  } else if (guess < secretNo) {
    checkScore('📉 Too low!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNo = getRandom();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

function checkScore(messageToDisplay) {
  if (score > 0) {
    displayMessage(messageToDisplay);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('🤯 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
}

const displaySuccess = function () {
  displayMessage('🥳 Correct Number!');
  document.querySelector('.number').textContent = secretNo;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  if (score > hightScore) {
    hightScore = score;
    document.querySelector('.highscore').textContent = hightScore;
  }
};

function getRandom() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (messageToDisp) {
  document.querySelector('.message').textContent = messageToDisp;
};

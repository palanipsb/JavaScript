function ageInDays(){
    var userYear = prompt("What is your year of birth?");
    var ageInDays = (2021-userYear)*365;
    var h1 = document.createElement("h1");
    var textToDisp = document.createTextNode("Your are "+ageInDays+" days old.");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(textToDisp);
    document.getElementById("flex-box-result").appendChild(h1);
}
function reset(){
    document.getElementById("ageInDays").remove();
}
function createImage(){
    var img = document.createElement("img");
    img.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    var div=document.getElementById("flex-getn-cat")
    div.appendChild(img);
}
function rpsGame(choice){
    var humanChoice, botChoice;
    humanChoice = choice.id;
    botChoice=getBotChoice();
    var winnerTo = decideWinner(humanChoice,botChoice);
    var message = getMessage(winnerTo);
    displayResult(humanChoice,botChoice,message);
}

function getBotChoice(){
    var choices = {0:'rock', 1:'paper', 2:'scissors'};
    var rndChoice = Math.floor(Math.random()*3);
    return choices[rndChoice];
}
function decideWinner(humanChoice,botChoice){
    var dbData = {
        'rock' : {'scissors':1, 'rock':0.5, 'paper':0},
        'paper' : {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors' : {'paper':1, 'scissors':0.5, 'rock':0}
        }
    var humScore = dbData[humanChoice][botChoice];
    var botScore = dbData[botChoice][humanChoice];
    return [humScore];
}
function getMessage(winnerMsg){
    var msg = {1:'you won!',0.5:'Tie',0:'you lost!'};
    var msgColor = {1:'green',0.5:'yellow',0:'red'};
    return [msg[winnerMsg],msgColor[winnerMsg]]
}
function displayResult(humanChoice,botChoice,message){
    var imgDatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var msgDiv = document.createElement("div");

    humDiv.innerHTML = "<img src='"+imgDatabase[humanChoice]+"' height='150' width='150'>";
    msgDiv.innerHTML = "<h1 style = 'color:"+message[1]+"'>"+message[0]+""
    botDiv.innerHTML = "<img src='"+imgDatabase[botChoice]+"' height='150' width='150'>";
    document.getElementById('flex-gen-game').appendChild(humDiv);
    document.getElementById('flex-gen-game').appendChild(msgDiv);
    document.getElementById('flex-gen-game').appendChild(botDiv);
}

function changeColor(chosenOption){
    if(chosenOption.value==='red'){
        changeToRed();
    }else if(chosenOption.value==='green'){
        changeToGreen();
    }else if(chosenOption.value==='random'){
        changeToRandom();
    }
}
function changeToRed(){
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].classList.remove(choiceButtons[i].classList[1]);
        choiceButtons[i].classList.add('btn-danger');     
    }
}
function changeToGreen(){
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].classList.remove(choiceButtons[i].classList[1]);
        choiceButtons[i].classList.add('btn-success');     
    }
}
function changeToRandom(){
    var lstOfchoiceButtonss = ['btn-primary','btn-warning','btn-danger','btn-success'];
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].classList.remove(choiceButtons[i].classList[1]);
        choiceButtons[i].classList.add(lstOfchoiceButtonss[Math.floor(Math.random()*3)])
    }
}
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackStand);
document.querySelector('#blackjack-deal-bottun').addEventListener('click',blackjackDeal);
var blackjackGame = {
    'you': {'scorespan': 'yourScore', 'div':'#yourBox','score':0},
    'dealer': {'scorespan': 'dealerScore', 'div':'#dealerBox','score':0},
    'card': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
    'win':0,
    'draw':0,
    'loss':0,
    'isHit':false,
    'isStand':false,
    'turnsOver':false,
}

const YOU=blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const cardSound = new Audio('sound/swish.m4a');
const winSound = new Audio('sound/cash.mp3');
const lossSound = new Audio('sound/aww.mp3');
function blackjackHit(){
    if(!blackjackGame['isStand'] && YOU['score']<=21){
        blackjackGame['isHit']=true;
        let card = getRandomCard();
        cardsDisplay(card,YOU);
        updateScore(card,YOU);
        showresult(YOU);
    }
}
function blackjackStand(){
    if(blackjackGame['isHit'] && DEALER['score']<=21){
        while(DEALER['score']<=15){
            blackjackGame['isStand'] = true;
            let card = getRandomCard();
            cardsDisplay(card,DEALER);
            updateScore(card,DEALER);
            showresult(DEALER);
        }
        if(DEALER['score']>15){
            blackjackGame['turnsOver'] = true;
            var decideWin = decideWinnerBlackjack();
            displayResultMessage(decideWin);
        }
    }
}
function blackjackDeal(){
    if(blackjackGame['turnsOver']){
        yourBoxImages = document.getElementById('yourBox').querySelectorAll('img');
        dealerBoxImages = document.getElementById('dealerBox').querySelectorAll('img');
        for(let i=0; i<yourBoxImages.length;i++){
            yourBoxImages[i].remove();
        }
        for(let i=0; i<dealerBoxImages.length;i++){
            dealerBoxImages[i].remove();
        }
        YOU['score']=0;
        DEALER['score']=0;
        document.getElementById('yourScore').textContent=0;
        document.getElementById('dealerScore').textContent=0;
        document.getElementById('yourScore').style.color='white'
        document.getElementById('dealerScore').style.color='white'
        document.getElementById('blackjack-result-disp').textContent="Let's Play"
        document.getElementById('blackjack-result-disp').style.color='black'
        blackjackGame['turnsOver']=false;
        blackjackGame['isStand']=false;
        blackjackGame['isHit']=false;
    }
}
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13);
    return blackjackGame['card'][randomNumber];
}
function updateScore(card,activePlayer){
    if(card==='A'){
        if(activePlayer['score']+blackjackGame['cardMap'][card][1]<21){
            return activePlayer['score']+=blackjackGame['cardMap'][card][1];
        }else{
            return activePlayer['score']+=blackjackGame['cardMap'][card][0];
        }
    }else{
        return activePlayer['score']+=blackjackGame['cardMap'][card];
    }    
}
function showresult(activePlayer){
    if(activePlayer['score']>21){
        document.getElementById(activePlayer['scorespan']).textContent='BUST!'
        document.getElementById(activePlayer['scorespan']).style.color='RED'
    }else{
        document.getElementById(activePlayer['scorespan']).innerHTML=activePlayer['score'];
    }    
}
function cardsDisplay(card,activePlayer){
    if(activePlayer['score']<21){
        let blackjackImage = document.createElement('img');
        blackjackImage.src = `images/${card}.jpg`;
        document.querySelector(activePlayer['div']).appendChild(blackjackImage);
        cardSound.play();
    }
}
function decideWinnerBlackjack(){
    console.log('decide winner your score: '+YOU['score']);
    console.log('decide winner Dealer score: '+DEALER['score']); 
    let winner;
    if(YOU['score']<=21){
        if(DEALER['score']>21 || YOU['score']>DEALER['score']){
            winner=YOU;
            blackjackGame['win']++;
        }else if(YOU['score']<DEALER['score']){
            winner=DEALER;
            blackjackGame['loss']++;
        }else if(YOU['score']===DEALER['score']){
            winner='Draw';
            blackjackGame['draw']++;
        }
    }else if(DEALER['score']<=21 && YOU['score']>21){
        winner=DEALER;
        blackjackGame['loss']++;
    }else if(DEALER['score']>21 && YOU['score']>21){
        winner='Draw';
        blackjackGame['draw']++;
    }
    return winner;
}
function displayResultMessage(decideWin){
    let message, messageColor;
    if(decideWin==='Draw'){
        document.getElementById('draw').textContent=blackjackGame['draw'];
        message = 'You drew!';
        messageColor='black';
    }else if(decideWin===YOU){
        document.getElementById('win').textContent=blackjackGame['win'];
        message = 'You won!';
        messageColor='green';
        winSound.play();
    }else if(decideWin===DEALER){
        document.getElementById('loss').textContent=blackjackGame['loss'];
        message = 'You lost!';
        messageColor='red';
        lossSound.play();
    }
    document.getElementById('blackjack-result-disp').textContent=message;
    document.getElementById('blackjack-result-disp').style.color =messageColor;
    console.log('final your score: '+YOU['score']);
    console.log('final Dealer score: '+DEALER['score']);    
}

function random(max){
    var num = Math.floor(Math.random() * max);
    var check = 0;
    for(var i = 0; i < blacklist.length; i++){
        if(num == blacklist[i]){
            check = 1;
        }
    }
    if(check != 1){
        blacklist.push(num);
        return num;
    }else{
        random(max);
    }
}
function getVal(cardVal){
    if(cardVal[0] > 0 && cardVal[0] < 10){
        return parseInt(cardVal[0]);
    }
    if(cardVal[0] == 0){
        return 10;
    }
    if(cardVal[0] == "j" || cardVal[0] == "q" || cardVal[0] == "k"){
        return 10;
    }
    if(cardVal[0] == "a"){
        return 11;
    }
}
function hit(){
    //hit
    randomVal = random(cards.length);
    playerHand += getVal(cards[randomVal]);
    displayCard("player", cards[randomVal]);
    update();
    if(playerHand > 21){
        endCondition();
    }
}
function stand(){
    hitB.disabled = true;
    standB.disabled = true;
    if (houseHand < 18 || houseHand < playerHand) {
        setTimeout(function () {
            randomVal = random(cards.length);
            houseHand += getVal(cards[randomVal]);
            displayCard("house", cards[randomVal]);
            update();
            stand();
        }, 1000);
    }else{
        endCondition();
    }
}
function endCondition(){
    //lose
    if(houseHand > playerHand && houseHand < 22){
        lose();
    }
    if(playerHand > 21){
        lose();
    }

    //win
    if(playerHand > houseHand && playerHand < 22){
        win();
    }
    if(houseHand > 21){
        win();
    }

    //push
    if(playerHand == houseHand){
        push();
    }
}
function update(){
    h3HouseScore.textContent = houseHand;
    h3PlayerScore.textContent = playerHand;
}
function lose(){
    hitB.disabled = true;
    standB.disabled = true;
    restartB.style.display = "block";
    message.textContent = "YOU LOSE!";
    message.style.color = "red";
}
function win(){
    hitB.disabled = true;
    standB.disabled = true;
    restartB.style.display = "block";
    message.textContent = "YOU WIN!";
    message.style.color = "green";
}
function push(){
    hitB.disabled = true;
    standB.disabled = true;
    restartB.style.display = "block";
    message.textContent = "Tie";
    message.style.color = "blue";
}
function displayCard(player, card) {
    var cardImage = document.createElement("img");
    cardImage.src = cardImgs[card];
    cardImage.style.width = "100px";
    var container = document.querySelector("." + player + "Cards");
    container.appendChild(cardImage);
}
function restart(){

}
const cardImgs = {
    "2s": "imgs/cards/2_of_spades.png",
    "3s": "imgs/cards/3_of_spades.png",
    "4s": "imgs/cards/4_of_spades.png",
    "5s": "imgs/cards/5_of_spades.png",
    "6s": "imgs/cards/6_of_spades.png",
    "7s": "imgs/cards/7_of_spades.png",
    "8s": "imgs/cards/8_of_spades.png",
    "9s": "imgs/cards/9_of_spades.png",
    "0s": "imgs/cards/10_of_spades.png",
    "js": "imgs/cards/jack_of_spades2.png",
    "qs": "imgs/cards/queen_of_spades2.png",
    "ks": "imgs/cards/king_of_spades2.png",
    "as": "imgs/cards/ace_of_spades.png",
    "2c": "imgs/cards/2_of_clubs.png",
    "3c": "imgs/cards/3_of_clubs.png",
    "4c": "imgs/cards/4_of_clubs.png",
    "5c": "imgs/cards/5_of_clubs.png",
    "6c": "imgs/cards/6_of_clubs.png",
    "7c": "imgs/cards/7_of_clubs.png",
    "8c": "imgs/cards/8_of_clubs.png",
    "9c": "imgs/cards/9_of_clubs.png",
    "0c": "imgs/cards/10_of_clubs.png",
    "jc": "imgs/cards/jack_of_clubs2.png",
    "qc": "imgs/cards/queen_of_clubs2.png",
    "kc": "imgs/cards/king_of_clubs2.png",
    "ac": "imgs/cards/ace_of_clubs.png",
    "2h": "imgs/cards/2_of_hearts.png",
    "3h": "imgs/cards/3_of_hearts.png",
    "4h": "imgs/cards/4_of_hearts.png",
    "5h": "imgs/cards/5_of_hearts.png",
    "6h": "imgs/cards/6_of_hearts.png",
    "7h": "imgs/cards/7_of_hearts.png",
    "8h": "imgs/cards/8_of_hearts.png",
    "9h": "imgs/cards/9_of_hearts.png",
    "0h": "imgs/cards/10_of_hearts.png",
    "jh": "imgs/cards/jack_of_hearts2.png",
    "qh": "imgs/cards/queen_of_hearts2.png",
    "kh": "imgs/cards/king_of_hearts2.png",
    "ah": "imgs/cards/ace_of_hearts.png",
    "2d": "imgs/cards/2_of_diamonds.png",
    "3d": "imgs/cards/3_of_diamonds.png",
    "4d": "imgs/cards/4_of_diamonds.png",
    "5d": "imgs/cards/5_of_diamonds.png",
    "6d": "imgs/cards/6_of_diamonds.png",
    "7d": "imgs/cards/7_of_diamonds.png",
    "8d": "imgs/cards/8_of_diamonds.png",
    "9d": "imgs/cards/9_of_diamonds.png",
    "0d": "imgs/cards/10_of_diamonds.png",
    "jd": "imgs/cards/jack_of_diamonds2.png",
    "qd": "imgs/cards/queen_of_diamonds2.png",
    "kd": "imgs/cards/king_of_diamonds2.png",
    "ad": "imgs/cards/ace_of_diamonds.png",
}
const cards = 
["2s","3s","4s"
,"5s","6s","7s"
,"8s","9s","0s"
,"js","qs","ks"
,"as","2c","3c"
,"4c","5c","6c"
,"7c","8c","9c"
,"0c","jc","qc"
,"kc","ac","2h"
,"3h","4h","5h"
,"6h","7h","8h"
,"9h","0h","jh"
,"qh","kh","ah"
,"2d","3d","4d"
,"5d","6d","7d"
,"8d","9d","0d"
,"jd","qd","kd"
,"ad"];

var blacklist = [];
var h3PlayerScore = document.getElementById("playerScore");
var h3HouseScore = document.getElementById("houseScore");
var hitB = document.getElementById("hit");
var standB = document.getElementById("stand");
var restartB = document.getElementById("restart");
var message = document.getElementById("condition");

var houseHand = 0;
var playerHand = 0;

function start(){
    hitB.disabled = false;
    standB.disabled = false;
    restartB.style.display = "none";
    houseHand = 0;
    playerHand = 0;
    document.querySelector(".houseCards").innerHTML = "";
    document.querySelector(".playerCards").innerHTML = "";
    message.textContent = "";
    blacklist = [];

    var randomVal = random(cards.length);
    houseHand += getVal(cards[randomVal]);
    h3HouseScore.textContent = houseHand;
    displayCard("house", cards[randomVal]);
    randomVal = random(cards.length);
    playerHand += getVal(cards[randomVal]);
    h3PlayerScore.textContent = playerHand;
    displayCard("player", cards[randomVal]);
    randomVal = random(cards.length);
    playerHand += getVal(cards[randomVal]);
    h3PlayerScore.textContent = playerHand;
    displayCard("player", cards[randomVal]);
    update();
}
start();
window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 0) {
        nav.classList.add('addBackground');
    } else {
        nav.classList.remove('addBackground');
    }
});
var filled = document.querySelector('.filled');

function updateBar(){
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(updateBar);
}
updateBar();



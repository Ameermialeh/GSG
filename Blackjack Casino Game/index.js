let msg = document.getElementById("msg");
let sumTxt = document.getElementById("sum");
let cardsTxt = document.getElementById("cards");
let playerInfo = document.getElementById("player");
let isAlive = true;
let cards = [];
let sum = 0;

let player = {
  name: "Per",
  chips: "100",
};
playerInfo.innerText = player.name + ": $" + player.chips;

function startGame() {
  cards = [];
  isAlive = true;
  sum = 0;
  let card1 = randomNum();
  let card2 = randomNum();
  sum += card1;
  sum += card2;
  cards.push(card1);
  cards.push(card2);
  setMsg(sum);
  cardsTxt.innerText = "Cards: " + card1 + " " + card2;
  sumTxt.innerText = "Sum: " + sum;
}

function newCard() {
  if (isAlive) {
    let new_card = randomNum();
    sum += new_card;
    cards.push(new_card);
    setMsg(sum);
    cardsTxt.innerText = cardsTxt.innerText + " " + new_card;
    sumTxt.innerText = "Sum: " + sum;
  }
}
function setMsg(sum1) {
  if (sum1 < 21) {
    msg.innerText = "Do you want to draw a new card!";
    return;
  } else if (sum1 === 21) {
    isAlive = false;
    msg.innerText = "You've got BlackJack!";
    return;
  } else {
    isAlive = false;
    msg.innerText = "You're out of game!";
    return;
  }
}

function randomNum() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum == 1) {
    return 11;
  } else {
    return randomNum;
  }
}

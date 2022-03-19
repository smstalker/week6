// Assignment for week 6 of JavaScript to create an automated version of the classic card game WAR
// establish two arrays one for the card suits and one for the rank or number on the card called face. 

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const face = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
let fullDeck = [];
let shuffledDeck = [];
let p1score = 0;
let p2score = 0;
let hand1 = [];
let hand2 = [];


//Card class with suit, face and value constructors. 
//Value is assigned so that cards can be compared later in the game. 
class Card {
    constructor(a, b, c){
        this.suit = a
        this.face = b
        this.value = c 
    }
}

//1: Create new deck with function 
function createNewDeck(){
  suits.forEach((suit) =>
    face.forEach((face, index) => {
      fullDeck.push(new Card(suit, face, index++));
    })
  );
}

createNewDeck();

// first attempt at building a deck function
// for (i = 0, i; i < suits.length; i++){
//     for (j = 0; j< face.length; j++){
//          testCard = new Card( suits[i], face[j], j+1);
//          fullDeck.push(testCard);
         
// //         //console.log  (fullDeck);
//   }
// }
  


// 2: Randomize deck first (use sort method)
shuffledDeck = fullDeck
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

// Check it
// console.log(shuffledDeck);
// console.log (fullDeck);

//3: use slice to split the deck into 2 hands
hand1 = shuffledDeck.slice(0, 26);
hand2 = shuffledDeck.slice(26);

//Check it
console.log ('Player 1 hand:')
console.log (hand1);
console.log ('Player 2 hand:')
console.log (hand2); 


//4: for loop with if else if statement to compare cards and award points. 

function playingTheGame(){
for (i = 0; i < hand1.length; i++) {
   console.log (`Player 1 card: ${hand1[i].face} of ${hand1[i].suit}  Player 2 card: ${hand2[i].face} of ${hand2[i].suit}`);

    if (hand1[i].value > hand2[i].value){
        p1score += 1
        console.log (`Player 1 wins and has ${p1score} points`);
      } else if (hand1[i].value < hand2[i].value) { 
        p2score +=1
        console.log (`Player 2 wins and has ${p2score} points`);
      } else  {
        console.log (`Tie Player 1 has ${p1score} points Player 2 has ${p2score} points`);
      }
    }
  }
  playingTheGame();

  //5: Declare winner

  if (p1score>p2score){
    console.log(`Player 1 is the winner!`);
    } else if (p1score<p2score){
    console.log(`Player 2 is the winner!`);
    } else {console.log `Score is tied! No one wins!`}
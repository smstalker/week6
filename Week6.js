// Assignment for week 6 of JavaScript t0 create an automated version of the classic card game WAR
// establish two arrays one for the card suits and one for the rank or number on the card. 

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];


//Deck class with  build and shuffle functions
class Deck {
    constructor() {
        this.deck = [];
        
    }
// this will create the deck by iterating through the array and creating a new array with a suit and rank assigned to each card.
// it also adds a value parameter which is how the cards will be compared to each other to determine who wins. 
    buildDeck() {
        
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < rank.length; j++) {
             this.deck.push({
                suits: suits[i],
                rank: rank[j],
                value: j+1
             });
            }
        }
        return this.deck; 
    }
// this function shuffles the cards to return a new array of cards in a random order
    shuffle() {
        let count = this.deck.length;
            while(count) {
                this.deck.push(this.deck.splice(Math.floor(Math.random() * count), 1)[0]);
                count -= 1;
        }
        return this.deck; 
    }
     
}


const fullDeck = new Deck(); 

// creates variable of fullDeck that can be built and shuffled. 
fullDeck.buildDeck();

shuffledDeck = fullDeck.shuffle(); 

console.log(shuffledDeck); 

// slice into 2 decks
let hand1 = shuffledDeck.slice(0, 26);
let hand2 = shuffledDeck.slice(-26);
console.log (hand1);
console.log(hand2); 
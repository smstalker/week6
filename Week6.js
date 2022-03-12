const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

class Deck {
    constructor() {
        this.deck = [];
        
    }

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

fullDeck.buildDeck();

//shuffle deck
fullDeck.shuffle(); 


//check to see if all cards are in the deck
console.log(fullDeck); 



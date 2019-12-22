let deck = new Array();
const suits = ["S","H","C","D"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

let playerOneCalc = 0;
let playerTwoCalc = 0;
let handP1 = [];
let handP2 = [];
let handP1Card = [];
let handP1Suit = [];
let handP2Card = [];
let handP2Suit = [];
let controldraw = 4;


function getDeck() {
  
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      Hcard = values[x];
      Scard = suits[i];
		  deck.push(values[x]+suits[i]);
		}
  }

  for (let index = 0; index < 5; index++) {
    playerOneCalc = Math.trunc(Math.random() * deck.length);
    handP1.push(deck[playerOneCalc]);
    handP1Card.push(cardValue(deck[playerOneCalc].charAt(0)));
    handP1Suit.push(deck[playerOneCalc].charAt(1));
    deck.splice(playerOneCalc,1);
  
    playerTwoCalc = Math.trunc(Math.random() * deck.length);
    handP2.push(deck[playerTwoCalc]);
    handP2Card.push(cardValue(deck[playerTwoCalc].charAt(0)));
    handP2Suit.push(deck[playerTwoCalc].charAt(1));
    deck.splice(playerTwoCalc,1);
  }

  handP1Card = handP1Card.sort((a,b)=>a-b);
  handP2Card = handP2Card.sort((a,b)=>a-b);

  if (isFlush(handP1Suit, handP1Card) >= 9000 || isFlush(handP2Suit, handP2Card) >= 9000) {

    if (isFlush(handP1Suit, handP1Card) > isFlush(handP2Suit, handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Colored Straigth");
    } else if (isFlush(handP2Suit, handP2Card) > isFlush(handP1Suit, handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Colored Straigth");
    }
  
  } else if (isPoker(handP1Card) >= 8000 || isPoker(handP2Card) >= 8000) {

    if (isPoker(handP1Card) > isPoker(handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Poker");
    } else if (isPoker(handP2Card) > isPoker(handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Poker");
    }

  } else if (isFull(handP1Card) >= 7000 || isFull(handP2Card) >= 7000) {
     
    if (isFull(handP1Card) > isFull(handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Full House");
    } else if (isFull(handP2Card) > isFull(handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Full House");
    }
    
  } else if (isFlush(handP1Suit, handP1Card) >= 6000 || isFlush(handP2Suit, handP2Card) >= 6000) {

    if (isFlush(handP1Suit, handP1Card) > isFlush(handP2Suit, handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Flush");
    } else if (isFlush(handP2Suit, handP2Card) > isFlush(handP1Suit, handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Flush");
    }

  } else if (isStraight(handP1Card) >= 5000 || isStraight(handP2Card) >= 5000) {
    
    if (isStraight(handP1Card) > isStraight(handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Straight");
    } else if (isStraight(handP2Card) > isStraight(handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Straight");
    }

  } else if (isThree(handP1Card) >= 4000 || isThree(handP2Card) >= 4000) {
    
    if (isThree(handP1Card) > isThree(handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Three of a Kind");
    } else if (isThree(handP2Card) > isThree(handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Three of a Kind");
    }
  
  } else if (isDoublePair(handP1Card) >= 3000 || isDoublePair(handP2Card) >= 3000) {

    if (isDoublePair(handP1Card) > isDoublePair(handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Double Pair");
    } else if (isDoublePair(handP2Card) > isDoublePair(handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Double Pair");
    } else if (isDoublePair(handP1Card) == isDoublePair(handP2Card)) {

      for (let i = 4; i > -1 && handP1Card[i] == handP2Card[i]; i--) {
        controldraw--;        
      }

      if (handP1Card[controldraw] > handP2Card[controldraw]) {
        return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Double Pair");
      } else if (handP2Card[controldraw] > handP1Card[controldraw]) {
        return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Double Pair");
      } else if (handP1Card[controldraw] == handP2Card[controldraw]) {
        return ("Empate con las manos " + handP1 + " y " + handP2 + ". Jugada: Double Pair");
      }
    }

  } else if (isPair(handP1Card) >= 2000 || isPair(handP2Card) >= 2000) {

    if (isPair(handP1Card) > isPair(handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Pair");
    } else if (isPair(handP2Card) > isPair(handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Pair");
    } else if (isPair(handP1Card) == isPair(handP2Card)) {

      for (let i = 4; i > -1 && handP1Card[i] == handP2Card[i]; i--) {
        controldraw--;        
      }

      if (handP1Card[controldraw] > handP2Card[controldraw]) {
        return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: Pair");
      } else if (handP2Card[controldraw] > handP1Card[controldraw]) {
        return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: Pair");
      } else if (handP1Card[controldraw] == handP2Card[controldraw]) {
        return ("Empate con las manos " + handP1 + " y " + handP2 + ". Jugada: Pair");
      }

    }

  } else if (highCard(handP1Card) >= 2 || highCard(handP2Card) >= 2) {

    if (highCard(handP1Card) > highCard(handP2Card)) {
      return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: High Card");
    } else if (highCard(handP2Card) > highCard(handP1Card)) {
      return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: High Card");
    } else if (highCard(handP1Card) == highCard(handP2Card)) {

      for (let i = 4; i > -1 && handP1Card[i] == handP2Card[i]; i--) {
        controldraw--;        
      }

      if (handP1Card[controldraw] > handP2Card[controldraw]) {
        return ("Gana el jugador uno con la mano " + handP1 + " a la mano " + handP2 + ". Jugada: High Card");
      } else if (handP2Card[controldraw] > handP1Card[controldraw]) {
        return ("Gana el jugador dos con la mano " + handP2 + " a la mano " + handP1 + ". Jugada: High Card");
      } else if (handP1Card[controldraw] == handP2Card[controldraw]) {
        return ("Empate con las manos " + handP1 + " y " + handP2 + ". Jugada: High Card");
      }

    }
  }
}

function isFlush (suitHand, cardHand) {
  
  let flush = false;
  let coloredStraight = false;
  
  if (suitHand.every(suit => suit === suitHand[0])) {
    score = 6000 + cardHand[4];
    flush = true;
  }

  if (flush) {

    if (cardHand[0] + 1 == cardHand[1] && cardHand[1] + 1 == cardHand[2] && cardHand[2] + 1 == cardHand[3] && cardHand[3] + 1 == cardHand[4]) {
      score = 9000 + cardHand[4];
      coloredStraight = true;
    }
  }

  if (flush || coloredStraight) {
    return score;
  } else {
    score = 0;
    return score;
  }
}

function isPoker (cardHand) {

  let poker = false;

  if (cardHand[0] == cardHand[1] && cardHand[1] == cardHand[2] && cardHand[2] == cardHand[3]) {
    score = 8000 + cardHand[2];
    poker = true;
  } else if (cardHand[1] == cardHand[2] && cardHand[2] == cardHand[3] && cardHand[3] == cardHand[4]) {
    score = 8000 + cardHand[2];
    poker = true;
  }
  
  if (poker) {
    return score;
  } else {
    score = 0;
    return score;
  }
}

function isFull(cardHand) {

  let full = false;

  if (cardHand[0] == cardHand[1] && cardHand[1] == cardHand[2] && cardHand[3] == cardHand[4]) {
    score = 7000 + cardHand[2];
    full = true;
  } else if (cardHand[0] == cardHand[1] && cardHand[2] == cardHand[3] && cardHand[3] == cardHand[4]) {
    score = 7000 + cardHand[4];
    full = true;
  }

  if (full) {
    return score;
  } else {
    score = 0;
    return score;
  }
}

function isStraight(cardHand) {

  let straight = false;

  if (cardHand[0] + 1 == cardHand[1] && cardHand[1] + 1 == cardHand[2] && cardHand[2] + 1 == cardHand[3] && cardHand[3] + 1 == cardHand[4]) {
    score = 5000 + cardHand[4];
    straight = 1;
  }

  if (straight) {
    return score;
  } else {
    score = 0;
    return score;
  }
}

function isThree(cardHand) {

  let three = false;

  if (cardHand[0] == cardHand[1] && cardHand[1] == cardHand[2]) {
    score = 4000 + cardHand[2];
    three = true;
  } else if (cardHand[2] == cardHand[3] && cardHand[3] == cardHand[4]) {
    score = 4000 + cardHand[4];
    three = true;
  }

  if (three) {
    return score;
  } else {
    score = 0;
    return score;
  }
}

function isDoublePair(cardHand) {

  let doublePair = false;

  if (cardHand[0] == cardHand[1] && cardHand[2] == cardHand[3]) {
    score = 3000 + cardHand[3];
    doublePair = true;
  } else if (cardHand[1] == cardHand[2] && cardHand[3] == cardHand[4]) {
    score = 3000 + cardHand[4];
    doublePair = true;
  } else if (cardHand[0] == cardHand[1] && cardHand[3] == cardHand[4]) {
    score = 3000 + cardHand[4];
    doublePair = true;
  }

  if (doublePair) {
    return score;
  } else {
    score = 0;
    return score;
  }
}

function isPair(cardHand) {

  let pair = false;

  if (cardHand[0] == cardHand[1]) {
    score = 2000 + cardHand[1];
    pair = true;
  } else if (cardHand[1] == cardHand[2]) {
    score = 2000 + cardHand[2];
    pair = true;
  } else if (cardHand[2] == cardHand[3]) {
    score = 2000 + cardHand[3];
    pair = true;
  } else if (cardHand[3] == cardHand[4]) {
    score = 2000 + cardHand[4];
    pair = true;
  }

  if (pair) {
    return score;
  } else {
    score = 0;
    return score;
  }
}

function highCard(cardHand) {

  return score = cardHand[4];

}

function cardValue (value) {
  switch (value) {
    case '2': return 2; 
    case '3': return 3; 
    case '4': return 4; 
    case '5': return 5; 
    case '6': return 6; 
    case '7': return 7; 
    case '8': return 8; 
    case '9': return 9; 
    case 'T': return 10; 
    case 'J': return 11; 
    case 'Q': return 12; 
    case 'K': return 13; 
    case 'A': return 14; 
  }
}

console.log(getDeck());
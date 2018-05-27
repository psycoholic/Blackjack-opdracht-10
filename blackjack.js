/*  Declare alle variables die gebruikt gaan worden */

var script = 'blackjack.js';
console.log(`${script}`);

      function createDeckElements() {
         // Creer een array gevuld met objecten, en geef deze een id mee, die hetzelfde is als image URL. en return deze naar het deck
      const deck = [];
        // Array met alle symbolen die gebruikt worden in het deck.
        const symbolen = ['harten', 'schoppen', 'ruiten', 'klaveren'];
          // Voor elk symbol in symbolen, maak een object aan. en geef hier een id aan die overeenkomt met de image url.
          for (let symbol of symbolen) {
            for (idx = 1; idx < 13; idx++){
              const obj = {
                  symbol: `/images/${symbol}-${idx}.png`,
                  id :  `/images${symbol}-${idx}.png`,
                  imgF: `images/${symbol}-${idx}.png`,
                  imgB: `images/achterkant.png`,
                  waarde: idx
              }
              deck.push(obj);
            }
          }
          console.log(deck);
          return deck;
      }
const deck = createDeckElements();

      function renderDeckElements() {
        // Creer hier de html elements, en wijs hier de objects vanuit createDeckElements aan toe.
        const deckElements = [];
        const deckRender = document.getElementById('deck');
          // Loop door het deck heen, en creer een html element voor elk symbol object.
          for (card of deck) {

              // Creer het cardElement, hierin komt een voor en een achterkant
              const cardElement = document.createElement("DIV");
                // Zet de attributen op het element.
                cardElement.id = card.id;
                cardElement.classList.add("card");

                // Creer de voorkant van de kaart
                var cardImgF = document.createElement('IMG');
                cardImgF.setAttribute("src", card.imgF);
                cardElement.appendChild(cardImgF);

                // Creer de achterkant van de kaart
                var cardImgB = document.createElement('IMG');
                cardImgB.setAttribute("src", card.imgB);
                cardElement.appendChild(cardImgB);

                deckElements.push(cardElement);
          }
          // Return de volledige array met alle gecreerde elementen.
          return deckElements;
      }

// Sla het resultaat van het deck render op in een variable om later te gebruiken
const renderedDeck = renderDeckElements();
console.log(renderedDeck[0].childNodes[0]);
document.body.appendChild(renderedDeck[0].childNodes[1]); // Test

      function handElements(){
        // pop hier items uit de renderDeckElements, en voeg deze toe aan de player hand
      }

      function dealerHandElements(){
        // pop hier items uit de renderDeckElements, en voeg deze toe aan de dealer
      }

      function shuffle(){
        // Pak de deck array, en leeg deze. pak deze items vervolgens en vermenigvuldig deze met random. Vul hiernaa de array weer met de nieuwe results.
          // Leeg het deck in een nieuwe array
          const tempDeck = deck.splice(0);
          console.log(deck);
          console.log(tempDeck);

          while (tempDeck.length > 0 ) {
            // vermenigvuldig de array lengte met een random getal zodat het resultaat nooit langer dan de array kan worden.
              const randomGetal = Math.floor(Math.random() * tempDeck.length);
              console.log(randomGetal);

              deck.push(tempDeck.splice(randomGetal, 1).pop());
            }
      }

      function Deal(){
        // pop van het geshufflde deck 2 kaarten, en wijs deze toe aan de hand, en de dealer.
      }

      function HitCard(){
        // Pak de button met id hit, kijk voor click. En Pop van het geshufflde deck 1 kaart.
      }

      function Vergelijk() {
        // Pak de array items van dealerHandElements, Tel ze bij elkaar op en Vergelijk deze met de totale uitkomst van de hand.

        // Sla de  totale uitkomst van de hand, en de dealerHand op in 2 variables.

        // Vergelijk de 2 handen, en zodra de dealer hand, of de playerHand boven de 21 zijn, voor de uitkomst met resultaat var true of false uit.

        function uitkomst(){
          // Alert de User met Winning, of losing. gebaseerd op de uitkomst van vergelijk.

          // Leeg de handen, maak het deck opnieuw, shuffle het deck, en deal de handen.
        }

      }

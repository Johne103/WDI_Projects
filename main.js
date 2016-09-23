console.log("JS file loaded");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

console.log("vars initialized");



function createBoard() {


	console.log("enter createBoard");

	for (var i=0; i<cards.length; i++) {

		console.log("evaluate array length")

		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);

		console.log("create cards");

	}

}

function isTwoCards() {

	cardsInPlay.push(this.getAttribute('data-card'));


	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
		console.log("king");
		} else {
			this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
			console.log("queen");
		}
			if (cardsInPlay.length === 2) {

				isMatch(cardsInPlay);
				cardsInPlay = [];
			}
	}

	function isMatch(cards) {

		if (cardsInPlay.length === 2) {

			if(cards[0] === cards[1]) {
			alert("Great! match found");

			} else {
				alert("Sorry! try again");

				resetCards();
			}
	}

function resetCards() {
	var cards = document.querySelectorAll('.card');

	console.log("enter resetCards");

	for(var i=0;i<cards.length;i++){
		cards[i].innerHTML=" ";

		console.log("Cards reset");
	}
}

}

createBoard();
import { cardGenerator } from './CardGenerate.js';
import { GameController } from './GameController.js';
import '../styles.css';

function GameReady() {
	cardGenerator();

	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	let cards = Array.from(document.getElementsByClassName('card'));
	// Pass totalTime and cards
	let gameStart = new GameController(60, cards);

	// Start game
	overlays.forEach((overlay) => {
		overlay.addEventListener('click', () => {
			overlay.classList.remove('visible');
			gameStart.startGame();
		});
	});

	// Flip sound
	cards.forEach((card) => {
		card.addEventListener('click', () => {
			gameStart.flipCard(card);
		});
	});
}

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', GameReady);
} else {
	GameReady();
}

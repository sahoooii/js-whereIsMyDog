import { cardGenerator } from './CardGenerate.js';
import { GameController } from './GameController.js';
import '../styles.css';

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', GameReady);
} else {
	GameReady();
}

function GameReady() {
	cardGenerator();

	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	let cards = Array.from(document.getElementsByClassName('card'));
	let gameStart = new GameController(60, cards);

	// start game
	overlays.forEach((overlay) => {
		overlay.addEventListener('click', () => {
			overlay.classList.remove('visible');
			gameStart.startGame();
		});
	});
	// card
	cards.forEach((card) => {
		card.addEventListener('click', () => {
			gameStart.flipCard(card);
		});
	});
}

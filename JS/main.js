import { GameController } from './GameController.js';
import { cardGenerator } from './CardGenerate.js';


function GameReady() {
	cardGenerator();

	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	let cards = Array.from(document.getElementsByClassName('card'));
	let gameStart = new GameController(100, cards);

	// start game
	overlays.forEach((overlay) => {
		overlay.addEventListener('click', () => {
			overlay.classList.remove('visible');
			gameStart.startGame();
			// let audioController = new AudioController();
			// audioController.startMusic();
		});
	});
	// card
	cards.forEach((card) => {
		card.addEventListener('click', () => {
			gameStart.flipCard(card);
		});
	});
}

// const playerLiveCount = document.getElementById('playerLiveCount');
// let playerLives = 6;

// playerLives
// playerLiveCount.textContent = playerLives;

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', GameReady);
} else {
	GameReady();
}

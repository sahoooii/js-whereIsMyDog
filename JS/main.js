import { cardGenerator } from './CardGenerate.js';

cardGenerator();


function GameReady() {
	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	let cards = Array.from(document.getElementsByClassName('card'));

	// start game
	overlays.forEach((overlay) => {
		overlay.addEventListener('click', () => {
			overlay.classList.remove('visible');
			// game.startGame();
		});
	});
	// card
	cards.forEach((card) => {
		card.addEventListener('click', () => {
			// game.flipCard(card)
		});
	});
}

const playerLiveCount = document.getElementById('playerLiveCount');
let playerLives = 6;

// playerLives
playerLiveCount.textContent = playerLives;

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', GameReady);
} else {
	GameReady();
}

import { AudioController } from './AudioController.js';
// import { cardGenerator } from './CardGenerate.js';

export class GameController {
	constructor(totalTime, cards) {
		this.cardsArray = cards;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime; //countdown time
		this.timer = document.getElementById('time-remaining');
		this.playerLiveCount = document.getElementById('playerLiveCount'); //6
		// this.cardGenerator = cardGenerator();
		this.audioController = new AudioController();
	}

	startGame() {
		this.clickedCard = null;
		this.playerLiveCount = 6;
		this.timeRemaining = this.totalTime;
		this.matchedCards = [];
		this.busy = true;
	}

	flipCard(card) {
		if (this.canFlipCard(card)) {
			this.audioController.flip();
		}
	}

	//1.busy, animation happening 2.matched cards 3.already flipped card
	canFlipCard(card) {
		return true;
		// return (
		// 	!this.busy &&
		// 	!this.matchedCards.includes(card) &&
		// 	card !== this.clickedCard
		// );
	}
}

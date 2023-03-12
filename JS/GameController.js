import { AudioController } from './AudioController.js';
import { cardGenerator } from './CardGenerate.js';

export class GameController {
	constructor(totalTime, cards) {
		this.cardsArray = cards;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime; //countdown time
		this.timer = document.getElementById('time-remaining');
		this.playerLiveCount = document.getElementById('playerLiveCount'); //6
		this.audioController = new AudioController();
	}

	startGame() {
		this.clickedCard = null;
		this.playerLiveCount.innerText = 6;
		this.timeRemaining = this.totalTime;
		this.matchedCards = [];
		this.busy = true;

		setTimeout(() => {
			this.audioController.startMusic();
			// cardGenerator();
			this.countDown = this.startCountDown();
			this.busy = false;
		}, 500);

		this.hideCards();
		this.timer.innerText = this.timeRemaining;
	}

	hideCards() {
		this.cardsArray.forEach((card) => {
			card.classList.remove('visible');
			card.classList.remove('matched');
		});
	}

	flipCard(card) {
		if (this.canFlipCard(card)) {
			this.audioController.flip();
			card.classList.add('visible');

			//match or not
			if (this.clickedCard) {
				this.checkForCardMatch(card);
			} else {
				this.clickedCard = card;
			}
		}
	}

	checkForCardMatch(card) {
		if (this.getCardType(card) === this.getCardType(this.clickedCard)) {
			this.cardMatch(card, this.clickedCard);
		} else {
			this.cardMismatch(card);
		}
	}

	cardMatch(card1, card2) {
		this.matchedCards.push(card1);
		this.matchedCards.push(card2);

		card1.classList.add('matched');
		card2.classList.add('matched');
		this.audioController.match();
		// from here
	}

	cardMismatch(card) {}

	getCardType(card) {
		return card.getElementsByClassName('card-value')[0].src;
	}

	startCountDown() {
		return setInterval(() => {
			this.timeRemaining--;
			this.timer.innerText = this.timeRemaining;
			if (this.timeRemaining === 0) {
				this.gameOver();
			}
		}, 1000);
	}

	victory() {
		clearInterval(this.countDown);

		this.audioController.victory();
		document.getElementById('victory-text').classList.add('visible');
	}

	gameOver() {
		clearInterval(this.countDown);

		this.audioController.gameOver();
		document.getElementById('game-over-text').classList.add('visible');
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

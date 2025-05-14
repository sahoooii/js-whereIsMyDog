import { AudioController } from './AudioController.js';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class GameController {
	constructor(totalTime, cards) {
		this.cardsArray = cards;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime; //countdown time
		this.timer = document.getElementById('time-remaining');
		this.playerLiveCount = document.getElementById('playerLiveCount');
		this.audioController = new AudioController();
	}

	async startGame() {
		this.clickedCard = null;
		this.timeRemaining = this.totalTime;
		this.playerLives = 10;
		this.matchedCards = [];
		this.busy = true;

		// Reset game
		this.hideCards();
		this.timer.innerText = this.timeRemaining;
		this.playerLiveCount.innerText = this.playerLives;

		await delay(500);

		//For control game to delay
		this.audioController.startMusic();
		this.countDown = this.startCountDown();
		this.busy = false;
	}

	//To reset cards
	hideCards() {
		this.cardsArray.forEach((card) => {
			card.classList.remove('visible');
			card.classList.remove('matched');
		});
	}

	//1.Not busy, animation happening
	// 2.Not matched cards
	// 3.Not already flipped card
	canFlipCard(card) {
		return (
			!this.busy &&
			!this.matchedCards.includes(card) &&
			card !== this.clickedCard
		);
	}

	flipCard(card) {
		if (this.canFlipCard(card)) {
			card.classList.add('visible');
			this.audioController.flip();

			// Judge mach or not
			if (this.clickedCard) {
				this.checkForCardMatch(card);
			} else {
				this.clickedCard = card;
			}
		}
	}

	// Get img src attribute
	getCardType(card) {
		return card.getElementsByClassName('card-value')[0].src;
	}

	// Check flipped card match or not
	checkForCardMatch(card) {
		if (this.getCardType(card) === this.getCardType(this.clickedCard)) {
			this.cardMatch(card, this.clickedCard);
		} else {
			this.cardMismatch(card, this.clickedCard);
		}
		this.clickedCard = null;
	}

	async cardMatch(card1, card2) {
		this.matchedCards.push(card1);
		this.matchedCards.push(card2);

		await delay(300);

		card1.classList.add('matched');
		card2.classList.add('matched');
		this.audioController.match();

		await delay(700);

		if (this.matchedCards.length === this.cardsArray.length) {
			this.victory();
		}
	}

	async cardMismatch(card1, card2) {
		this.busy = true;

		// Give time to remember cards before flip
		await delay(800);

		card1.classList.remove('visible');
		card2.classList.remove('visible');
		this.playerLives--;
		this.playerLiveCount.innerText = this.playerLives;
		this.audioController.wrong();

		await delay(700);

		if (this.playerLives === 0) {
			this.gameOver();
		}
		this.busy = false;
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
}

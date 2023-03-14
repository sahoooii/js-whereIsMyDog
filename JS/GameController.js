import { AudioController } from './AudioController.js';

export class GameController {
	constructor(totalTime, cards) {
		this.cardsArray = cards;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime; //countdown time
		this.timer = document.getElementById('time-remaining');
		this.playerLiveCount = document.getElementById('playerLiveCount');
		this.playerLives = 10;
		this.playerLiveCount.innerText = this.playerLives;
		this.audioController = new AudioController();
	}

	startGame() {
		this.clickedCard = null;
		this.timeRemaining = this.totalTime;
		this.playerLives = 10;
		this.matchedCards = [];
		this.busy = true;

		//for control game to delay
		setTimeout(() => {
			this.audioController.startMusic();
			this.countDown = this.startCountDown();
			this.busy = false;
		}, 500);

		// reset game
		this.hideCards();
		this.timer.innerText = this.timeRemaining;
		this.playerLiveCount.innerText = this.playerLives;
	}

	//to reset cards
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
			this.cardMismatch(card, this.clickedCard);
		}
		this.clickedCard = null;
	}

	getCardType(card) {
		return card.getElementsByClassName('card-value')[0].src;
	}

	cardMatch(card1, card2) {
		this.matchedCards.push(card1);
		this.matchedCards.push(card2);

		setTimeout(() => {
			card1.classList.add('matched');
			card2.classList.add('matched');
			this.audioController.match();
		}, 300);

		setTimeout(() => {
			if (this.matchedCards.length === this.cardsArray.length) {
				this.victory();
			}
		}, 1000);
	}

	cardMismatch(card1, card2) {
		this.busy = true;
		// to remember cards
		setTimeout(() => {
			card1.classList.remove('visible');
			card2.classList.remove('visible');
			this.playerLives--;
			this.playerLiveCount.innerText = this.playerLives;
			this.audioController.wrong();
			
			if (this.playerLives === 0) {
				this.gameOver();
			}
			this.busy = false;
		}, 1000);
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
		return (
			!this.busy &&
			!this.matchedCards.includes(card) &&
			card !== this.clickedCard
		);
	}
}

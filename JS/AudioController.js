export class AudioController {
	constructor() {
		this.bgMusic = new Audio('../Assets/Audio/dogWalk.mp3');
		this.flipSound = new Audio('../Assets/Audio/flip.mp3');
		this.matchSound = new Audio('../Assets/Audio/match.mp3');
		this.wrongSound = new Audio('../Assets/Audio/wrong.mp3');
		this.victorySound = new Audio('../Assets/Audio/victory.mp3');
		this.gameOverSound = new Audio('../Assets/Audio/gameOver.mp3');

		this.bgMusic.volume = 0.5;
		this.bgMusic.loop = true;
	}

	startMusic() {
		this.bgMusic.play();
	}

	stopMusic() {
		this.bgMusic.pause();
		this.bgMusic.currentTime = 0; //restart from the start
	}

	flip() {
		this.flipSound.play();
	}

	match() {
		this.matchSound.play();
	}
	
	wrong() {
		this.wrongSound.play();
	}

	victory() {
		this.stopMusic(); //stop bg music
		this.victorySound.play();
	}

	gameOver() {
		this.stopMusic();
		this.gameOverSound.play();
	}
}

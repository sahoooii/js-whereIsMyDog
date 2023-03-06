import { cardGenerator } from './CardGenerate.js';

const playerLiveCount = document.getElementById('playerLiveCount');
let playerLives = 6;

// playerLives
playerLiveCount.textContent = playerLives;


cardGenerator();

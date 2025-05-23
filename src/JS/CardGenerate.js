import getCardData from './getCardData';

const section = document.querySelector('section');

//Generate html
// <div class='card'>
// 	<div class='card-back card-face'>
// 		<img class='card-backImg' />
// 	</div>
// 	<div class='card-front card-face'>
// 		<img class='card-value' alt='' />
// 	</div>
// </div>;
const createCard = (item) => {
	// Create elements
	const card = document.createElement('div');
	const cardBack = document.createElement('div');
	const cardBackImg = document.createElement('img');
	const cardFront = document.createElement('div');
	const cardFrontImg = document.createElement('img');

	//Add class to card
	card.classList.add('card');
	cardBack.classList.add('card-back', 'card-face');
	cardBackImg.classList.add('card-backImg');
	cardFront.classList.add('card-front', 'card-face');
	cardFrontImg.classList.add('card-value');

	//Add card img src and alt
	cardBackImg.src = '../Images/cardBack.png';
	cardBackImg.setAttribute('alt', 'backImg-pawBox');
	cardFrontImg.src = item.imgSrc;
	cardFrontImg.setAttribute('alt', item.name);

	//Add elements
	card.appendChild(cardBack);
	cardBack.appendChild(cardBackImg);
	card.appendChild(cardFront);
	cardFront.appendChild(cardFrontImg);

	return card;
};

export const cardGenerator = () => {
	//Shuffle cards
	const cardData = getCardData();
	cardData.sort(() => Math.random() - 0.5);

	cardData.forEach((item) => {
		const card = createCard(item);
		section.appendChild(card);
	});
};

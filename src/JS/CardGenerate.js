const getCardData = () => [
	{
		imgSrc: '../Assets/Images/dog-collar.png',
		name: 'collar',
	},
	{
		imgSrc: '../Assets/Images/dog-collar.png',
		name: 'collar',
	},
	{
		imgSrc: '../Assets/Images/dog-food.png',
		name: 'dogFood',
	},
	{
		imgSrc: '../Assets/Images/dog-food.png',
		name: 'dogFood',
	},
	{
		imgSrc: '../Assets/Images/dog-head.png',
		name: 'dogHead',
	},
	{
		imgSrc: '../Assets/Images/dog-head.png',
		name: 'dogHead',
	},
	{
		imgSrc: '../Assets/Images/dog.png',
		name: 'dogNormal',
	},
	{
		imgSrc: '../Assets/Images/dog.png',
		name: 'dogNormal',
	},
	{
		imgSrc: '../Assets/Images/dogSit.png',
		name: 'dogSit',
	},
	{
		imgSrc: '../Assets/Images/dogSit.png',
		name: 'dogSit',
	},
	{
		imgSrc: '../Assets/Images/dogTongue.png',
		name: 'dogTongue',
	},
	{
		imgSrc: '../Assets/Images/dogTongue.png',
		name: 'dogTongue',
	},
	{
		imgSrc: '../Assets/Images/dog-colorful.png',
		name: 'dogColorful',
	},
	{
		imgSrc: '../Assets/Images/dog-colorful.png',
		name: 'dogColorful',
	},
	{
		imgSrc: '../Assets/Images/hot-dog.png',
		name: 'hotDog',
	},
	{
		// imgSrc: '../Assets/Images/hot-dog.png',
		imgSrc: '../Assets/Images/hot-dog.png',
		name: 'hotDog',
	},
];

//shuffle cards
const shuffleCards = () => {
	const cardData = getCardData();
	cardData.sort(() => Math.random() - 0.5);

	return cardData;
};

const section = document.querySelector('section');

//generate html
export const cardGenerator = () => {
	const cardData = shuffleCards();

	cardData.forEach((item) => {
		// create elements
		const card = document.createElement('div');
		const cardBack = document.createElement('div');
		const cardBackImg = document.createElement('img');
		const cardFront = document.createElement('div');
		const cardFrontImg = document.createElement('img');

		//add class
		card.classList.add('card');
		cardBack.classList.add('card-back', 'card-face');
		cardBackImg.classList.add('card-backImg');
		cardFront.classList.add('card-front', 'card-face');
		cardFrontImg.classList.add('card-value');

		//add img src
		cardBackImg.src = '../Assets/Images/cardBack.png';
		cardFrontImg.src = item.imgSrc;

		//which card did I click
		card.setAttribute('name', item.name);

		//add elements
		section.appendChild(card);
		card.appendChild(cardBack);
		cardBack.appendChild(cardBackImg);
		card.appendChild(cardFront);
		cardFront.appendChild(cardFrontImg);
	});
};

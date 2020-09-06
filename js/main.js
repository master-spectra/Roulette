'use strict';
// добавляем переменные
let roulette	= document.querySelector('.roulette'),
	startBtn 	= document.querySelector('.start'),
	random;

startBtn.addEventListener('click', function() {
	function randomFunction() {
		random = Math.round(Math.random() * 5);
		console.log(random)

		if (random == 0) {
			random = ++random;
		}

	};

	randomFunction();
 
	setTimeout(function scroll() {
		roulette.scrollLeft += 4; // делаем рандомную расскрутку 
		setTimeout(scroll, 1);
	}, 1); // рандомное время

	for (let i = 0; i < 10; i++) { // делаем итератор в значение 10
		// создаем две переменных 
		let google 			= document.createElement('img'),
			googlePlus 		= document.createElement('img'),
			calendar 		= document.createElement('img'),
			dev 			= document.createElement('img'),
			cloud 			= document.createElement('img');
		
		// даем им путь к картинке
		google.src 			= 'https://cdn.svgporn.com/logos/google-icon.svg';
		googlePlus.src 		= 'https://cdn.svgporn.com/logos/google-plus.svg';
		calendar.src 		= 'https://cdn.svgporn.com/logos/google-calendar.svg';
		dev.src 			= 'https://cdn.svgporn.com/logos/google-developers-icon.svg';
		cloud.src 			= 'https://cdn.svgporn.com/logos/google-cloud-functions.svg';


		// пишим условия дабы был рандом
		if (random == 1) {
			roulette.appendChild(calendar);
			roulette.appendChild(dev);
			roulette.appendChild(google);
			roulette.appendChild(googlePlus);
			roulette.appendChild(cloud);
		} else if (random == 2) {
			roulette.appendChild(dev);
			roulette.appendChild(google);
			roulette.appendChild(googlePlus);
			roulette.appendChild(cloud);
			roulette.appendChild(calendar);
		} else if (random == 3) {
			roulette.appendChild(googlePlus);
			roulette.appendChild(dev);
			roulette.appendChild(calendar);
			roulette.appendChild(google);
			roulette.appendChild(cloud);
		} else if (random == 4) {
			roulette.appendChild(cloud);
			roulette.appendChild(googlePlus);
			roulette.appendChild(dev);
			roulette.appendChild(calendar);
			roulette.appendChild(google);
		} else if (random == 5) {
			roulette.appendChild(calendar);
			roulette.appendChild(googlePlus);
			roulette.appendChild(cloud);
			roulette.appendChild(dev);
			roulette.appendChild(google);
		}
	}
});	 
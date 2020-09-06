'use strict';
// добавляем переменные
let roulette	= document.querySelector('.roulette'),
	startBtn 	= document.querySelector('.start'),
	ran;

startBtn.addEventListener('click', function() {
	// создаем функцию
	function selfRandom(min = 1, max = 5) { // ставим переменные по умолчанию
	 	ran = Math.floor(Math.random() * (max - min + 1)) + min; // даем значение ran'у
	};
	selfRandom(); // вызываем функцю

	setInterval(function() {
		roulette.scrollLeft += ran; // делаем рандомную расскрутку 
	}, ran); // рандомное время

	for (let i = 0; i < 10; i++) { // делаем итератор в значение 10
		// создаем две переменных 
		let img = document.createElement('img'),
			image = document.createElement('img');
		
		// даем им путь к картинке
		image.src = 'img/grifon.png';
		img.src = 'img/wolf.png';

		// пишим условие
		if (ran % 2 == true) { // если четное то один результат
			roulette.appendChild(img);
			roulette.appendChild(image);
		} else { // если не четное другой результат 
			roulette.appendChild(image);
			roulette.appendChild(img);
		}
	}
});
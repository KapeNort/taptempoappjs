//сначала код самой программы, вычисления

// объявляем переменные для программы

let countTap = 0;
let firstTap = 0;
let deltaTap = 0;
let tempo = 0;
let templateMs = 0; 
let middleDelta = 0;

//ipnutId - Инпут тайп ренж, 
// в textPut методом textcontent вставляем текст
// ipnutId нужно чтобы оттуда брать value (и наврное туда передавать)
// reset BPM сбрасываем всё в ноль и значение меняем в поле вывода

let resetBpm = function(ipnutId){
	countTap = 0;
	firstTap = 0;
	deltaTap = 0;
	tempo = 12;
	templateMs = 0; 
	middleDelta = 0;
	secondTap = 0;
	ipnutId.value = tempo;
};

// функция для тап темпо

let tapTempoFunc = function(ipnutId){
// проверка первый клик это или нет
	if (countTap === 0) {
		firstTap = Date.now(); // присвоили время в мс
	} 							// если клик не первый, то уже не будет выполнятся
								// уже в этом месте первому клику будет присвоено значение второго
// счетчик плюс один
	countTap++;

// присваиваем значение второму клику, считаем дельту между первым и вторым
	let secondTap = Date.now(); // присвоили время в мс, заодно объявили переменную, она нужна только в итерации
	deltaTap = secondTap - firstTap; // разница между двумя кликами

//считаем среднюю между несколькими дельтами милисекунд
	templateMs = templateMs + deltaTap;
	middleDelta =  Math.floor(templateMs/(countTap-1));

//считаем темп
	tempo = Math.floor(60000/middleDelta);

// вывод на страничку
	if (deltaTap !== 0 && tempo > 50 ) {
		ipnutId.value = tempo;
	}
// присваем значение второго клика первому, чтобы попарно вычислять всегда
	firstTap = secondTap;		// firstTap в глобальной области видимости, а секнд - только в функции

// проверка при долгом простое	
	if (deltaTap>3000) {
		countTap = 0;
		deltaTap = 0; 
		templateMs = 0;
		firstTap = 0;
	}
};

// подготовительная часть:

// собираем в переменные объекты со страницы
let tapBtn = document.querySelector('.tap'); 		//кнопка тапать
let resBtn = document.querySelector('.reset');		//кнопка сброса
let inBeat = document.querySelector('#beat');			// инпут тайп ренж

// вывод значений с ползунка в текстовое поле, функция в oninput
// аргументы функйии передаются в HTML разметке
let onbeat = function(ipnutId){
	let qwer = ipnutId.value;
};
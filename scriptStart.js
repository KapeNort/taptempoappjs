const beatCont = document.querySelector('#beat'); // ползунок, инпут тайп ренж
// делаем массив с элементами, куда записыавть
const forMsItems = document.querySelectorAll('.forms');

let newInp = document.querySelector('#nmbrInpt'); // инпут для ввода темпа числом (тайп намбер)
let isFocused = (document.activeElement === newInp ); // выдаст тру, если фокус на инпут тайп намбер

// функции для связи инпут тайп ренж и тайп намбер
let changeNewVal = function () {
	let newUnpVal = newInp.value;
	beatCont.value = newUnpVal;
	bpmCalculateToMs(beatCont, forMsItems);
	onbeat(inBeat)
}

let getNewBeat = function(){
	let er = beatCont.value;
	 newInp.value = er;
	 bpmCalculateToMs(beatCont, forMsItems);
}

//а теперь вызовы функций

// отмена двойного срабатывания когда фокус на кнопке и нажимают пробел
tapBtn.addEventListener('keydown', function(evt){    
	event.preventDefault();
})

// отмена срабатывания когда фокус на кнопке и нажимают пробел
resBtn.addEventListener('keydown', function(evt){    
	event.preventDefault();
	bpmCalculateToMs(beatCont, forMsItems);
});

// вызовы функции таптемпо по клику кнопок:
//проверка не в фокусе ли инпут тайп намбер (чтобы не учитывать клики по стрелочкам)
if (!isFocused) {
	tapBtn.addEventListener('click', function(evt){
	tapTempoFunc(inBeat);
	bpmCalculateToMs(beatCont, forMsItems);
	getNewBeat();
});
}

// срабатывание на кнопку пробел
document.addEventListener('keydown', function(evt){
	if (evt.keyCode === 32) {
		tapTempoFunc(inBeat);
		bpmCalculateToMs(beatCont, forMsItems);
		getNewBeat();
	}
});

// вызываем функцию сброса по клику на кнопку и потом по нажатию ESC
resBtn.addEventListener('click', function(evt){
	resetBpm(inBeat);
	bpmCalculateToMs(beatCont, forMsItems);
	getNewBeat();
});
// срабатывание на кнопку ESC
document.addEventListener('keydown', function(evt){
	if (evt.keyCode === 27) {
		resetBpm(inBeat);
		bpmCalculateToMs(beatCont, forMsItems);
		getNewBeat();
	}
})

// считаем милисек по изменению ползунка
beatCont.addEventListener('change', function(evt){
	bpmCalculateToMs(beatCont, forMsItems);
});

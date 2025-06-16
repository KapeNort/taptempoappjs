// функция, которая расчитывает милисек из темпа для разных длин нот
// containerBpm - контейнер (инпут ренж) откуда берется значение темпа
//razmetka - массив с элементами хтмл разметки, куда будут записываться значения
let bpmCalculateToMs = function(containerBpm, razmetka){
	let tempBPM = containerBpm.value; //значение темпа в переменную
// Три переменные - базовое значение милисекунд, доттед и триплет
	let basicNote = 0;
	let dottedNote = 0;
	let tripleNote = 0;
	let msMassive = [];
// цикл вычислений мс исходя из длительности нот и темпа
// такое j нужно для соответствия длине нот - 1/4, 1/16 и тд
	for (let j=4; j<=128; j=j*2){
		basicNote = Math.round(60000/tempBPM);
		dottedNote = Math.round(basicNote*1.5);
		tripleNote = Math.round(basicNote*2/3);
		msMassive.push(basicNote, dottedNote, tripleNote);
		tempBPM = tempBPM*2;
	}
	// все значения миллисекунд записаны в массив
	// затем просто присваем значения милисек элементам массива с разметкой
	for (let i=0; i<razmetka.length; i++){
		razmetka[i].textContent = msMassive[i] + ' ms';
	}
};
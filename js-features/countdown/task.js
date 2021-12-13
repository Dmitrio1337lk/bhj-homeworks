let count = document.getElementById('timer');

const counter = function (){
	
	count.textContent -= 1;
	
	if(count.textContent === '0'){
		clearInterval(time);
		setTimeout(() => {
			alert('Время закончилось');
        }, 100);
	}
}

let time = setInterval(counter, 1000); 
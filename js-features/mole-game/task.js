let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');


	
function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i ++) {
  let hole = getHole(i);
  
  hole.onclick = function shot() {
	  
	if(hole.className.includes('hole_has-mole')) {
		deadMole.textContent++;
    } else {
	   lostMole.textContent++;
    }
	
    if(deadMole.textContent === '10') {
		alert('You win!');
		deadMole.textContent = 0;
	    lostMole.textContent = 0;
    } else if(lostMole.textContent === '5') {
		alert('You lose!');
		deadMole.textContent = 0;
	    lostMole.textContent = 0;
	}
  }
}
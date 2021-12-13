let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');

function clickCookie (){
	if(cookie.width === 200) {
		cookie.width = 300;
	} else {
		cookie.width = 200;
	}
	
	counter.textContent++;
}

cookie.onclick = clickCookie;
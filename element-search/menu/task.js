
const menuLink = document.getElementsByClassName('menu__link');

for(let i = 0; i < menuLink.length; i++){

	menuLink[i].onclick = function (){

		let parElem = menuLink[i].parentElement.querySelector("ul");

		if(parElem != null){

			if(parElem.className == "menu menu_sub"){
				parElem.className = "menu menu_sub menu_active";
			} 
            
            else if(parElem.className == "menu menu_sub menu_active"){
				parElem.className = "menu menu_sub";
			} 
			return false;
		}
	}
};
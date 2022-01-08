let hasTooltip = document.getElementsByClassName("has-tooltip");

let tooltip = document.getElementsByClassName("tooltip")

for(let i = 0; i < hasTooltip.length; i++){

	hasTooltip[i].onclick = function(){

		let topPosit = hasTooltip[i].getBoundingClientRect().top;

		let leftPosit = hasTooltip[i].getBoundingClientRect().left;

		topPosit += 20;

		if(hasTooltip[i].title == tooltip[0].textContent){

			tooltip[0].classList.remove("tooltip_active");

		} 
        
        else{
			tooltip[0].innerText = hasTooltip[i].title;

			tooltip[0].classList.add("tooltip_active");

			tooltip[0].setAttribute("style", `left: ${leftPosit}px; top: ${topPosit}px`);

		  }

		return false;
        
	}
}
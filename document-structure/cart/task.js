let controlDec = document.getElementsByClassName("product__quantity-control_dec");

for(let i = 0; i < controlDec.length; i++){

	controlDec[i].onclick = function(){
		controlDec[i].nextElementSibling.innerText --;
	}
};

let controlInc = document.getElementsByClassName("product__quantity-control_inc");

for(let i = 0; i < controlInc.length; i++){

	controlInc[i].onclick = function(){

		controlInc[i].previousElementSibling.innerText ++;

	}

};

let product = document.getElementsByClassName("product");

let cartProducts = Array.from(document.getElementsByClassName("cart__products"));

let cartProduct = document.getElementsByClassName("cart__product");

for(let i = 0; i < product.length; i++){

	product[i].querySelector("div.product__add").onclick = function(){

		let item = Array.from(cartProduct).findIndex(item => item.dataset.id == product[i].dataset.id);

		if(item >= 0){

			let cartQuantity = Number(cartProduct[item].querySelector("div.cart__product-count").innerText);

			let addQuantity = Number(product[i].querySelector("div.product__quantity-value").innerText);

			cartProduct[item].querySelector("div.cart__product-count").innerText = cartQuantity + addQuantity;

		} 
        
        else{

			let elemAdd = document.createElement('div');

			elemAdd.className = "cart__product";

			elemAdd.dataset.id = product[i].dataset.id;

			elemAdd.insertAdjacentHTML("beforeEnd", `<img class="cart__product-image" src="${product[i].querySelector("img").src}"> <div class="cart__product-count">${product[i].querySelector("div.product__quantity-value").innerText}</div>`);
			
            cartProducts[0].append(elemAdd);
			
		}
	}
};

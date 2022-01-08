let form = document.forms["tasks__form"];

let taskInput = document.getElementById("task__input");

let tasksList = document.getElementById("tasks__list");

let tasksAdd = document.getElementById("tasks__add");

form.onsubmit = function(evt){

	evt.preventDefault();

	let result = taskInput.value.trim();

	if(result != ''){

		let elemAdd = document.createElement('div');

		elemAdd.className = "task";

		elemAdd.insertAdjacentHTML("beforeEnd", `<div class="task__title"> ${result} </div> <a href="#" class="task__remove">&times;</a>`);

		tasksList.append(elemAdd);

		let remove = elemAdd.querySelector("a.task__remove");

		remove.onclick = function(){

			remove.parentElement.remove();
		}

		form.reset();

		return false;
        
	  };
};
const progress = document.getElementById( 'progress' );

const btnSend = document.getElementById( 'send' );

let form = document.getElementById('form');

const func = (event) => {

    event.preventDefault();

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', event => progress.value = event.loaded / event.total);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.send(formData);
    
}

btnSend.addEventListener('click', func);
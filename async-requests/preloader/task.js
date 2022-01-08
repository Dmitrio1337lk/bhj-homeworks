const preloader = document.getElementById('loader');

const list = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('get', 'https://netology-slow-rest.herokuapp.com');

xhr.setRequestHeader('Content-Type','application/json');

xhr.send();

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 200) {

        preloader.classList.remove('loader_active');

        const arr = JSON.parse(xhr.responseText).response.Valute;

        for (const key in arr) {

            list.insertAdjacentHTML('beforeend',

            `<div class="item">

            <div class="item__code">

                ${arr[key].CharCode}

            </div>

            <div class="item__value">

                ${arr[key].Value}
                
            </div>

            <div class="item__currency">

                руб.

            </div>
            
            </div>`)
        }
    };
};
const title = document.getElementById('poll__title');

const answerList = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.setRequestHeader('Content-Type','application/json');

xhr.send();

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 200) {

        const response = JSON.parse(xhr.responseText);

        const idResponse = response.id;

        title.textContent = response.data.title;

        const buttons = response.data.answers;
        
        for (let i = 0; i < buttons.length; i++) {

            answerList.insertAdjacentHTML('beforeend', `

            <button class="poll__answer">

              ${buttons[i]}

            </button>`);

        }

        const arr = Array.from(document.getElementsByClassName('poll__answer'));

        arr.forEach( item => {

            item.onclick = function () {

                alert('Благодарим вас! Ваш ответ принят!');

                const xhr = new XMLHttpRequest;

                xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );

                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

                xhr.send( `vote=1&answer=2` );

                if (xhr.readyState === 4 && xhr.status === 200) {

                    console.log(xhr);

                    const response = JSON.parse(xhr.responseText);

                    console.log(response);

                }
            };
        });
    };
};
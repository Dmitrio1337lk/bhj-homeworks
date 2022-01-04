const redBoxWidget = document.querySelector('.chat-widget');

const messages = document.querySelector( '.chat-widget__messages' );

const inputField = document.querySelector('.chat-widget__input');

const boxOfAnswers = ['Привет',
                      'Я робот', 
                      'Отвечаю...',
                      'Запрос получен',
                      'Звучит несколько сложно',
                      'Чем то могу помочь?'
                    ];

redBoxWidget.onclick = () => redBoxWidget.classList.add('chat-widget_active');       

addZero = (digit) => (digit < 10) ? '0' + digit : digit;

function answerSelector(arr,idx) {

    let timeStamp = new Date();

    messages.innerHTML += `

        <div class="message">
            <div class="message__time">
                ${addZero(timeStamp.getHours())}:${addZero(timeStamp.getMinutes())}
            </div>
            <div class="message__text">
                ${arr[idx]}
            </div>
        </div>

    `;
}
function autoAnswer() {

    let newMessage = messages.lastElementChild;

    let idx = Math.floor(Math.random() * 10);

    let timeStamp = new Date();

    if (newMessage.classList.contains('message_client')) {

        (timeStamp.getHours() > 18 || timeStamp.getHours() < 9) ? answerSelector(boxOfAnswers, 10) : answerSelector(boxOfAnswers, idx);    

    }
}

inputField.addEventListener('keypress', function(event){

    if (event.key === 'Enter' && inputField.value) {

        let timeStamp = new Date();

        messages.innerHTML += `

            <div class="message message_client">
                <div class="message__time">
                    ${addZero(timeStamp.getHours())}:${addZero(timeStamp.getMinutes())}
                </div>
                <div class="message__text">
                    ${inputField.value}
                </div>
            </div>

        `;
        inputField.value = null; 
        
        setTimeout(autoAnswer, 500);
    }
});
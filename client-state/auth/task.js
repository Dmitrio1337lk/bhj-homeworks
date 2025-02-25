const signin = document.getElementById('signin');
const form = document.forms.signin__form;
const authButton = document.getElementById('signin__btn');
const welcomeDiv = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const logoutButton = document.querySelector('.logout');



getUserId();

authButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        if (response.success) {
            authSuccess(response.user_id);
            localStorage.setItem('userId', response.user_id);
        } else {
            form.login.value = '';
            form.password.value = '';
            alert('Неверный логин или пароль');
        };
    };
});

function authSuccess(userId) {
    signin.classList.remove('signin_active');
    welcomeDiv.classList.add('welcome_active');
    userIdSpan.innerText = userId;
    document.getElementById("logoutBlock").style.display = "block";
};

function getUserId() {
    localStorage.getItem('userId') ? authSuccess(localStorage.getItem('userId')) : signin.classList.add('signin_active');
};

function logout() {
    localStorage.removeItem('userId');
    welcomeDiv.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    document.getElementById("logoutBlock").style.display = "none";
};

logoutButton.addEventListener('click', logout);
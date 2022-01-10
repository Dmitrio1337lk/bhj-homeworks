const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (!(getCookie('modal') === 'closed')) {
    let idModalActive = setTimeout(() => modal.classList.add('modal_active'), 1500);
};

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
});

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((c) => c.startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.substr((name + '=' ).length)) : null;
};
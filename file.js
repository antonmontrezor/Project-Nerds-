let link = document.querySelector('.btn.message-us');
let popup = document.querySelector('.modal-log-in');
let close = document.querySelector('.modal-close');
let name = popup.querySelector('[type=text]');
let formCheck = popup.querySelector('form');
let emailCheck = popup.querySelector('[type=email]');
let letterCheck = popup.querySelector('textarea');
let storage = localStorage.getItem('username');


link.addEventListener('click', function (evt) {
    evt.preventDefault(); //убираем действие по умолчанию, когда ссылка переходит на другую страницу.
    popup.classList.add('modal-show');

    if (storage) {
        name.value = storage;
        emailCheck.focus();
    } else {
        name.focus();
    }
    /*мы добавляем фокус через js, так как этот фокус появляется при открытии поп-ап окна.
    Html атрибут focus тут не работает, так как фокус в таком случае появляется при загрузке страницы. Из=за
    того, что наш поп-ап скрыт, фокус не появится*/
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();//на всякий случай если поменяют кнопку на ссылку, ссылка не переведет на другую страницу.
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error'); //если одному элементу заданы множественные анимации с одинаковыми свойствами,
    // то будет проигрываться помледняя из-за каскадности. Потому сдесь убираем класс даной анимации.

});

//проверка формы на заполненость полей ввода
formCheck.addEventListener('submit', function (evt) {
    if (!name.value || !emailCheck.value || !letterCheck.value) {
        evt.preventDefault();//отменяем отправку по адресу в action
        popup.classList.add('modal-error');
    }
    else {
        localStorage.setItem('username', name.value);
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
            popup.classList.remove('modal-error');
        }
    }
});


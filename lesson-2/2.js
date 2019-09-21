var message;
let login = 'Owner'; //добавлено для проверки

(login == 'Pitter') ?
    message = 'Hi'
: (login == 'Owner') ?
    message = 'Hello'
: (login == '') ?
    message = 'unknow'
: message = '';


console.log(message); //добавлено для проверки
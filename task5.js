/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",\
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Нове повідомлення додається до уснуючих.
додаткове випробування: обмежити кількість виведених повідомлень до 5,
при додаванні повіомлення після 5го, зі сторінки має зникнути найстаріше повідомлення.
*/


const button = document.querySelector('button');
const messagesContainer = document.createElement('div');
document.body.appendChild(messagesContainer);

button.addEventListener('click', function () {
    addMessage('I was pressed!');
});

button.addEventListener('mouseover', function () {
    addMessage('Mouse on me!');
});

button.addEventListener('mouseout', function () {
    addMessage('Mouse is not on me!');
});

function addMessage(message) {
    messagesContainer.innerHTML += `<p>${message}</p>`;

    const messages = messagesContainer.querySelectorAll('p');
    if (messages.length > 5) {
        messagesContainer.removeChild(messages[0]); 
    }
}


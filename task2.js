/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */
function changeCSS() {
    const  button = document.querySelector('button')
    const text = document.getElementById('text')

    button.addEventListener('click', function() {
        text.style.color = 'orange';
        text.style.fontFamily = 'Comic Sans MS';
        text.style.fontSize = '20px';
    });
}
changeCSS();

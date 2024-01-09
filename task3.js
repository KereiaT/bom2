const first = document.querySelector('body').firstElementChild;
const second = first.nextElementSibling;
const thirdElement = document.querySelector('body').lastElementChild;
const screenBody = document.querySelector('body');
const link = document.querySelector('a');

function changeBack() {
    first.addEventListener('click', function() {
        screenBody.style.backgroundColor = 'blue';
    });
}

function double() {
    second.addEventListener('dblclick', function() {
        screenBody.style.backgroundColor = 'pink';
    });
}

function brown() {
    thirdElement.addEventListener('mousedown', function() {
        screenBody.style.backgroundColor = 'brown';
    });
}

function yellow() {
    link.addEventListener('mouseover', function() {
        screenBody.style.backgroundColor = 'yellow';
    });
}

changeBack();
double();
brown();
yellow();

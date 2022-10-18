'use strict';

const task1 = {
    firstClick: document.getElementById('firstClick'),
    secondClick: document.querySelector('#secondClick')
}

task1.firstClick.addEventListener('click', () => {
    if (task1.firstClick.classList.contains('first-active')) {
        task1.firstClick.classList.remove('first-active');
        task1.firstClick.classList.add('second-active');
    } else {
        task1.firstClick.classList.add('first-active');
        task1.firstClick.classList.remove('second-active');
    }
   
});

task1.secondClick.addEventListener('click', () => {
    if (task1.secondClick.classList.contains('second-active')) {
        task1.secondClick.classList.remove('second-active');
        task1.secondClick.classList.add('first-active');
    } else {
        task1.secondClick.classList.add('second-active');
        task1.secondClick.classList.remove('first-active');
    }
});
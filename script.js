'use strict';

//task 1 (56 mod 10 + 1 = 6 + 1 => 7)
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


//task2
const imgPlace = document.getElementById('img-placeholder');

const addImg = () => {
    const copy = document.getElementById('copyImg');
    if (!copy) {
        let img = document.createElement('img');
            img.id = 'copyImg';
            img.src = './img/kyiv.jpg';
            img.alt = 'Kyiv';
            img.width = '500';
        imgPlace.append(img);
    }
}

let zoomValue = 1;
const zoomIn = () => {
    const copy = document.getElementById('copyImg');
    zoomValue+=0.1;
    if (!copy || zoomValue < 1) return;
    copy.style.transform = `scale(${zoomValue})`;
}

const zoomOut = () => {
    const copy = document.getElementById('copyImg');
    zoomValue-=0.1;
    if (!copy || zoomValue < 1) return;
    copy.style.transform = `scale(${zoomValue})`;
}

const removeImg = () => {
    const copy = document.getElementById('copyImg');
    if (copy) copy.remove();
}
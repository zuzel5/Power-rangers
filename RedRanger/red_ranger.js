const box = document.querySelector('.box');
const boxContent = document.querySelector('.content');
const sensitivity = 15;

box.addEventListener('mousemove',addCoors);
boxContent.addEventListener('mousemove',addCoors);

function addCoors(e){
    const x = e.clientX;
    const y = e.clientY;
    box.style.backgroundPosition = `${x/sensitivity}px${y/sensitivity}px`;
}
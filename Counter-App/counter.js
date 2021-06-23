const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')){
        count.innerHTML++;
    }
    if (e.target.classList.contains('subtract')){
        count.innerHTML--;
    }
    if (e.target.classList.contains('reset')){
        count.innerHTML = 0;
    }

    setColor();
})

function setColor(){
    if (count.innerHTML > 0){
        count.style.color = 'limegreen';
    } else if (count.innerHTML <0){
        count.style.color = 'orangered';
    } else {
        count.style.color = 'white';
    }
}

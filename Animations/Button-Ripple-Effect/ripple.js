const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX; // where you click on the button in relation to the viewport
        const y = e.clientY;

        const buttonTop = e.target.offsetTop; // gets position of where the button starts
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        // removes circle variable from the DOM
        setTimeout(() => circle.remove(), 500)
    })
})
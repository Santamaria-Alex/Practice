const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);


function checkBoxes(){
    //innerHeight is how much of the display you can see height-wise
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        //getBoundingClientRect allows us to get the measurement of the rectangle being referred, and a specific part of that rectangle, in this case the top of the box.
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

checkBoxes();

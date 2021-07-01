const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


function dragStart() {
    // += appends the class hold to the existing class of fill
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0)
    console.log('drag start')
}

function dragEnd() {
    this.className = 'fill';
    console.log('drag End')
}

function dragOver(e) {
    e.preventDefault();
    console.log('drag over')
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log('drag enter')
}

function dragLeave() {
    this.className = 'empty';
    console.log('drag leave')
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
    console.log('drag drop')
}
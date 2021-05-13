var position = 0;
var d = document.getElementById('spinzone');

var animate = setInterval(function () {
    position += 1;
    d.style.left = position + "px";
    d.style.top = position + "px";
    d.style.transform = "rotate("+position + "deg)";
}, 10)

function stop() {
    clearInterval(animate);
}

// var bg = document.getElementById('bg');
//
// bg.addEventListener('mousemove', runEvent);
//
// function runEvent (e) {
//     document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 60";
// }


$('#spinzone').addClass("fs-1 fw-bold bg-danger p-2 border border-dark border-2 rounded text-white")

$('button').addClass("mt-5")
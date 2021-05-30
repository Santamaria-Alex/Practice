const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


// the "+" acts like a parseInt();
let ticketPrice = +movieSelect.value;
console.log(typeof ticketPrice) // number



// this function takes the selected seat, adds it to the total amt of seats selected, and adds the total price of all the seats selected.
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats);

    const selectedSeatsCount = selectedSeats.length;
    console.log(selectedSeatsCount)

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


//Movie select event; changes the total price dependant on the movie selected.
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})



// Seat click event
container.addEventListener('click', (e) =>{
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        console.log(e.target); // function runs only on seats that don't have class of occupied
        e.target.classList.toggle('selected'); // turns seat that's clicked blue

        updateSelectedCount();
    }

})


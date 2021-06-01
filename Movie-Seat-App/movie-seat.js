const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


populateUi();


// the "+" acts like a parseInt();
let ticketPrice = +movieSelect.value;
console.log(typeof ticketPrice) // number


// save selected movie index and price.
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}



// this function takes the selected seat, adds it to the total amt of seats selected, and adds the total price of all the seats selected.
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats);

    //copy seats into array
    //Map through array
    //return a new array of indexes
    // the spread operator (...) copies the array its referencing and adds it to new array.
    //this variable turns the variable selectedSeats into an array from a node list
    const seatsIndex = [...selectedSeats].map((seat) =>
        [...seats].indexOf(seat)
    );
    console.log(seatsIndex); // logs an array of the index of each seat that's clicked.


    //saves to local storage, can check on "application" in dev tools, next to console.
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    const selectedSeatsCount = selectedSeats.length;
    console.log(selectedSeatsCount)

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


// get data from localStorage and populate UI (user interface)
function populateUi (){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    // JSON.parse() turns the localStorage back into an array from when we used JSON.stringify.

    console.log(selectedSeats);

    // check for null bc that's what shows up in localStorage if there isn't anything there
    // check if index of selected seats is > -1, bc -1 === false, meaning theres no number matching the index of in the array.
    if (selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    // check if movie selected is in localStorage.
    if (selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}


//Movie select event; changes the total price dependant on the movie selected.
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value); //shows the index of movie clicked, and the value $ //
    updateSelectedCount();
})



// Seat click event
container.addEventListener('click', (e) =>{
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        console.log(e.target); // function runs only on seats that don't have class of occupied
        e.target.classList.toggle('selected'); // turns seat that's clicked blue

        updateSelectedCount();
    }

});


//initial count and total set
updateSelectedCount();


let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', function filterNames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //get Ul
    let ul = document.getElementById('names');
    // get li's from ul, puts li in an array
    let li = ul.querySelectorAll('li.collection-item');

    //loop through colledction item li's
    for (let i = 0; i< li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        // if matches
        // set to > -1 bc in arrays, a -1 means there isn't that value in the array.
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
});


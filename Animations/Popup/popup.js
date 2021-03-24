const modal = document.querySelector('.modal'),
    btn = document.querySelector('.btn'),
    close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

//open the popup
function openModal (e){
    //prevent the default that refreshes the page when user clicks button
    e.preventDefault();
    modal.style.display = 'block';
}

//close popup
function closeModal (e){
    modal.style.display = 'none';
}
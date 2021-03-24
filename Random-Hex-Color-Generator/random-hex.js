const hex = document.querySelector('.hex');
const btn = document.querySelector('.generate');

const generateColor = () => {
    //create random string that's 6 characters long
    const randomColor = Math.random().toString(16).substring(2, 8);

    document.body.style.backgroundColor = '#' + randomColor;

    hex.innerHTML = '#' + randomColor;
}

btn.addEventListener('click', generateColor);

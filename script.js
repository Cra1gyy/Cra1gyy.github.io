const rotating = document.getElementById('image_rotate');
const rotate_left_button = document.getElementById('rotate_left');
const rotate_right_button = document.getElementById('rotate_right');
const center_button = document.getElementById('center');



let rotate_func_left = () => {
    rotating.style.transform = 'rotate(-20deg)'
}

rotate_left_button.addEventListener('click', rotate_func_left);



let rotate_func_right = () => {
    rotating.style.transform = 'rotate(20deg)' 
}

rotate_right_button.addEventListener('click', rotate_func_right);



let center_func = () => {
    rotating.style.transform = 'rotate(0deg)'
}

center_button.addEventListener('click', center_func);



let readMoreButton = document.getElementById('read_more_button');
let addParagraph = document.getElementsById('about_content_p');


let aboutFunc = () => {
    readMoreButton.innerHTML = 'Read Less';
}


readMoreButton.addEventListener('click', aboutFunc);
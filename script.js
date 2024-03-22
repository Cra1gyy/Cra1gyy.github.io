const rotating = document.getElementById('image_rotate');
const rotate_left_button = document.getElementById('rotate_left');
const rotate_right_button = document.getElementById('rotate_right');

let rotate_func_left = () => {
    rotating.style.transform = 'rotate(-20deg)'
}

rotate_left_button.addEventListener('click', rotate_func_left);

let rotate_func_right = () => {
    rotating.style.transform = 'rotate(20deg)' 
}

rotate_right_button.addEventListener('click', rotate_func_right);
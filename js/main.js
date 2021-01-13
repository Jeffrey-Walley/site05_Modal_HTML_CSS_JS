// Get Modal Element
let modal = document.getElementById('simpleModal');

// Get Open Modal Button
let modalBtn = document.getElementById('modalBtn');

// Get Close Button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// eventListener for open click
modalBtn.addEventListener('click', openModal);

// eventListener for close click
closeBtn.addEventListener('click', closeModal);

// eventListener for outside click
window.addEventListener('click', clickOutside);

// funcion to open modal
function openModal() {
    modal.style.display = 'block';
};

// funcion to open modal
function closeModal() {
    modal.style.display = 'none';
};

// funcion to close modal if outside click
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    };
};
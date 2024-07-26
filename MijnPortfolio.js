var navLinks = document.getElementById('navLinks');

// Open menu/Close menu
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Slide images
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    let slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
});

next.addEventListener('click', () => {
    let slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
});

// Contact form
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let valid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

function toggleProjectDetails(projectId) {
    const project = document.getElementById(projectId);
    if (project.style.display === 'none') {
        project.style.display = 'block';
    } else {
        project.style.display = 'none';
    }
}



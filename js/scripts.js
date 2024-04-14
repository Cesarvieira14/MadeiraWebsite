console.log("hello");


menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
    menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";

    // Toggle disable-scroll class on body
    document.body.classList.toggle('disable-scroll');
});

//TODO Hidding the header(decide to use or not)
/* 


const header = document.querySelector('header');

// Define the scroll threshold at which the header should disappear
const scrollThreshold = 100; // Adjust this value as needed

// Function to toggle the header visibility
function toggleHeaderVisibility() {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
}

//event listener for scroll event
window.addEventListener('scroll', toggleHeaderVisibility);

*/

// JavaScript
document.querySelector('.css-button-neumorphic').addEventListener('click', function () {
    const headerHeight = document.querySelector('header').offsetHeight;
    const activitiesSection = document.getElementById('Activities');
    const targetPosition = activitiesSection.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Optional: Smooth scrolling
    });
});



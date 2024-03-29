console.log("hello");

// Store the menu toggler element in a variable
const menuToggler = document.getElementById('menuToggler');

// Store the menu element in a variable
const menu = document.getElementById('menu');

// Function to toggle the menu visibility and update menu toggler text
menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
    menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
    toggleHeaderVisibility(); // Call toggleHeaderVisibility after toggling the menu
});

// Store the header element in a variable
const header = document.querySelector('header');

// Define the scroll threshold at which the header should disappear
const scrollThreshold = 100; // Adjust this value as needed

// Function to toggle the header visibility
function toggleHeaderVisibility() {
    if (window.scrollY > scrollThreshold && !menuToggler.classList.contains('open')) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', toggleHeaderVisibility);

// Call toggleHeaderVisibility initially to handle header visibility based on initial scroll position
toggleHeaderVisibility();

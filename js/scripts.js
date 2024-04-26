// Output "hello" to the console
console.log("hello");

// Set up a click event listener on menuToggler
menuToggler.addEventListener('click', ev => {
    // Toggle the 'open' class on the menu element
    menu.classList.toggle('open');
    // Toggle between "×" and "≡" symbols on menuToggler
    menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";

    // Toggle disable-scroll class on body
    document.body.classList.toggle('disable-scroll');
});




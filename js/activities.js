// Attach a click event listener to the "Explore" button on the activity page.
document.querySelector('.css-button-neumorphic').addEventListener('click', function () {
    // Retrieve the height of the page header, including its padding and borders.
    const headerHeight = document.querySelector('header').offsetHeight;

    // Locate the section of the page where activities are displayed.
    const activitiesSection = document.getElementById('activities');

    // Calculate the vertical position to scroll to, adjusting for header height to ensure the activities section aligns properly at the top of the view.
    const targetPosition = activitiesSection.getBoundingClientRect().top + window.scrollY - headerHeight;

    // Scroll to the calculated position with a smooth animation, enhancing the user experience.
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Optional: Enables smooth scrolling.
    });
});
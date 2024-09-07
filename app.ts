// app.ts

// Function to toggle visibility of an element
function toggleVisibility() {
    // Get the element by its ID
    const content = document.getElementsByClassName('about');
    
    // If the element exists
    if (content) {
        // Toggle the 'display' property
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }
}

// Add event listener to the button
const button = document.getElementById('toggleButton');
if (button) {
    button.addEventListener('click', toggleVisibility);
}

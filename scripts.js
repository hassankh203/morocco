// scripts.js

// Display a welcome message when the page loads
document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to the Morocco Information Page!');
});

// Change the background color of the header when the button is clicked
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const header = document.querySelector('header');
    header.style.backgroundColor = header.style.backgroundColor === 'blue' ? '#4CAF50' : 'blue';
});

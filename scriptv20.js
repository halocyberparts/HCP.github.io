// script.js

// Wrap your JavaScript code in a function to ensure it runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Your existing JavaScript code goes here

  // Example: Add a click event listener to the "Learn More" button
  const learnMoreButtons = document.querySelectorAll('.btn-coll');
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Learn More button clicked!');
      // You can add more functionality here
    });
  });

  // ... Add more JavaScript code as needed
});

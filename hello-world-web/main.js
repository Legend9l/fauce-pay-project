// This file contains the JavaScript code for the application.
// It includes functionality to display a "Hello World" message on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    const message = document.createElement('h1');
    message.textContent = 'Hello World';
    document.body.appendChild(message);
});
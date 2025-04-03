document.addEventListener('DOMContentLoaded', function() {
    fetch('includes/navbar.html')
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML('afterbegin', data));
});
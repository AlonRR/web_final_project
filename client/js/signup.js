document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signupForm').onsubmit = function (event) {
        event.preventDefault();
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        const newUser = { name, email, password };
        console.log('POST /users', JSON.stringify(newUser));
        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        console.log('Users:', JSON.stringify(users));

        window.location.href = 'newaccount.html';
    };
});

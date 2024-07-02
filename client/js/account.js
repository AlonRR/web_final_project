document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('accountForm').onsubmit = function (event) {
        event.preventDefault();
        const name = document.getElementById('nameInput').value;
        const accountType = document.getElementById('accountType').value;
        const newAccount = { name, accountType };
        console.log('POST /addAccount', JSON.stringify(newAccount));
    };
});

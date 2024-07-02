document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('accountForm').onsubmit = function (event) {
        event.preventDefault();
        const bank = document.getElementById('bankInput').value;
        const bankSelection = document.getElementById('bankSelect').value;
        const newAccount = { bank, bankSelection };
        console.log('Bank Input:', bank);
        console.log('Selected Bank:', bankSelection);
        console.log('POST /addAccount', JSON.stringify(newAccount));
    };
});

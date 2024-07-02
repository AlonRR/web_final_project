window.onload = () => {
    load_transactions();
};

function load_transactions() {
    fetch('data/transaction.json')
        .then(response => response.json())
        .then(data => {
            data.transactions.forEach(item => {
                let li = document.createElement('li');
                li.classList.add('transaction_card');
                li.innerHTML = `
            <div class="card_icon">
            <div class="${item.icon}"></div>
            </div>
            <div class="card_text">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            </div>
            <div class="card_text">
                <h4>${item.amount}$</h4>
                <p>${item.time}</p>
                </div>
                `;
                document.querySelector('.tansactions ul').appendChild(li);
            });
        })
        .catch(error => console.log(error));
}
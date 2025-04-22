const form = document.getElementById('transaction-form');
const description = document.getElementById('DECRIPTION');
const amount = document.getElementById('AMOUNT');
const date = document.getElementById('DATE');
const type = document.getElementById('type');
const list = document.getElementById('transaction-list');
const balanceEl = document.getElementById('Bralance');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Event: Form Submit
form.addEventListener('submit', addTransaction);

// Add Transaction
function addTransaction(e) {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    description: description.value.trim(),
    amount: parseFloat(amount.value),
    date: date.value,
    type: type.value
  };

  if (!transaction.description || isNaN(transaction.amount) || !transaction.date) {
    alert("Please fill in all fields correctly.");
    return;
  }

  transactions.push(transaction);
  saveToLocalStorage();
  renderTransactions();
  form.reset();
}

// Delete Transaction
function deleteTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  saveToLocalStorage();
  renderTransactions();
}

// Save to Local Storage
function saveToLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Render Transactions
function renderTransactions() {
  list.innerHTML = '';
  let balance = 0;

  transactions.forEach(tx => {
    const item = document.createElement('li');
    item.classList.add('transaction', tx.type);

    const sign = tx.type === 'income' ? '+' : '-';
    const amountFormatted = `$${Math.abs(tx.amount).toFixed(2)}`;

    if (tx.type === 'income') {
      balance += tx.amount;
    } else {
      balance -= tx.amount;
    }

    item.innerHTML = `
      <span><strong>${tx.description}</strong> | ${tx.date}</span>
      <span>${sign}${amountFormatted}</span>
      <button class="delete-btn" onclick="deleteTransaction(${tx.id})">x</button>
    `;

    list.appendChild(item);
  });

  balanceEl.textContent = `$${balance.toFixed(2)}`;
}

// Initialize
renderTransactions();
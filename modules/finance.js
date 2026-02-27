let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

export function addExpense(desc, amount, category) {
  expenses.push({
    id: Date.now(),
    desc,
    amount: Number(amount),
    category,
    date: new Date()
  });
  save();
}

export function getExpenses() {
  return expenses;
}

export function getTotal() {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function save() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
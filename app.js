import { addExpense, getExpenses, getTotal } from "./modules/finance.js";
import { renderChart } from "./modules/charts.js";

const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".sidebar button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
    render();
  });
});

document.getElementById("addExpenseBtn").addEventListener("click", () => {
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if(!desc || !amount) return;

  addExpense(desc, amount, category);
  render();
});

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function render() {
  document.getElementById("totalBalance").innerText = "$" + getTotal();

  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  getExpenses().forEach(e => {
    const div = document.createElement("div");
    div.textContent = `${e.desc} - $${e.amount} (${e.category})`;
    list.appendChild(div);
  });

  renderChart();
}

render();
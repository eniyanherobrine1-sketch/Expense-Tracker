import { getExpenses } from "./finance.js";

let chart;

export function renderChart() {
  const expenses = getExpenses();

  const monthly = {};
  expenses.forEach(e => {
    const month = new Date(e.date).getMonth();
    monthly[month] = (monthly[month] || 0) + e.amount;
  });

  const labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const data = labels.map((_, i) => monthly[i] || 0);

  if(chart) chart.destroy();

  chart = new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Monthly Spending",
        data
      }]
    }
  });
}
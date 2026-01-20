function showSection(id) {
  document.querySelectorAll(".section").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function toggleDropdown() {
  const d = document.getElementById("profileDropdown");
  d.style.display = d.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".profile")) {
    document.getElementById("profileDropdown").style.display = "none";
  }
});
function calculateUsage() {
  const limit = Number(document.getElementById("creditLimit").value);
  const spend = Number(document.getElementById("currentSpend").value);
  const result = document.getElementById("usageResult");

  if (!limit || !spend) {
    result.innerText = "Please enter valid values";
    return;
  }

  const percent = Math.round((spend / limit) * 100);

  let status = "";
  let message = "";

  if (percent < 30) {
    status = "🟢 Safe";
    message = "Excellent credit usage. Keep it below 30%.";
  } else if (percent <= 50) {
    status = "🟡 Caution";
    message = "Try to reduce spending to protect your credit score.";
  } else {
    status = "🔴 Risky";
    message = "High risk! Credit score may drop.";
  }

  result.innerHTML = `
    Utilization: <b>${percent}%</b><br>
    Status: <b>${status}</b><br>
    Advice: ${message}
  `;
}
function recommendCard() {
  const type = document.getElementById("spendType").value;
  const result = document.getElementById("cardResult");

  if (!type) {
    result.innerText = "Please select a spending type.";
    return;
  }

  let recommendation = "";

  if (type === "travel") {
    recommendation = "✈️ Travel Rewards Card – Best for flights and hotels.";
  } else if (type === "shopping") {
    recommendation = "🛍️ Cashback Card – Save more on online purchases.";
  } else if (type === "fuel") {
    recommendation = "⛽ Fuel Card – Fuel surcharge waiver & savings.";
  } else if (type === "bills") {
    recommendation = "📱 Utility Cashback Card – Save on monthly bills.";
  }

  result.innerHTML = `<b>Recommended:</b><br>${recommendation}`;
}





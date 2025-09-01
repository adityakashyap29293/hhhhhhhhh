function fetchBill() {
  const mobile = document.getElementById('mobileNumber').value.trim();
  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // 🔹 Mock database
  const billDatabase = {
    "8800392483": {      name: "aditya",      amount: 800,      dueDate: "2025-09-10"},
    "8860614053": {      name: "satpal",      amount: 400,      dueDate: "2025-09-10"},
    "9811397271": {      name: "khush",      amount: 312,      dueDate: "2025-09-10"},
    "7290900267": {      name: "jai",      amount: 780,      dueDate: "2025-09-10"},

  };

  const bill = billDatabase[mobile];

  if (bill) {
    document.getElementById('billMobile').textContent = mobile;
    document.getElementById('billName').textContent = bill.name;
    document.getElementById('billAmount').textContent = bill.amount.toFixed(2);
    document.getElementById('billSection').classList.remove('hidden');
  } else {
    alert("No bill found for this mobile number.");
    document.getElementById('billSection').classList.add('hidden');
  }
}


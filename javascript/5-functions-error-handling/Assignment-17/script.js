function withdrawAmount() {
  const balance = parseFloat(document.getElementById("balance").value);
  const withdraw = parseFloat(document.getElementById("withdraw").value);
  const result = document.getElementById("result");

  try {
    if (isNaN(balance) || isNaN(withdraw)) {
      throw {
        errorCode: 101,
        errorMessage: "Invalid input. Please enter valid numbers."
      };
    }

    if (withdraw <= 0) {
      throw {
        errorCode: 102,
        errorMessage: "Withdrawal amount must be greater than zero."
      };
    }

    if (withdraw > balance) {
      throw {
        errorCode: 103,
        errorMessage: "Insufficient balance. Withdrawal denied."
      };
    }
    const newBalance = balance - withdraw;
    result.innerHTML = `✅ Withdrawal successful! Remaining Balance: ₹${newBalance.toFixed(2)}`;
    result.className = "success";
  } 
  catch (err) {
    result.innerHTML = `❌ <strong>Error ${err.errorCode}:</strong> ${err.errorMessage}`;
    result.className = "error";
  }
}

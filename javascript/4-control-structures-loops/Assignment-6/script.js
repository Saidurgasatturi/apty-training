function calculateInterest() {
  let principal = Number(document.getElementById("principal").value);
  let rate = Number(document.getElementById("rate").value);
  let time = Number(document.getElementById("time").value);
  let result = "";

 
  if (principal <= 0 || rate <= 0 || time <= 0) {
    result = "⚠️ Please enter valid positive values for all fields!";
  } else {
   
    let simpleInterest = (principal * rate * time) / 100;
    let totalAmount = principal + simpleInterest;

    result = `
      Principal: ₹${principal.toFixed(2)} <br>
      Rate: ${rate.toFixed(2)}% <br>
      Time: ${time.toFixed(2)} years <br><br>
      💰 Simple Interest: <strong>₹${simpleInterest.toFixed(2)}</strong><br>
      💵 Total Amount: <strong>₹${totalAmount.toFixed(2)}</strong>
    `;
  }

  document.getElementById("result").innerHTML = result;
}

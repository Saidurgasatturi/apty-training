
function createBankAccount() {
  let balance = 0; 

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited ₹${amount}.`;
      } else {
        return "Enter a valid amount to deposit.";
      }
    },

    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew ₹${amount}.`;
      } else if (amount > balance) {
        return "Insufficient balance!";
      } else {
        return "Enter a valid amount to withdraw.";
      }
    },

    checkBalance: function() {
      return `Current Balance: ₹${balance}`;
    }
  };
}

const myAccount = createBankAccount();

function deposit() {
  const amount = Number(document.getElementById("amount").value);
  document.getElementById("result").innerText = myAccount.deposit(amount);
}

function withdraw() {
  const amount = Number(document.getElementById("amount").value);
  document.getElementById("result").innerText = myAccount.withdraw(amount);
}

function checkBalance() {
  document.getElementById("result").innerText = myAccount.checkBalance();
}

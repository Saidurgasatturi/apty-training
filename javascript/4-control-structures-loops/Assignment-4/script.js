function findLargest() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let result = "";


  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    result = "⚠️ Please enter all three numbers!";
  } else {
    
    if (num1 >= num2 && num1 >= num3) {
      result = `${num1} is the largest number.`;
    } else if (num2 >= num1 && num2 >= num3) {
      result = `${num2} is the largest number.`;
    } else {
      result = `${num3} is the largest number.`;
    }
  }

  document.getElementById("result").innerHTML = result;
}

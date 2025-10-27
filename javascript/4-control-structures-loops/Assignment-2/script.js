function checkLeapYear() {
  let year = Number(document.getElementById("year").value);
  let result = "";

  if (!year) {
    result = "Please enter a valid year!";
  } 
  else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    result = `${year} is a Leap Year ✅`;
  } 
  else {
    result = `${year} is Not a Leap Year ❌`;
  }

  document.getElementById("result").innerHTML = result;
}

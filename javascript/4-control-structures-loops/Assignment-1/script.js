function calculateGrade() {
  let marks = Number(document.getElementById("marks").value);
  let grade = "";

 
  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 75 && marks <= 89) {
    grade = "B";
  } else if (marks >= 50 && marks <= 74) {
    grade = "C";
  } else if (marks < 50) {
    grade = "F";
  } else {
    grade = "Invalid Input";
  }


  document.getElementById("result").innerHTML = `Grade: <strong>${grade}</strong>`;
}

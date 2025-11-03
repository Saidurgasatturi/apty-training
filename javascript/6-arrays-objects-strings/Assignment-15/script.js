// Base object - Person
let Person = {
  name: '',
  greet: function() {
    return `Hello, ${this.name}!`;
  }
};

let Employee = Object.create(Person);
Employee.job = '';
Employee.greet = function() {
  return `Hello, ${this.name} the ${this.job}!`;
};

function createEmployee() {
  const nameInput = document.getElementById('nameInput').value.trim();
  const jobInput = document.getElementById('jobInput').value.trim();
  const output = document.getElementById('output');

  if (!nameInput || !jobInput) {
    output.textContent = "⚠️ Please enter both name and job.";
    return;
  }

  const newEmployee = Object.create(Employee);
  newEmployee.name = nameInput;
  newEmployee.job = jobInput;

  const greeting = newEmployee.greet();
  const prototypeCheck = Object.getPrototypeOf(newEmployee) === Employee;

  output.textContent = `
Greeting: ${greeting}

Prototype Chain:
newEmployee → Employee → Person

Prototype Check:
Object.getPrototypeOf(newEmployee) === Employee → ${prototypeCheck}
`;
}

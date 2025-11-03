
class Person {
  constructor() {
    this.name = "";
    this.age = 0;
  }


  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  greet() {
    const message = `Hello, I am ${this.name}, ${this.age} years old.`;
    document.getElementById("output").textContent = message;
    return this; 
  }
}

function createPerson() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    document.getElementById("output").textContent = "⚠️ Please enter both name and age.";
    return;
  }

  const person = new Person().setName(name).setAge(age).greet();

  console.log(person); 
}

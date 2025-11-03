class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow (No elements to pop)";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    return `[ ${this.items.join(", ")} ]`;
  }
}

const stack = new Stack();

function pushElement() {
  const input = document.getElementById("element").value;
  if (input === "") {
    document.getElementById("result").innerText = "⚠️ Please enter a value to push.";
    return;
  }
  stack.push(input);
  document.getElementById("stackDisplay").innerText = stack.display();
  document.getElementById("result").innerText = `✅ Pushed: ${input}`;
  document.getElementById("element").value = "";
}

function popElement() {
  const popped = stack.pop();
  document.getElementById("stackDisplay").innerText = stack.display();
  document.getElementById("result").innerText = `🧺 Popped: ${popped}`;
}

function peekElement() {
  const top = stack.peek();
  document.getElementById("result").innerText = `👀 Top Element: ${top}`;
}

function checkEmpty() {
  const empty = stack.isEmpty();
  document.getElementById("result").innerText = empty ? "✅ Stack is empty" : "❌ Stack is not empty";
}

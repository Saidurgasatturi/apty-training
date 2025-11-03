
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); 
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow (No elements to dequeue)";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    return `[ ${this.items.join(", ")} ]`;
  }
}

const queue = new Queue();

function enqueueElement() {
  const input = document.getElementById("element").value;
  if (input === "") {
    document.getElementById("result").innerText = "⚠️ Please enter a value to enqueue.";
    return;
  }
  queue.enqueue(input);
  document.getElementById("queueDisplay").innerText = queue.display();
  document.getElementById("result").innerText = `✅ Enqueued: ${input}`;
  document.getElementById("element").value = "";
}

function dequeueElement() {
  const removed = queue.dequeue();
  document.getElementById("queueDisplay").innerText = queue.display();
  document.getElementById("result").innerText = `🧺 Dequeued: ${removed}`;
}

function peekElement() {
  const next = queue.peek();
  document.getElementById("result").innerText = `👀 Next Element: ${next}`;
}

function checkEmpty() {
  const empty = queue.isEmpty();
  document.getElementById("result").innerText = empty ? "✅ Queue is empty" : "❌ Queue is not empty";
}

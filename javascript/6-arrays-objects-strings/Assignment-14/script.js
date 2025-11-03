
function deepClone(obj) {

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

function cloneObject() {
  const output = document.getElementById("output");

  let obj = { 
    a: 1, 
    b: { 
      c: 2, 
      d: [3, 4, 5] 
    } 
  };

  let clone = deepClone(obj);

  clone.b.c = 99;
  clone.b.d.push(6);

  output.textContent = `
Original Object:
${JSON.stringify(obj, null, 2)}

Cloned & Modified Object:
${JSON.stringify(clone, null, 2)}

✅ Result: Changes in clone DO NOT affect original object.
`;
}

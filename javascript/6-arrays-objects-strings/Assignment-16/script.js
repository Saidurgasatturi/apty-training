
function deepMerge(target, source) {

  for (let key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
    
      if (!target[key] || typeof target[key] !== "object") {
        target[key] = {}; 
      }
      deepMerge(target[key], source[key]);
    } else {

      target[key] = source[key];
    }
  }
  return target;
}


function mergeObjects() {
  const output = document.getElementById("output");

  try {
   
    const obj1 = JSON.parse(document.getElementById("obj1Input").value);
    const obj2 = JSON.parse(document.getElementById("obj2Input").value);


    const result = deepMerge(structuredClone(obj1), obj2);

    output.textContent = JSON.stringify(result, null, 2);
  } catch (err) {
    output.textContent = "⚠️ Invalid JSON format. Please check your input.";
  }
}

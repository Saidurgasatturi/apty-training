function mostFrequent(arr) {
  const freqMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1; 
    return acc;
  }, {});

  let maxCount = 0;
  let mostFrequentElement = null;

  for (let key in freqMap) {
    if (freqMap[key] > maxCount) {
      maxCount = freqMap[key];
      mostFrequentElement = key;
    }
  }

  return mostFrequentElement;
}

function findMostFrequent() {
  let input = document.getElementById("arrayInput").value;
  let resultElement = document.getElementById("result");

  if (input.trim() === "") {
    resultElement.innerText = "⚠️ Please enter array elements.";
    return;
  }

  let arr = input.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n));

  let mostCommon = mostFrequent(arr);

  resultElement.innerText = `Most Frequent Element: ${mostCommon}`;
}

const resultElement = document.getElementById("result");

function appendToResult(value) {
  resultElement.textContent += value;
}


function clearResult() {
  resultElement.textContent = "";
}

t
function calculate() {
  const expression = resultElement.textContent;

  try {
    const result = eval(expression);
    resultElement.textContent = result;
  } catch (error) {
    resultElement.textContent = "Error";
  }
}
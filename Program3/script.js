function greatestThreeNumbers() {
  var dom = document;
  var num1 = dom.getElementById("num1");

  var number1 = parseInt(num1.value);

  var result = dom.getElementById("result");

  if (number1 < 0) {
    result.innerHTML = `Number is Negative: ${number1}`;
  } else if (number1 > 0) {
    result.innerHTML = `Number is Positive: ${number1}`;
  } else if (number1 == 0) {
    result.innerHTML = `Number is Zero: ${number1}`;
  } else {
    result.innerHTML = `Incorrect input`;
  }

  num1.value = "";
}

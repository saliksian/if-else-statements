function greatestTwoNumbers() {
  var dom = document;
  var num1 = dom.getElementById("num1");

  var num2 = dom.getElementById("num2");

  var number1 = parseInt(num1.value);

  var number2 = parseInt(num2.value);

  var result = dom.getElementById("result");

  if (number1 > number2) {
    result.innerHTML = `Number 1 is Greater: ${number1}`;
  } else if (number2 > number1) {
    result.innerHTML = `Number 2 is Greater: ${number2}`;
  } else {
    result.innerHTML = `Numbers Are Equal`;
  }

  num1.value = "";
  num2.value = "";
}

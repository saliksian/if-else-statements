function greatestThreeNumbers() {
  var dom = document;
  var num1 = dom.getElementById("num1");

  var num2 = dom.getElementById("num2");

  var num3 = dom.getElementById("num3");

  var number1 = parseInt(num1.value);

  var number2 = parseInt(num2.value);

  var number3 = parseInt(num3.value);

  var result = dom.getElementById("result");

  if (number1 > number2 && number1 > number3) {
    result.innerHTML = `Number 1 is Greater: ${number1}`;
  } else if (number2 > number1 && number2 > number3) {
    result.innerHTML = `Number 2 is Greater: ${number2}`;
  }
  else if (number3 > number1 && number3 > number2) {
    result.innerHTML = `Number 3 is Greater: ${number3}`;
  }
  else if (number1 == number2 == number3) {
    result.innerHTML = `Numbers Are Equal`;
  }
   else {
    result.innerHTML = `Incorrect input`;
  }

  num1.value = "";
  num2.value = "";
  num3.value = "";
}

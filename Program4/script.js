function greatestThreeNumbers() {
  var dom = document;
  var num1 = dom.getElementById("num1");

  var number1 = parseInt(num1.value);

  var result = dom.getElementById("result");

  if (number1%5 == 0 && number1%11 == 0) {
    result.innerHTML = `Number is Divisible By 5 and 11: ${number1}`;
  }else {
    result.innerHTML = `Number is Not Divisible By 5 and 11: ${number1}`;
  }

  num1.value = "";
}

function evenOrOdd() {
  var dom = document;
  var num1 = dom.getElementById("num1");

  var number1 = parseInt(num1.value);

  var result = dom.getElementById("result");

  if (number1%2 == 0) {
    result.innerHTML = `Number is Even: ${number1}`;
  }else if (number1%2 == 0) {
    result.innerHTML = `Number is Odd: ${number1}`;
  }else{
    result.innerHTML = `Enter Valid input: ${number1}`;
  }

  num1.value = "";
}

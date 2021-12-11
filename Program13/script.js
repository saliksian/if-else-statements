
function amount() {
  var dom = document;
  var num = dom.getElementById("amt");
  var num1 = parseInt(num.value);

  var result = dom.getElementById("result");
  if (num1 >= 10) {
    var x = num1;
    var five = 0;
    var tho = 0;
    var fiv = 0;
    var hun = 0;
    var fif = 0;
    var twn = 0;
    var ten = 0;

    while (x >= 5000) {
      five++;
      x = x - 5000;
    }
    while (x >= 1000) {
      tho++;
      x = x - 1000;
    }
    while (x >= 500) {
      fiv++;
      x = x - 500;
    }
    while (x >= 100) {
      hun++;
      x = x - 100;
    }
    while (x >= 50) {
      fif++;
      x = x - 50;
    }
    while (x >= 20) {
      twn++;
      x = x - 20;
    }
    while (x >= 10) {
      ten++;
      x = x - 10;
    }

  

    result.innerHTML = `In ${num1}: There is ${ten} notes of Ten,${twn} notes of Twenty,${fif} notes of Fifty, ${hun} notes of Hundred,${fiv} notes of Five-Hundred,${tho} notes of Thousand,${five} notes of Five-Thousand`;
  }
  num.value = "";
}



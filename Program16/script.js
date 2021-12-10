function Bill() {
  var dom = document;
  var bill = dom.getElementById("bill");
  var result = dom.getElementById("result");

  var unit = parseFloat(bill.value);

  var fif;
  var hund1;
  var hund2;
  var max;

  var total;
  var totalbill;
  var charges;

  function calculateBill(cal) {
    charges = cal * 0.2;
    totalbill = cal + charges;
    result.innerHTML = `Total Bill: Rs ${totalbill}`;
  }

  if (unit >= 0) {
    if (unit <= 50) {
      total = unit * 0.5;
      calculateBill(total);
    } else if (unit > 50 && unit <= 150) {
      hund1 = unit - 50;
      fif = unit - hund1;
      total = fif * 0.5 + hund1 * 0.75;
      calculateBill(total);
    } else if (unit > 150 && unit <= 250) {
      hund2 = unit - 150;
      unit = unit - hund2;
      hund1 = unit - 50;
      fif = unit - hund1;
      total = fif * 0.5 + hund1 * 0.75 + hund2 * 1.2;
      calculateBill(total);
    } else if (unit > 250) {
      max = unit - 250;
      unit = unit - max;
      hund2 = unit - 150;
      unit = unit - hund2;
      hund1 = unit - 50;
      fif = unit - hund1;
      total = fif * 0.5 + hund1 * 0.75 + hund2 * 1.2 + max * 1.5;
      calculateBill(total);
    }
  } else {
    result.innerHTML = `Enter valid input!!`;
  }

  bill.value = "";
}


function weekDay() {
  var dom = document;
  var char = dom.getElementById("char");
  var char1 = char.value;

  var result = dom.getElementById("result");
  // console.log(char1.length);
  
  
  if (char1 == 1) {
     result.innerHTML = `${char.value} : Monday`;
     
   }
   else if (char1 == 2) {
    result.innerHTML = `${char.value} : Tuesday`;
  }
  else if (char1 == 3) {
    result.innerHTML = `${char.value} : Wednesday`;
  }
  else if (char1 == 4) {
    result.innerHTML = `${char.value} : Thursday`;
  }
  else if (char1 == 5) {
    result.innerHTML = `${char.value} : Friday`;
  }
  else if (char1 == 6) {
    result.innerHTML = `${char.value} : Saturday`;
  }
  else if (char1 == 7) {
    result.innerHTML = `${char.value} : Sunday`;
  }
  else{
    result.innerHTML = `${char.value} : Invalid Input`;

  }

    char.value = "";
  }
 



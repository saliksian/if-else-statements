function month() {
  var dom = document;
  var char = dom.getElementById("char");
  var char1 = char.value;

  var result = dom.getElementById("result");
  // console.log(char1.length);
  
  
  if (char1 == 1 || char1==3 ||char1 == 5 || char1==7 ||char1 == 8 || char1==10 ||char1 == 12 ) {
     result.innerHTML = `${char.value} : 31 Days`;
     
    }
    else if (char1 == 2) {
      result.innerHTML = `${char.value} : 28 or 29 Days`;
    }
    else if (char1 == 4 || char1==6 ||char1 == 9 || char1==11) {
    result.innerHTML = `${char.value} : 30 Days`;
    
  }
  
  else{
    result.innerHTML = `${char.value} : Invalid Input`;

  }

    char.value = "";
  }
 



function upperCaseOrLowerCase() {
  var dom = document;
  var char = dom.getElementById("char");
  var char1 = char.value;

  var result = dom.getElementById("result");
  // console.log(char1.length);

  if (char1.length == 1) {
    if (char1 >= "A" && char1 <="Z" || char1 >= "a" && char1<="z") {
      // result.innerHTML = `${char.value} : is an Alphabet`;
      if (char1 >= "A" && char1 <="Z") {
        result.innerHTML = `${char.value} : is an UpperCase`;
        
      }
      else{
        result.innerHTML = `${char.value} : is a LowerCase`;

      }
     
    } 
    else{
      result.innerHTML = `${char.value} : is a Not an Alphabet`;

    }
  }
  else {
    result.innerHTML = `Enter a Single Character!!`;
  }

  char.value = "";
}

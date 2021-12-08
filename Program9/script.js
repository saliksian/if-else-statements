function checkCharacter() {
  var dom = document;
  var char = dom.getElementById("char");
  var char1 = char.value;

  var result = dom.getElementById("result");
  // console.log(char1.length);

  if (char1.length == 1) {
    if (char1 >= "A" && char1 <="Z" || char1 >= "a" && char1<="z") {
      result.innerHTML = `${char.value} : is an Alphabet`;
     
    } else if (char1 >= 0) {
      result.innerHTML = `${char.value} : is a Digit`;
    }
    else{
      result.innerHTML = `${char.value} : is a Special Character`;

    }
  }
  else {
    result.innerHTML = `Enter a Single Character!!`;
  }

  char.value = "";
}

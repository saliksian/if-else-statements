function vowelOrNot() {
  var dom = document;
  var char = dom.getElementById("char");
  var char1 = char.value

 

  var result = dom.getElementById("result");
  // console.log(char1.length);

  if (char1.length == 1) {
    // || char <'Z' || char == 'Z'
    if (char1 >= 'A' ) {
      result.innerHTML = `${char.value} : is an Alphabet`;
    
    }else{
      result.innerHTML = `${char.value} : is Not an Alphabet`;
      
    }
    
  }
  else{
    result.innerHTML = `Enter a Single Character!!`;

  }



  char.value = "";
}

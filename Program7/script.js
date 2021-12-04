function alphaBet() {
  var dom = document;
  var char = dom.getElementById("char");
  var char1 = char.value

 

  var result = dom.getElementById("result");
  console.log(char1);

if (char1 >= 'A' || char <'Z' || char == 'Z') {
  result.innerHTML = `${char.value} : is an Alphabet`;

}else{
  result.innerHTML = `${char.value} : is Not an Alphabet`;

}

  char.value = "";
}

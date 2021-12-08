function Grade() {
  var dom = document;
  var physics = dom.getElementById("phy");
  var chemistry = dom.getElementById("chem");
  var biology = dom.getElementById("bio");
  var mathematics = dom.getElementById("math");
  var computer = dom.getElementById("comp");

  

  var phy = parseInt(physics.value);
  var chem = parseInt(chemistry.value);
  var bio = parseInt(biology.value);
  var math = parseInt(mathematics.value);
  var comp = parseInt(computer.value);

  var percentage = ((phy+chem+bio+math+comp)/500)*100;
  

  var result = dom.getElementById("result");
  // console.log(char1.length);
  
  
  if (percentage>=90) {
   result.innerHTML = `${percentage}: Grade A `;
 }
 else if (percentage>=80) {
  result.innerHTML = `${percentage}: Grade B `;
}
else if (percentage>=70) {
  result.innerHTML = `${percentage}: Grade C `;
}
else if (percentage>=60) {
  result.innerHTML = `${percentage}: Grade D `;
}
else if (percentage>=40) {
  result.innerHTML = `${percentage}: Grade E `;
}
else if (percentage<40) {
  result.innerHTML = `${percentage}: Grade F `;
}
 

  physics.value = "";
  chemistry.value = "";
  biology.value = "";
  mathematics.value = "";
  computer.value = "";
}
 



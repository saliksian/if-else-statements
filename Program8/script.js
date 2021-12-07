function vowelOrNot() {
  var dom = document;
  var char = dom.getElementById("char");
  var char1 = char.value;

  var result = dom.getElementById("result");
  // console.log(char1.length);

  if (char1.length == 1) {
    if (char1 >= "A") {
      // result.innerHTML = `${char.value} : is an Alphabet`;
      if (
        char1 == "A" ||
        char1 == "a" ||
        char1 == "E" ||
        char1 == "e" ||
        char1 == "I" ||
        char1 == "i" ||
        char1 == "O" ||
        char1 == "o" ||
        char1 == "U" ||
        char1 == "u"
      ) {
        result.innerHTML = `${char.value} : is a Vowel`;
      } else {
        result.innerHTML = `${char.value} : is Consonant`;
      }
    } else {
      result.innerHTML = `${char.value} : is Not an Alphabet`;
    }
  } else {
    result.innerHTML = `Enter a Single Character!!`;
  }

  char.value = "";
}

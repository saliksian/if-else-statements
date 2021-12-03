function leapYear() {
  var dom = document;
  var year = dom.getElementById("year");

  var leap = parseInt(year.value);

  var result = dom.getElementById("result");

  if (leap%4 == 0) {
    result.innerHTML = `Year is Leap: ${leap}`;
  }else if (leap%4 != 0) {
    result.innerHTML = `${leap} is not Leap Year`;
  }else{
    result.innerHTML = `Enter Valid input: ${leap}`;
  }

  year.value = "";
}

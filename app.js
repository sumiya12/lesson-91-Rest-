// ES5
function printAge() {
  console.log(arguments);
  var arr = Array.prototype.slice.call(arguments);

  console.log(arr);
  arr.forEach(function (e) {
    console.log(e + "ond tursun hunii nas : " + (2022 - e));
  });
}

printAge(1992, 2000, 2012, 1990, 1995, 1980);

var date = new Date();
function printAge6(...year) {
  year.forEach((el) =>
    console.log(el + " ond tursun hunii nas " + (date.getFullYear() - el))
  );
}
printAge6(1992, 2000, 2012, 1990, 1995, 1980);

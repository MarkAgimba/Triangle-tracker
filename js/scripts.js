var triangleType = function(sideA, sideB, sideC){
  if (isTriangle(sideA, sideB, sideC)) {
    if (sideA===sideB && sideB===sideC) {
      return "equilateral";
    } else if (sideA===sideB || sideA===sideB || sideC===sideB) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return "These sides do not a triangle make.";
  }
};

var isTriangle = function(sideA, sideB, sideC) {
  return sideA <= (sideB + sideC) && sideB <= (sideC + sideA) && sideC <= (sideA + sideB)
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangle(sideA, sideB, sideC);

    sideA = parseInt($("input#sideA").val(""));
    sideB = parseInt($("input#sideB").val(""));
    sideC = parseInt($("input#sideC").val(""));

    $("#result").append(result);
    event.preventDefault();
  });
});

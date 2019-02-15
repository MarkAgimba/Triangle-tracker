var side1;
var side2;
var side3;

var whatKindOfTriangle = function() {
  if (sideA === sideB && sideA === sideC) {
    return "equilateral";
  }
  else if (sideA === sideB || sideA === sideC || sideB === sideC){
    return "isosceles";
  }
  else {
    return "scalene";
  }
}
var isItATriangle = function() {
  if ( (sideA + sideB) <= sideC ) {
      return "not a triangle";
  }
  else if ( (sideB + sideC) <= sideA ) {
    return "not a triangle";
  }
  else if ( (sideA + sideC) <= sideB ) {
    return "not a triangle";
  }
  else if (!(sideA) || !(sideB) || !(sideC)){
    return "not a triangle. Please enter three numerical values greater than zero";
  }
  else {
    return whatKindOfTriangle();
  }
}
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var result;

    side1 = parseInt($("#sideA").val());
    side2 = parseInt($("#sideB").val());
    side3 = parseInt($("#sideC").val());

    result = isItATriangle();

    $("#type").text(result);
    $(".output").show();
  });
});

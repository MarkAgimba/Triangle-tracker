function check_getTriangles(){
  var sideA = parseFloat(prompt("Enter Parameters for side A"));
  var sideB = parseFloat(prompt("Enter Parameters for side B"));
  var sideC = parseFloat(prompt("Enter Parameters for side C"));

if(sideA===sideB && sideB===sideC && sideC===sideB){
alert("Triangle is Equilateral ");
}
else if(sideA===sideB || sideA===sideC && sideC===sideB){
alert("Triangle is Isosceles");
}

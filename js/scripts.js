function trackButton(){
  var A=document.getElementById("A").value;
  var B=document.getElementById("B").value;
  var C=document.getElementById("C").value;

  if(A===B && B===C && B===C){
document.getElementById("result").innerHTML="This is an equilateral triangle"
  }
  else if(A===B || A===C || C===B){
document.getElementById("result").innerHTML="This is an Isosceles Triangle"
  }
  else if((A+B)<= C || (A+C)<=B || (B+C)<=A) {
document.getElementById("result").innerHTML="This is not a Triangle"
  }
  else{(A+B)>=C || (B+C)>=A || (C+A)>=B
document.getElementById("result").innerHTML="This is a Scalene Triangle"
  }
  }

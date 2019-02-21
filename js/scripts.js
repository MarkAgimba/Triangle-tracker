function trackButton() {

  var A=parseFloat(document.getElementById("A").value);
  var B=parseFloat(document.getElementById("B").value);
  var C=parseFloat(document.getElementById("C").value);
  if((A+B)<=C || (B+C)<=A || (C+C)<=A){
    document.getElementById("result").innerHTML="This is not a triangle"
  }else if ((A===B && (B === C) && (C===A)){
    document.getElementById("result").innerHTML="This is an Equilateral triangle"
  } else if(A === B || A === C || C === B) {
    document.getElementById("result").innerHTML="This is an Isosceles Triangle"

  } else {
    (A !== B) >= C || (B + C) >= A || (C + A) >= B
    document.getElementById("result").innerHTML="This isnt a Triangle"
  }
}

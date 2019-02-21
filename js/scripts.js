function trackButton() {

  var A=parseFloat(document.getElementById("A").value);
  var B=parseFloat(document.getElementById("B").value);
  var C=parseFloat(document.getElementById("C").value);

  if (A === B && B === C && B === C) {
    document.getElementById("result").innerHTML="This is an Equilateral triangle"
  } else if(A === B || A === C || C === B) {
    document.getElementById("result").innerHTML="This is an Isosceles Triangle"
  } else if((A + B) <= C || (A + C) <= B || (B + C) <= A) {
    document.getElementById("result").innerHTML="This is a Scalene triangle"
  } else {
    (A !== B) >= C || (B + C) >= A || (C + A) >= B
    document.getElementById("result").innerHTML="This isnt a Triangle"
  }
}

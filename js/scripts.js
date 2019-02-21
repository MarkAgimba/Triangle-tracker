function trackButton() {
  var A=parseFloat(document.getElementById("a").value);
  var B=parseFloat(document.getElementById("b").value);
  var C=parseFloat(document.getElementById("c").value);
  if((A+B)<=C || (B+C)<=A || (C+A)<=B){
    document.getElementById('result').innerHTML="This is not a triangle"
  } else if ((A===B) && (B === C) && (C===A)) {
    document.getElementById('result').innerHTML="This is an Equilateral triangle"
  } else if ((A===B) || (B===C) || (C === B)) {
    document.getElementById('result').innerHTML="This is an Isosceles Triangle"
  }else if ((A!==B) && (B!==C) && (C!==A)) {
    document.getElementById('result').innerHTML="This is a scalene triangle"
  }else{
    document.getElementById('result').innerHTML="Enter the values"
  }
};

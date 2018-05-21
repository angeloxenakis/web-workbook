var myRadius = parseFloat(prompt("Enter the radius of your circle in cm:",0));
calculateArea(myRadius);
var area;

function calculateArea(myRadius){
  area = (myRadius * myRadius * Math.PI);
  return area;
}

document.write(area);

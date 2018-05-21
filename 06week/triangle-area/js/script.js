var side1 = 10;
var side2 = 10;
var side3 = 15;
/* First we set a value for the length of each side of our triangle by creating
a variable for each length */

var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
/* The we create a variable to calculate our triangle's perimeter by adding together
the length of each side and divding that sum by 2, followed by one last variable
to calculate our area using the Math.sqrt function and multiplying each perimeter
side */

document.write(area);

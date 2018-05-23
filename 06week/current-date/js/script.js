"use strict"

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0! and
var yyyy = today.getFullYear();
/*above are built in javascript methods that retreive the current numbered day
of the month, month name, and full year*/

if(dd<10) {
    dd = '0'+dd
}
/*This if statement is adding a 0 before the numbered month if it is less that 10
to keep 2 digits in the display of the number*/

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
/*This is writing the compilation of all the separate variables that make of the
full date into the web page*/

//I jacked this from stack overflow but I made sure I fully understood what was going on here.

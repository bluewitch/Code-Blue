/*
angle.js
~dwulf
For the last fucking time
	We create a function named angle with two parameters
	named hour and minute.

	We then create a variable and instantiate it with the 
	new and improved let keyword, ECMA 2016 compliant.

	We create hAngle as a variable, and calculate from
	data in our hour and minute parameters using 
	appropriate operators.

	We then create mAngle as a variable, and calculate 
	from the data of the minute parameter using 
	appropriate operators.

	We create angle as a variable, and calculate from
	data in hAngle and mAngle variables using JavaScript
	native Math.abs object to calculate a absolute number.
	Subtracting value in hAngle from value in mAngle

	We then take the value from that calculation and
	calculate again using JavaScript native Math.min object
	to return the smallest of zero or more numbers. 
	Subtracting 360 from the value in the variable angle.

	We then return the new value in the variable angle.

	THAT is your ANSWER to determine the angles of a 
	clock based on the reletive position of the clock 
	hands!

*/
"use strict";

function angle( hour, minute ) 
{
	let hAngle = 0.5 * ( hour * 60 + minute );
	let mAngle = 6 * minute;

	let angle = Math.abs( hAngle - mAngle );
	    angle = Math.min( angle, 360 - angle );

return angle;
}

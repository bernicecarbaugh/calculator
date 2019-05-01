var num1 = parseInt(prompt("Enter first number."));
var num2 = parseInt(prompt("Enter a second number."));

var add = function(num1, num2) {
	return num1 + num2;
}

var subtract = function(num1, num2) {
	return num1 - num2;
}

var multiply = function(num1, num2) {
	return num1 * num2;
}

var divide = function(num1, num2) {
	return num1 / num2;
}

//var result = add(num1, num2);
//var result = subtract(num1, num2);
//var result = multiply(num1, num2);
/* Comment out multiline
jlkajsja
askj*/
var result = divide(num1, num2);

alert ("The answer is " + result);

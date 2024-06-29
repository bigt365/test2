

function sayHello() {
	console.log("Hello");
}

sayHello();

var sayBye = function() {
	console.log("Bye");
}

sayBye();

function sing(song){
console.log(song);
}

sing("Laaa deee daaa");
sing("hellooooo");
sing("backstreet back alright");

function multiply(a, b) {
	if (a > 10 || b > 10) {
		return "That's too hard";
	} else {
	return a * b;
}
}

multiply(5, 10);

function checkDriverAge() {
var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulation on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge();